export const content = {
  header: {
    nav: {
      intro: { en: "Intro", ru: "Вступление" },
      game: { en: "Game", ru: "Игра" },
      options: { en: "Options", ru: "Опции" },
      highscores: { en: "Highscores", ru: "Рекорды" },
    },
  },
  counter: {
    timeLeft: { en: "Time left", ru: "Времени осталось" },
    totalCorrect: { en: "Correct answers", ru: "Верных ответов" },
    totalIncorrect: { en: "Incorrect answers", ru: "Неверных ответов" },
  },
  highscores: {
    title: { en: "Highscores", ru: "Рекорды" },
  },
  options: {
    title: { en: "Options", ru: "Опции" },
    timer: { en: "Timer", ru: "Обратный отсчет" },
    hints: { en: "Hints", ru: "Подсказки" },
    nosimple: { en: "Remove simple questions", ru: "Без простых вопросов" },
    questAmount: { en: "Amount of questions", ru: "Количество вопросов" },
  },
  intro: {
    title: { en: "Introduction", ru: "Вступление" },
    text: {
      en: "Below you can find a brief guide for the game.",
      ru: "Ниже вы найдете короткую интсрукцию по игре.",
    },
    item1: {
      en: 'You can directly go to the "Game" page (or press the "Start" button below) and challenge yourself in how well you know types conversions in JS.',
      ru: 'Вы можете сразу перейти на вкладку "Игра" (или нажать кнупку "Старт" ниже) и проверить свои знания преобразования данных JS.',
    },
    item2: {
      en: "By default the game has timer on and hints off. However, you can easily adjust options to your preferences.",
      ru: 'По умолчанию игра будет проходить в включенным обратным отсчетом и выключенными подсказками. Однако, перейдя на вкладку "Опции", вы можете изменить настройки игры на свое усмотрение.',
    },
    item3: {
      en: "As soon as you completed the game you will be offered to enter your name and save the score.",
      ru: "По окончанию игры вам будет предложено ввести свое имя и сохранить результат.",
    },
    item4: {
      en: '"Highscores" page is for your scores.',
      ru: 'На вкладке "Рекорды" вы найдете результаты своих предыдущих попыток.',
    },
    btn: { en: "Start", ru: "Старт" },
  },
};

export const signs = {
  "+": "",
  "-": "",
  "*": "",
  "/": "",
  "||": `Оператор "||" - логическое ИЛИ. Приблизительно эквивалентно "a ? a : b". Результат всегда совпадает со значением одного из операндов,
          а не с результатом проверки условия. P.S. "Ложные значения": "", undefined, null, false, +0, -0, NaN`,
  "&&": `Оператор "&&" - логическое И. Приблизительно эквивалентно "a ? b : a". Результат всегда совпадает со значением одного из операндов,
          а не с результатом проверки условия. P.S. "Ложные значения": "", undefined, null, false, +0, -0, NaN`,
  "==": `"==" - Нестрогое равенство. Разрешает преобразование типа.`,
  "===": `"===" - Строгое равенство. Запрещает преобразование типа.`,
};

export const values = [
  '""',
  "{}",
  "[]",
  "[[]]",
  "NaN",
  "[0]",
  "[1]",
  "1",
  "-1",
  "null",
  "undefined",
  "Infinity",
  "-Infinity",
  "0",
  "-0",
  "true",
  "false",
  '"true"',
  '"false"',
  '~"{}".indexOf("__proto__")',
  "~~-0.9",
];
