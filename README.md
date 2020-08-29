# Игра Змейка
Это мой простенький проект для тренировки своих знаний в связке React + Redux.
Игра написана в двух стилях работы со стейтом Redux:
- [Классовый](https://github.com/skibitskiy/snake-react-redux/tree/master) - хранилище доступно с помощью HOC'а `connect`.
- [Hooks](https://github.com/skibitskiy/snake-react-redux/tree/redux-hooks) - хранилище доступно с помощью [хуков Redux](https://react-redux.js.org/api/hooks).
#### Используемые библиотеки
- [Immutable.js](https://immutable-js.github.io/immutable-js/) - для упрощения работы с состоянием.
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) - для написания более декларативного кода.
#### Запуск
Запустить проект можно с помощью команды `npm start`. Если объявить переменную окружения `NODE_ENV=development`, то в список middleware будет добавлен [Logger](https://github.com/LogRocket/redux-logger).

![game](https://raw.githubusercontent.com/skibitskiy/snake-react-redux/skibitskiy-patch-1/Screenshot_1.jpg)