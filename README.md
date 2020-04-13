[![NPM](https://nodei.co/npm/pblapi.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/pblapi.js/)

# PBL-API.js
The official package for posting server count to PBL

## Installation
Simply run `npm install pblapi.js`

### Usage

Getting a bot:
```js

const pbl = require('pblapi.js');
const PBL = new PBL.Client({
id: 'your-bot-id', key: 'your-bot-pbl-token'
});

PBL.getBot('some ID') //if you don't add ID it will take as default provided in preparing the client
 .then(res => console.log(res.data))
 .catch(err => console.log(err));

```

Getting a user:
```js

const pbl = require('pblapi.js');
const PBL = new PBL.Client({
id: 'your-bot-id', key: 'your-bot-pbl-token'
});

PBL.getUser('some ID') 
 .then(res => console.log(res.data))
 .catch(err => console.log(err));

```

Posting Bot Server Count:
```js
const pbl = require('pblapi.js');
const PBL = new PBL.Client({
id: 'your-bot-id', key: 'your-bot-pbl-token'
});

PBL.postStats(44) //must be a number
 .then(res => console.log(res.data))
 .catch(err => console.log(err));
```

 ## You may see new features in fututre.
