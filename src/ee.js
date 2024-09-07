import { EventEmitter } from 'node:events'

/**
 * A unique symbol key used to store the instance of EventEmitter within the singleton object.
 * @type {symbol}
 * @constant
 */
export const KEY = Symbol()

/**
 * Singleton object for storing EventEmitter instances.
 * @type {Object<string | symbol, EventEmitter>}
 * @access private
 */
const singleton = {}

/**
 * Create and associate a new EventEmitter instance with the singleton.
 * The instance is stored using a unique symbol key to avoid key collision.
 */
singleton[KEY] = new EventEmitter()

/**
 * Creates an immutable proxy for preventing modifications to a singleton object.
 * This proxy will throw an error if any attempts are made to set or delete properties.
 *
 * @type {ProxyHandler<object>}
 */
export const immutableSingleton = new Proxy(singleton, {
	/**
	 * Prevents setting properties on the singleton object.
	 *
	 * @param {object} target - The target object the proxy is wrapping.
	 * @param {string | symbol} property - The name or symbol of the property to set.
	 * @param {*} value - The value to set for the property.
	 * @throws {Error} Always throws an error because the object is immutable.
	 */
	set(target, property, value) {
		throw new Error(`Cannot set property, object is immutable.`)
	},

	/**
	 * Prevents deleting properties from the singleton object.
	 *
	 * @param {object} target - The target object the proxy is wrapping.
	 * @param {string | symbol} property - The name or symbol of the property to delete.
	 * @throws {Error} Always throws an error because the object is immutable.
	 */
	deleteProperty(target, property) {
		throw new Error(`Cannot delete property, object is immutable.`)
	},
})

/**
 * The unique EventEmitter instance accessed through the immutable proxy.
 * @type {EventEmitter}
 * @constant
 */
const ee = immutableSingleton[KEY]
export default ee
