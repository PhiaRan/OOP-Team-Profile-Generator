
const Manager = require('../lib/manager')
const manager = new Manager('name', 'id', 'email', 'office number')


test('Test to see if we can get values for employee', () => {
    expect(manager.name).tobe('name')
    expect(manager.id).tobe('123')
    expect(manager.email).tobe('email')
    expect(manager.officeNumber).tobe('77')
})

test('test to see if we can get name getName()',() => {
    expect(manager.getName()).tobe('name')
} )

test('test id we can get id getID()', () => {
    expect(manager.getId()).tobe('id')
})

test('test to see if we can get email getEmail()', () => {
    expect(manager.getEmail()).tobe('email')
})

test('test to see if we can get role getRole()', () => {
    expect(manager.getRole()).tobe('manager')
})

test('test to see if we can get office number getOfficenumber()',() => {
    expect(manager.getofficeNumber()).tobe('77')
});