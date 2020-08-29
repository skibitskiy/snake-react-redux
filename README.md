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

[game](https://4.downloader.disk.yandex.ru/preview/a15208f020bb58f103be255619076e4870e9584fa5d43798669c0f8560f90adc/inf/9FwGLZmRC62CfNL0q_pIqCapVMcp9-hVT2ysUB20PCTebPGxOTT4XcHU5VH4Qzj7RCp7xaRnmezCcTLXsArzEQ%3D%3D?uid=185723262&filename=Screenshot_1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=185723262&tknv=v2&size=1349x657)