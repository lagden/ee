/**
 * Singleton class that extends EventEmitter.
 * Used to create a single instance of EventEmitter throughout the application.
 *
 * @extends EventEmitter
 */
export class Singleton extends EventEmitter<[never]> {
	/**
	 * Unique private key used to store and access the Singleton instance.
	 *
	 * @type {symbol}
	 * @access private
	 */
	static '__#1@#key': symbol
	/**
	 * Unique identifier used to control access to the Singleton constructor.
	 *
	 * @type {symbol}
	 * @access private
	 */
	static '__#1@#id': symbol
	/**
	 * Returns the unique instance of the Singleton.
	 *
	 * @returns {Singleton} The unique instance of the Singleton.
	 */
	static get instance(): Singleton
	/**
	 * Constructor of the Singleton class.
	 *
	 * @throws {Error} Throws an error if the correct enforcer is not provided.
	 * @param {Symbol} enforcer - Symbol required to instantiate the class.
	 */
	constructor(enforcer: Symbol)
}
export default Singleton.instance
import { EventEmitter } from 'node:events'
declare var instance: Singleton
