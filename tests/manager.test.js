
const manager = require('../lib/employee')
const manager = new manager('Sophie', '1234', 'sophie.g.rankin@gmail.com', '12')


test('Test to see if we can get values for manager', () => {
    expect(manager.name).tobe('Sophie')
    expect(manager.id).tobe('123')
    expect(manager.email).tobe('sophie.g.rankin@gmail.com')
    expect(manager.officeNumber).tobe('12')
})

test('test to see if we can get name',() => {
    expect(manager.getName()).tobe('Sophie')
} )

test('test id we can get id', () => {
    expect(manager.getId()).tobe('1234')
})

test('test to see if we can get email', () => {
    expect(manager.getEmail()).tobe('sophie.g.rankin@gmail.com')
})

test('test to see if we can get role', () => {
    expect(manager.getRole()).tobe('manager')
})

test('test to see if we can get office number', () => {
    expect(manager.getofficeNumber()).tobe('12')
})
