const axios = require('axios').default;
const isObject = (obj) => !Array.isArray(obj) && obj === Object(obj);

/**
 * Creates a new client.
 * @class Client
 */
class Client {
	/**
	 * @param {object} options An object with client options.
	 * @param {string} options.id The ID of the bot.
	 * @param {string} options.botToken The token provided from the bots's token page.
	 */
	constructor(options) {
		if (!isObject(options)) throw new TypeError('Options must be an object');
		if (typeof options.id !== 'string') throw new TypeError('ID in options object must be a string');
		if (typeof options.botToken !== 'string') throw new TypeError('Bot token in options object must be a string');

		this._baseURL = 'https://pbl.glitch.me/api';
		this._options = options;
	}

	/**
	 * Posts server count to the site.
	 * @memberof Client
	 * @returns {Promise<{ message: string, success: boolean }>}
	 * @param {number} count The server count
	 */
	postServerCount(count) {
		if (typeof count !== 'number') throw new TypeError('Server count is not a number');

		const config = {
			headers: {
			  'Content-Type': 'application/json',
			   Authorization : this._options.botToken
			}
		  };
		
		  axios
		  .post(
			  this._baseURL + `/post/stats/${this._options.id}`,
			  {
                  server_count: count
			  },
			  config
			)
			.then(res => console.log(res.data))
			.catch(err => console.log(err));
	}
	
	  /**
   * Gets information about a bot.
   * @param {string} id The ID of the bot you want to get the information from.
   * @returns {Promise<Object>}
   */

	
	getBot(id) {
		
       if (typeof id !== 'string') throw new TypeError('ID must be a string');
	let res = axios.get(this._baseURL + `/getBot/${id}`);
        return res.data;;
	}
	
}

module.exports = Client;
