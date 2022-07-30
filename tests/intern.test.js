
const Intern = require('../lib/intern')
const intern = new intern('name', 'id', 'email', 'school')


test('Test to see if we can get values for employee', () => {
    expect(intern.name).tobe('name')
    expect(intern.id).tobe('id')
    expect(intern.email).tobe('email')
    expect(intern.school).tobe('school')
})

test('test to see if we can get name getName()',() => {
    expect(intern.getName()).tobe('name')
} )

test('test id we can get id getId()', () => {
    expect(intern.getId()).tobe('1234')
})

test('test to see if we can get email getEmail()', () => {
    expect(intern.getEmail()).tobe('email')
})

test('test to see if we can get role getRole()', () => {
    expect(intern.getRole()).tobe('intern')
})

test('test to see if we can get school getScool()',() => {
    expect(intern.getSchool()).tobe('school')
});