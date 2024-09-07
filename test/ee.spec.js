import { test } from 'node:test'
import assert from 'node:assert/strict'
import { pEventMultiple } from 'p-event'
import ee, { immutableSingleton, KEY } from '../src/ee.js'

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

test('singleton', () => {
	assert.equal(ee, immutableSingleton[KEY])
})

test('error', () => {
	assert.throws(() => {
		immutableSingleton[KEY] = 123
	}, {
		message: 'Cannot set property, object is immutable.',
	})

	assert.throws(() => {
		delete immutableSingleton[KEY]
	}, {
		message: 'Cannot delete property, object is immutable.',
	})
})
