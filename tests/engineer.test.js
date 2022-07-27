
const engineer = require('../lib/employee')
const engineer = new engineer('Sophie', '1234', 'sophie.g.rankin@gmail.com', '12')


test('Test to see if we can get values for engineer', () => {
    expect(engineer.name).tobe('Sophie')
    expect(engineer.id).tobe('123')
    expect(engineer.email).tobe('sophie.g.rankin@gmail.com')
    expect(engineer.officeNumber).tobe('12')
    expect(engineer.github).tobe('github.com/PhiaRan')
})

test('test to see if we can get name',() => {
    expect(engineer.getName()).tobe('Sophie')
} )

test('test id we can get id', () => {
    expect(engineer.getId()).tobe('1234')
})

test('test to see if we can get email', () => {
    expect(engineer.getEmail()).tobe('sophie.g.rankin@gmail.com')
})

test('test to see if we can get role', () => {
    expect(engineer.getRole()).tobe('engineer')
})

test('test to see if we can get school', () => {
    expect(engineer.get(github)).tobe('github.com/PhiaRan')
})
