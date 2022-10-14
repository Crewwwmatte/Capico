const App = {
    data() {
        return {
            title: `Not a counter`,
            placeholderStr: `Haha, classic`,
            inputValue: '',
            notes: [''],
        }
    },
    methods: {
        inputChangeHandler(e) {
            this.inputValue = e.target.value
        },
        addNewNote() {
            this.notes.push('Yo, check this out')
        }
    }
}

Vue.createApp(App).mount('#app')

// const people = [
//     {name: 'Владилен' , age: 25, budget: 40000},
//     {name: 'Елена' , age: 17, budget: 3400},
//     {name: 'Игор' , age: 49, budget: 50000},
//     {name: 'Михаил' , age: 15, budget: 1800},
//     {name: 'Василиса' , age: 24, budget: 25000},
//     {name: 'Виктория' , age: 38, budget: 2300},
// ]
//
//
// const puple = {
//     name: 'Egor',
//     age: 20,
//     budget: 800000
// }

function numberJoy(n) {
    let sum = 0

    while (n > 0) {
        sum += n % 10
        n = Math.floor(n/10)
    }
    console.log(n)
}

function digit (number) {
    let figures = "" + number
    let sum = 0

    for (var i = 0; i < figures.length; i++)
        sum += +figures[i]

    return sum
}

digit(255) // output => 2+5+5 = 12
