<h1 align="center">🤖 Nam-Bot 🤖</h1>
<p>
 <img alt="Build" src="https://travis-ci.com/victorst79/NaM-Bot.svg?branch=master" />
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D6.10.0-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D12.0.0-blue.svg" />
  <a href="https://github.com/victorst79/NaM-Bot#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/victorst79/NaM-Bot/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/victorst79/NaM-Bot/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/victorst79/Nam-Bot" />
  </a>
</p>

> NaM-Bot is a multifunctional chat bot for management and entertainment on Discord channels. <br>
> Play music, manage channels with a large number of users, establish rules for each channel, entertainment commands and more features.

### 🏠 [Homepage](https://github.com/victorst79/NaM-Bot#readme)

## Prerequisites

- npm >= 6.10.0
- node >= 12.0.0

## Install

```sh
npm install
```

## Compile

```sh
npm run build
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

Test for services
```sh
npm run test-services
```

Test for API-endpoints
```sh
npm run test-api
```

## Run Prettier

```sh
npm run format
```

## Develop mode

To develop locally, a previous configuration must be carried out. The first obviously is to clone the repository.
The next point is to create a ".env" file with the following structure:
```
TOKEN=Add bot token here 
API_TOKEN=Api token 
PREFIX=Prefix (For example: !, -, ., <, ...)
```
To get a bot token you need to create a new application on the [Discord developer portal](https://discord.com/developers/applications).
The api token is something that is still in development and is intended to be replaced by JWT, for the moment a secret word / code is used to suit the user.
And finally, the prefix is by which the bot will take into account that what is written to it is a command for it, by default it is "!", But it can be modified.


## Author

👤 **Victor Santaella**

* Github: [@victorst79](https://github.com/victorst79)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/victorst79/NaM-Bot/issues). You can also take a look at the [contributing guide](https://github.com/victorst79/NaM-Bot/blob/master/CONTRIBUTING.md).

You can also contribute translations of the command feedback to include them in i18n.

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.buymeacoffee.com/victorst" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

## 📝 License

Copyright © 2021 [Victor Santaella](https://github.com/victorst79).<br />
This project is [MIT](https://github.com/victorst79/NaM-Bot/blob/master/LICENSE) licensed.