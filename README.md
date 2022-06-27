# PokaCard

## Приложение для эмуляции при помощи технологии NFC

---
>P.S. На данный момент в приложении работают NFC-ридер и NFC-райтер, в дальнейшем будет реализовано корректное подключение к базе данных, вывод из неё информации о картах пользователя и их использовании
---

![npm version](https://img.shields.io/badge/npm-v8.11.0-blue)
![expo cli](https://img.shields.io/badge/expo%20-v5.4.11%20-green)
![platforms](https://img.shields.io/badge/platforms-android-lightgrey)
![platforms](https://img.shields.io/badge/tech-NFC%7CBlutooth-red)

## Для пользователей

Актуальная версия приложения представлена в [релизах](https://github.com/AndrewBalin/NFC_poka/releases "Relises")

### Использование приложения


* Для доступа ко всем возможностям приложения зарегистрируйтесь или войдите в свой аккаунт в приложениии:

![Экран входа в приложение](./assets/LoginScreen.png "Экран входа в приложение")

* После регистрации добавьте новую карту введя её данные и смело используйте приложение для её эмуляции.

---

## Для разработчиков

Чтобы собрать приложение, вам нужно скачать его исходный код [отсюда](https://github.com/AndrewBalin/NFC_poka/releases "Relises") или воспользоваться системой git

    git clone https://github.com/AndrewBalin/NFC_poka.git

Для работы вам потреюуется [Node.js](https://nodejs.org/dist/v16.15.1/node-v16.15.1-x64.msi), [React Native](https://reactnative.dev), вы также можете использовать [Expo](https://expo.dev) для удобства.

* Для установки Expo вам нужно выполнить
    `npm i expo-cli` в директории проекта

* Чтобы приложение корректно работало, нужно выполнить команду `npm install` для установки зависимостей

* Если все установки были выполнены правильно, то при запуске `npm start` вы сможете использовать "Metro Bundler"


* Для сборки приложения вам нужно использовать `expo build:android` или  `expo build:ios`, далее следуя указаниям в терминале, вы получаете ссылку для скачивания приложения
