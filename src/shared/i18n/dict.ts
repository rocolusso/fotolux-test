export const locales = ['ru', 'ro'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'ru'

/** Путь локали: русская на корне, румынская в /ro/. */
export const localePath = (l: Locale) => (l === defaultLocale ? '/' : `/${l}`)

export type Dict = (typeof dict)['ru']

export const dict = {
  ru: {
    htmlLang: 'ru-MD',
    langName: 'Русский',
    otherLangName: 'Română',

    meta: {
      title: 'Fotolux — фото и видеосъёмка в Бельцах и Кишинёве',
      description:
        'Fotolux — фото и видеосъёмка в Бельцах и Кишинёве с 2010 года. Свадьбы и кумэтрии, студийная и семейная съёмка, предметная съёмка, видеопродакшн, аэросъёмка.',
    },

    nav: { services: 'Услуги', works: 'Работы', about: 'О нас', contact: 'Контакты' },

    hero: {
      eyebrow: 'Бельцы · Кишинёв · Молдова',
      h1: 'Фото и видеосъёмка в Бельцах и Кишинёве',
      lead: 'Fotolux снимает свадьбы, кумэтрии, студийные и семейные съёмки, предметную съёмку для бизнеса и коммерческое видео. Работаем с 2010 года, выезжаем по всей Молдове.',
      cta: 'Написать нам',
      ctaSecondary: 'Позвонить',
    },

    services: {
      h2: 'Что снимаем',
      items: [
        {
          t: 'Свадьбы и кумэтрии',
          d: 'Полный день от сборов до банкета. Фото и видео одной командой, координация с ведущим и площадкой.',
        },
        {
          t: 'Студийная съёмка',
          d: 'Портрет, семья, съёмка для соцсетей и личного бренда. Студии в Бельцах и Кишинёве.',
        },
        {
          t: 'Семейная съёмка',
          d: 'Дома, на природе или в студии. Спокойный темп, без постановочной скованности.',
        },
        {
          t: 'Предметная съёмка',
          d: 'Товары, каталоги, еда и меню для ресторанов. Съёмка под маркетплейсы и интернет-магазины.',
        },
        {
          t: 'Видеопродакшн',
          d: 'Промо-ролики, презентационные фильмы, интервью и подкасты. Монтаж и цветокоррекция.',
        },
        {
          t: 'Аэросъёмка',
          d: 'Съёмка с дрона для торжеств, недвижимости, участков и объектов строительства.',
        },
      ],
    },

    works: {
      h2: 'Работы',
      lead: 'Портфолио пополняется. Полная подборка — в разработке.',
      alt: 'Пример работы Fotolux',
    },

    about: {
      h2: 'О студии',
      p1: 'Fotolux — фото и видеосъёмка в Молдове. Снимаем с 2010 года, база в Бельцах, регулярно работаем в Кишинёве и выезжаем по стране.',
      p2: 'Фотосъёмку веду лично. Видео закрываем вместе с партнёрскими студиями — под задачу и бюджет подбираем ту, чей почерк подходит проекту, а ответственность за результат остаётся на нас.',
      p3: 'Сайт сейчас в разработке: здесь появятся портфолио по направлениям, цены и подробности по каждой услуге.',
      areasLabel: 'Обслуживаемые территории',
    },

    contact: {
      h2: 'Связаться',
      lead: 'Напишите или позвоните — расскажем про сроки, состав съёмки и цены под вашу задачу.',
      phoneLabel: 'Телефон',
      emailLabel: 'Почта',
      areasLabel: 'Работаем',
      hours: 'Ежедневно 09:00 — 21:00',
      hoursLabel: 'Часы работы',
    },

    footer: { rights: 'Все права защищены.', dev: 'Сайт в разработке' },
  },

  ro: {
    htmlLang: 'ro-MD',
    langName: 'Română',
    otherLangName: 'Русский',

    meta: {
      title: 'Fotolux — servicii foto și video în Bălți și Chișinău',
      description:
        'Fotolux — servicii foto și video în Bălți și Chișinău din 2010. Nunți și cumătrii, ședințe foto de studio și de familie, fotografie de produs, video comercial, filmare cu drona.',
    },

    nav: {
      services: 'Servicii',
      works: 'Lucrări',
      about: 'Despre noi',
      contact: 'Contacte',
    },

    hero: {
      eyebrow: 'Bălți · Chișinău · Moldova',
      h1: 'Servicii foto și video în Bălți și Chișinău',
      lead: 'Fotolux filmează și fotografiază nunți și cumătrii, ședințe de studio și de familie, produse pentru business și video comercial. Lucrăm din 2010 și ne deplasăm în toată Moldova.',
      cta: 'Scrie-ne',
      ctaSecondary: 'Sună acum',
    },

    services: {
      h2: 'Ce filmăm',
      items: [
        {
          t: 'Nunți și cumătrii',
          d: 'Ziua întreagă, de la pregătiri până la banchet. Foto și video de aceeași echipă, coordonare cu prezentatorul și locația.',
        },
        {
          t: 'Ședințe de studio',
          d: 'Portret, familie, conținut pentru rețele sociale și brand personal. Studiouri în Bălți și Chișinău.',
        },
        {
          t: 'Ședințe de familie',
          d: 'Acasă, în natură sau în studio. Ritm calm, fără poze rigide.',
        },
        {
          t: 'Fotografie de produs',
          d: 'Produse, cataloage, mâncare și meniuri pentru restaurante. Filmare pentru marketplace și magazine online.',
        },
        {
          t: 'Video comercial',
          d: 'Clipuri promo, filme de prezentare, interviuri și podcasturi. Montaj și corecție de culoare.',
        },
        {
          t: 'Filmare cu drona',
          d: 'Filmare aeriană pentru evenimente, imobiliare, terenuri și șantiere.',
        },
      ],
    },

    works: {
      h2: 'Lucrări',
      lead: 'Portofoliul se completează. Selecția completă este în lucru.',
      alt: 'Exemplu de lucrare Fotolux',
    },

    about: {
      h2: 'Despre studio',
      p1: 'Fotolux — servicii foto și video în Moldova. Lucrăm din 2010, baza este în Bălți, filmăm regulat în Chișinău și ne deplasăm în toată țara.',
      p2: 'Fotografia o realizez personal. Partea video o acoperim împreună cu studiouri partenere — alegem, în funcție de sarcină și buget, studioul al cărui stil se potrivește proiectului, iar responsabilitatea pentru rezultat rămâne la noi.',
      p3: 'Site-ul este în dezvoltare: aici vor apărea portofoliul pe direcții, prețurile și detaliile fiecărui serviciu.',
      areasLabel: 'Zone deservite',
    },

    contact: {
      h2: 'Contact',
      lead: 'Scrieți sau sunați — vă spunem termenele, ce include filmarea și prețurile pentru sarcina dumneavoastră.',
      phoneLabel: 'Telefon',
      emailLabel: 'E-mail',
      areasLabel: 'Deservim',
      hours: 'Zilnic 09:00 — 21:00',
      hoursLabel: 'Program',
    },

    footer: { rights: 'Toate drepturile rezervate.', dev: 'Site în dezvoltare' },
  },
} as const
