import { createI18n } from 'vue-i18n'

const content = {
  en: {
    NavBar: {
      Home: 'Home',
      Services: 'Services',
      Information: 'Information',
      Whishes: 'Whishes',
    },
    Footer: {
      MainText:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet sed ipsam earum ullamaccusantium. Rerum, quidem.',
      Policy: 'Policy',
      Legal: 'Legal',
      Cookies: 'Cookies',
    },
    MiniCard: {
      More: 'More',
    },
    HomeView: {
      heroTitle: 'About me',
      heroInner: 'My name is Daniil and I am a beginner Software Engineer',
    },
    InformationView: {
      infoTextTitle: 'Get ready',
      infoTextInner:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam expedita aliquam estesse autem aut voluptatum dolorum inventore amet, corporis dolorem magnam atque enim quidemquam necessitatibus dolore.',
      Button: 'Go',
      MiniCardTitle: 'Lol',
      MiniCardText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni est accusamus at illum adipisci! ',
    },
    ServicesView: {},
    WhishesView: {},
  },
  ru: {
    NavBar: {
      Home: 'Главная',
      Services: 'Сервисы',
      Information: 'Информация',
      Whishes: 'Пожелания',
    },
    Footer: {
      MainText: 'Просто случайный текст, чтоб заполнить пространство',
      Policy: 'Политика',
      Legal: 'Копирайт',
      Cookies: 'Куки)',
    },
    MiniCard: {
      More: 'Больше',
    },
    HomeView: {
      heroTitle: 'Обо мне',
      heroInner: 'Мое имя Даниил и я начинающий разработчик',
    },
  },
}

export const localization = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: content,
})
