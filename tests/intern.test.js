
const intern = require('../lib/employee')
const intern = new intern('Sophie', '1234', 'sophie.g.rankin@gmail.com', '12')


test('Test to see if we can get values for intern', () => {
    expect(intern.name).tobe('Sophie')
    expect(intern.id).tobe('123')
    expect(intern.email).tobe('sophie.g.rankin@gmail.com')
    expect(intern.officeNumber).tobe('12')
    expect(intern.school).tobe('UCONN')
})

test('test to see if we can get name',() => {
    expect(intern.getName()).tobe('Sophie')
} )

test('test id we can get id', () => {
    expect(intern.getId()).tobe('1234')
})

test('test to see if we can get email', () => {
    expect(intern.getEmail()).tobe('sophie.g.rankin@gmail.com')
})

test('test to see if we can get role', () => {
    expect(intern.getRole()).tobe('intern')
})

test('test to see if we can get school', () => {
    expect(intern.getSchool()).tobe('UCONN')
})
