
const Engineer = require('../lib/engineer')
const engineer = new Engineer('name', 'id', 'email', 'github')


test('Test to see if we can get values for employee', () => {
    expect(engineer.name).tobe('name')
    expect(engineer.id).tobe('id')
    expect(engineer.email).tobe('email')
    expect(engineer.githubUsername).tobe('github')
})

test('test to see if we can get name getName()',() => {
    expect(engineer.getName()).tobe('name')
} )

test('test id we can get id getId()', () => {
    expect(engineer.getId()).tobe('id')
})

test('test to see if we can get email getEmail()', () => {
    expect(enginner.getEmail()).tobe('email')
})

test('test to see if we can get role get getRole()', () => {
    expect(engineer.getRole()).tobe('engineer')
})

test('test to see if we can get github username getGithub()',() => {
    expect(engineer.getGithub()).tobe('github')
});