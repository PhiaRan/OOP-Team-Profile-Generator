
const employee = require('../lib/employee')
const employee = new employee('name', 'id', 'email')


test('Test to see if we can get values for employee', () => {
    expect(employee.name).tobe('name')
    expect(employee.id).tobe('123')
    expect(employee.email).tobe('email')
})

test('test to see if we can get name getName()',() => {
    expect(employee.getName()).tobe('name')
} )

test('test id we can get id getId()', () => {
    expect(employee.getId()).tobe('id')
})

test('test to see if we can get email getEmail()', () => {
    expect(employee.getEmail()).tobe('email')
})

test('test to see if we can get role getRole()', () => {
    expect(employee.getRole()).tobe('employee')
})