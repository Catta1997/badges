import test from 'ava'
import badges from '..'

test(`Simple status`, async t => {
	const content = await badges('test-1')
	t.is(content, '![Status](http://img.shields.io/badge/status-beta-blue.svg?style=flat) \n\n  \n\n')
})

test(`Simple status as AST`, async t => {
	const content = await badges('test-1', true)
	const expected = {
		type: 'root',
		children: [
			{
				type: 'paragraph',
				children: [
					{
						alt: 'Status',
						url: 'http://img.shields.io/badge/status-beta-blue.svg?style=flat',
						type: 'image'
					},
					{
						type: 'text',
						value: ' '
					}
				]
			},
			{
				type: 'break'
			}
		]
	}
	t.deepEqual(content, expected)
})

