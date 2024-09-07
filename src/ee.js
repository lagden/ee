import { EventEmitter } from 'node:events'

/**
 * Singleton class that extends EventEmitter.
 * Used to create a single instance of EventEmitter throughout the application.
 *
 * @extends EventEmitter
 */
export class Singleton extends EventEmitter {
	/**
	 * Unique private key used to store and access the Singleton instance.
	 *
	 * @type {symbol}
	 * @access private
	 */
	static #key = Symbol()

	/**
	 * Unique identifier used to control access to the Singleton constructor.
	 *
	 * @type {symbol}
	 * @access private
	 */
	static #id = Symbol()

	/**
	 * Constructor of the Singleton class.
	 *
	 * @throws {Error} Throws an error if the correct enforcer is not provided.
	 * @param {Symbol} enforcer - Symbol required to instantiate the class.
	 */
	constructor(enforcer) {
		if (enforcer !== Singleton.#id) {
			throw new Error('Cannot construct singleton')
		}
		super()
	}

	/**
	 * Returns the unique instance of the Singleton.
	 *
	 * @returns {Singleton} The unique instance of the Singleton.
	 */
	static get instance() {
		if (this[Singleton.#key] instanceof Singleton === false) {
			this[Singleton.#key] = new Singleton(Singleton.#id)
		}
		return this[Singleton.#key]
	}
}

/**
 * The unique instance of the Singleton exported by default.
 *
 * @type {Singleton}
 */
export default Singleton.instance
