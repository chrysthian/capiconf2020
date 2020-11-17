import { useI18n } from './useI18n'

test('useI18n', () => {
  const i18n = useI18n()
  expect(i18n('test.hello')).toEqual('world')

  expect(i18n('test.dynamicMessage', { field: 'world' }))
    .toEqual('Dynamic world')

  expect(i18n('test.recursiveDynamicMessage', { field: 'test.hello' }))
    .toEqual('Recursive dynamic world')

  expect(i18n('test.recursiveDynamicMessage'))
    .toEqual('Recursive dynamic grupo molejão')

  expect(() => i18n('test.keyThatDoesNotExist'))
    .toThrow('This key \'test.keyThatDoesNotExist\' doesn\'t exist on i18n')

  expect(i18n('test.recursiveDynamicMessage', {
    field: 'test.recursiveDynamicMessage',
  })).toEqual('Recursive dynamic Recursive dynamic grupo molejão')
})

test('useI18n with Array', () => {
  const i18n = useI18n()
  expect(i18n(['test.hello'])).toEqual('world')

  expect(i18n(['test.dynamicMessage', { field: 'world' }]))
    .toEqual('Dynamic world')

  expect(i18n(['test.recursiveDynamicMessage', { field: 'test.hello' }]))
    .toEqual('Recursive dynamic world')

  expect(i18n(['test.recursiveDynamicMessage']))
    .toEqual('Recursive dynamic grupo molejão')

  expect(() => i18n(['test.keyThatDoesNotExist']))
    .toThrow('This key \'test.keyThatDoesNotExist\' doesn\'t exist on i18n')

  expect(i18n(['test.recursiveDynamicMessage', {
    field: 'test.recursiveDynamicMessage',
  }])).toEqual('Recursive dynamic Recursive dynamic grupo molejão')
})
