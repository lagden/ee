import process from 'node:process'
import {EventEmitter} from 'node:events'

const {
	APP_NS = '@tadashi',
} = process.env

const KEY = Symbol.for(`${APP_NS}.ee`)
const singleton = Object.create(null)
singleton[KEY] = new EventEmitter()

Object.freeze(singleton)

export default singleton[KEY]
