
const employee = require('../lib/employee')
const employee = new employee('Sophie', '1234', 'sophie.g.rankin@gmail.com')


test('Test to see if we can get values for employee', () => {
    expect(employee.name).tobe('Sophie')
    expect(employee.id).tobe('123')
    expect(employee.email).tobe('sophie.g.rankin@gmail.com')
})

test('test to see if we can get name',() => {
    expect(employee.getName()).tobe('Sophie')
} )

test('test id we can get id', () => {
    expect(employee.getId()).tobe('1234')
})

test('test to see if we can get email', () => {
    expect(employee.getEmail()).tobe('sophie.g.rankin@gmail.com')
})

test('test to see if we can get role', () => {
    expect(employee.getRole()).tobe('employee')
})