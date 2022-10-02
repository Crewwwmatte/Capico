const App = {
    data() {
        return {
            title: `Not a counter`,
            placeholderStr: `You can add here some text`,
            notes: ['Заметка 1'],
        }
    },
    methods: {
        inputChangeHandler(e) {
            this.inputValue = e.target.value
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

