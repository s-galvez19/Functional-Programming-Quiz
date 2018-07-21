const students = [
    {name : "Steven Galvez", score: 100},
    {name : "Angie De Alba", score: 80},
    {name : "Mike Bahia", score: 50},
]

class Excersice{
    constructor(students){
        this.students = students
        this.giveExtraCredit = this.giveExtraCredit()
        this.passers = this.getPassers()
    }
    giveExtraCredit(){
        return this.students.map(stu => {
            return stu.score + 15
        })
    }
    getPassers(){
        return this.students.filter(stu => {
            return stu.score > 59
        })
    }

getAvarage() {
    return this.extraCredits.reduce((acc, curr, i) => {
        if (i === this.extraCredits.length - 1) return ((acc + curr) / (i + 1)).toFixed(2)
        return acc + curr
    })
}
}
const exersize = new Exersize(students)

const excersice = new Excersice(students)
console.log(excersice.giveExtraCredit)
