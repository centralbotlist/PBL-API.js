const axios = require('axios').default;
const isObject = (obj) => !Array.isArray(obj) && obj === Object(obj);
/**
 * @see https://tcbl.glitch.me/api/docs
 * @example <caption>Preparing the client</caption>
 * const pbl = require('pblapi.js');
 * const PBL = new pbl.Client({ id: 'your bot id', key: 'your bot's pbl token })
 * 
 */
class Client {
	/**
   * @constructor
	 * @param {object} options An object with client options.
	 * @param {string} options.id The ID of the bot.
	 */
	constructor(options) {
		if (!isObject(options)) throw new TypeError('[PBLAPI.js] Options must be an object');
		if(!options.id) throw new TypeError('[PBLAPI.js] The bot ID is missing');
		if (typeof options.id !== 'string') throw new TypeError('[PBLAPI.js] ID in options object must be a string');
	        if (!options.key) throw new TypeError('[PBLAPI.js] The PBL Token of the bot is missing');
		if (typeof options.key !== 'string') throw new TypeError('[PBLAPI.js] Bot token in options object must be a string');
		this._baseURL = 'https://tcbl.glitch.me/api';
		this._key = options.key;
		this._id = options.id;
	    }
   get id() {
		 return this._id;
	 }
   get key() {
		 return this._key;
	 }
   get baseURL() {
		 return this._baseURL;
	 }
	
	/**
   *
   * @see https://tcbl.glitch.me/api/docs/#getBot
   * @example <caption>Getting a bot from PBL</caption>
   * PBL.getBot('some ID') //if you don't add IDit will take as default provided in preparing the client
   *  .then(res => console.log(res.data))
   *  .catch(err => console.log(err));
   *
	 * Fetches a bot from site
	 * @param {String} id The ID of the bot
	 * @returns {Promise<{}>} 
	 */
    
	getBot(id, baseURL = this.baseURL) {
		if(!id) id = this.id;
		return new Promise((resolve, reject) => {
		try {
			axios({
			url: `${baseURL}/bot/${id}`
			})
  		.then(res => {
			resolve(res.data);
		});
		} catch(e) {
			 reject(new Error(e));
		}
	});
		};
 
	/**
   *
   * @see https://tcbl.glitch.me/api/docs/#getUser
   * @example <caption>Getting a user from PBL</caption>
   * PBL.getUser('some ID') 
   *  .then(res => console.log(res.data))
   *  .catch(err => console.log(err));
   *
	 * @param {String} id The ID of the user
	 * @returns {Promise<{}>} 
	 */
	getUser(id, baseURL = this.baseURL) {
 	    if(!id) throw new TypeError('[PBLAPI.js] The user ID is missing');
 		return new Promise((resolve, reject) => {
 		try {
 		axios({
		url: `${baseURL}/user/${id}`
		})
 		.then(res => {
 			resolve(res.data);
 		});
 		} catch(e) {
 			 reject(new Error(e));
 		}
 	});
 		};
	
		 /**
		  * 
      * @see https://tcbl.glitch.me/api/docs/#postStats
      * @example <caption>Posting bot stats to pbl</caption>
      * PBL.postStats(44) //must be a number
      *  .then(res => console.log(res.data))
      *  .catch(err => console.log(err));
      *
		  * @param {Number} count The server count of the bot
		  * @returns {Promise<{}>} 
		  */
		postStats(count, id = this.id, baseURL = this.baseURL) {
			if(!count) throw new TypeError('[PBLAPI.js] Please enter server count in numbers')
			if (typeof count !== 'number') throw new TypeError('[PBLAPI.js] Server count is not a number');
			return  new Promise((resolve, reject) => {
            try {
              axios({
			        method: "POST",
			        url: `${baseURL}/stats/${id}`,
			        headers: {
				            'Content-Type': 'application/json',
				             'Authorization': this.key
			        },
			        data: {
                    'server_count': count
		            }})
			        .then(res => resolve(res));
                    } catch (e) {
                    reject(new Error(e));
                    }
			        });
		}
	 }
module.exports = Client;
