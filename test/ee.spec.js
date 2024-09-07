import { test } from 'node:test'
import assert from 'node:assert/strict'
import { pEventMultiple } from 'p-event'
import ee, { Singleton } from '../src/ee.js'

test('ee', async () => {
	const promise = pEventMultiple(ee, 'test', {
		resolveImmediately: true,
		count: Number.POSITIVE_INFINITY,
	})

	const result = await promise
	ee.emit('test', 'ok')

	assert.ok(Array.isArray(result))
	assert.equal(result[0], 'ok')
})

test('Singleton', () => {
	assert.equal(ee, Singleton.instance)
})

test('error', () => {
	assert.throws(() => {
		new Singleton()
	}, {
		message: 'Cannot construct singleton',
	})
})
