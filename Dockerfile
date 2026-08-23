# syntax=docker/dockerfile:1
# Multi-arch: собирать через
#   docker buildx build --platform linux/amd64,linux/arm64 -t fotolux-verify .

FROM node:22-alpine AS deps
WORKDIR /app
# yarn по стандарту проекта; yarn 1.x идёт в образе node:*-alpine из коробки.
# --frozen-lockfile = сборка падает, если yarn.lock разошёлся с package.json,
# а не молча ставит другие версии.
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --non-interactive

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# Шрифты next/font тянутся с Google Fonts на этапе сборки — нужен интернет.
RUN yarn build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3000 HOSTNAME=0.0.0.0
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
