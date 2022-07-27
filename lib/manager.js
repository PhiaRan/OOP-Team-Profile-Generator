const employee = require('./employee')

class manager extends employee {
    constructor(name, email, id, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber;
    }

    getofficeNumber(){
        return this.officeNumber
    }

    getrole(){
        return "manager"
    }
}

module.exports = manager;