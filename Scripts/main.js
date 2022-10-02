const App = {
    data() {
        return {
            title: `Not a counter`,
            placeholderStr: `You can add here some text`,
            inputValue: ''
        }
    },
    methods: {
        inputChangeHandler(e) {
            console.log('inputChangeHandler', e.target.value)
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
// const prsn = {
//     name: 'кто-то',
//     age: 28,
//     greet: function () {
//         console.log('Greet!')
//     }
// }
//
// const more3000 = people.filter(person => person.budget > 3000)
//
// console.log(more3000)
//
// const myNum = 42
//
//
// localStorage.setItem('number', myNum)
// console.log(localStorage.getItem('number'))


// let str = 'что-нибудь'
// console.log(str)
// function evaporator(content, evap_per_day, threshold){
//     let perc, day
//     perc = content / 100 * threshold
//     for (let day = 1; content > perc; day++) {
//         content = content - (content / 100 * evap_per_day)
//         day++
//         return day
//     }
// }


// let evap, ct
// for (let day = 0; ct === threshold; day++) {
//     evap = content / 100 * evap_per_day
//     ct = content - evap
// }

// let evap, ct, day
// if (ct <= threshold) {
//     return console.log(day)
// } else {
//     evap = content / 100 * evap_per_day
//     ct = ct - evap
//     day++
//     console.log(day)
// }

// let day = 1;
// let overall;
//
// function evaporator(content, evap_per_day, threshold){
//     let day, per, overall
//     day = 1
//     per = threshold * content / 100;
//     while (content > per) {
//         content -= content*evap_per_day/100;
//         overall = day++;
//     }
//     return overall;
// }
// console.log (overall);

function rndm(min, max) {
    const array = []
    let count = 0
    for (let i = 0; i < 5; i++) {
        min = Math.ceil(min)
        max = Math.floor(max)
        array.push(Math.floor(Math.random() * (max - min)) + min)
    }
    console.log(array.join())
    array.filter(el => {
        if (Math.sign(el) === -1) {
            count++
        }
    })
    console.log(`Ебучих чисел с отрицательным знаком: ${count}`)
}

// let counter = 0;
// const arr = [];
//
// for (let i=0; i < 5; i++) {
//     let num = Math.floor(Math.random()*10); // this will get a number between 1 and 99;
//     num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
//     arr [i] = num;
// }
// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] < 0){
//         counter++
//     }
//
// }
// console.log(arr.join())
// console.log ('sign chanje ' + counter + ' times');
//
// if (arr[j] < 0){
//     counter++
// }
//
// if (Math.sign(arr[j]) === -1) {
//
// }