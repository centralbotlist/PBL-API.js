[![NPM](https://nodei.co/npm/pbl-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/pbl-api/)

# PBL-API.js
The official package for posting server count to PBL

## Installation
Simply run `npm install pbl-api`

### Usage

Posting Bot Server Count:
```js
const PBL = require('pbl-api');
const Client = new PBL.Client({
id: 'your-bot-id', botToken: 'your-bot-pbl-token'
});

Client.postServerCount(20); //you can use <client>.guilds.size also
```

 ## You may see new features in fututre.
