import test from 'ava'
import {pEventMultiple} from 'p-event'
import ee from '../src/ee.js'

test('ee', async t => {
	const promise = pEventMultiple(ee, 'test', {
		resolveImmediately: true,
		count: Number.POSITIVE_INFINITY,
	})

	const result = await promise
	ee.emit('test', 'ok')

	t.true(Array.isArray(result))
	t.is(result[0], 'ok')
})
