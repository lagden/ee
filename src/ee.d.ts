/**
 * A unique symbol key used to store the instance of EventEmitter within the singleton object.
 * @type {symbol}
 * @constant
 */
export const KEY: symbol;
/**
 * Creates an immutable proxy for preventing modifications to a singleton object.
 * This proxy will throw an error if any attempts are made to set or delete properties.
 *
 * @type {ProxyHandler<object>}
 */
export const immutableSingleton: ProxyHandler<object>;
export default ee;
/**
 * The unique EventEmitter instance accessed through the immutable proxy.
 * @type {EventEmitter}
 * @constant
 */
declare const ee: EventEmitter;
import { EventEmitter } from 'node:events';
