/*console.log('hello word')
console.error('This is an error')
console.warn('Wrong code line!')*/

// let, const

/*let age = 30
age = 50
console.log(age)

let score
score = 13
console.log(score)*/

//Data types: String, Numbers, Boolean, Undefined, Null
/*const name = 'John'
const age = 30
const rating = 4.5
const isCool = true
const x = null
const y = undefined
let z

console.log(typeof z)*/

//Strings
const name = 'John'
const age = 30

//Concatenation
//console.log('My name is ' + name + ' and i am ' + age)

//Template String
//console.log(`My name is ${name} and I am ${age}`)

/*const hello = `My name is ${name} and I am ${age}`

console.log(hello)

//String Properties and Methods
const computer = 'Mouse, Keyboard, CPU, Monitor'

//console.log(computer.substring(0, 9).toUpperCase())
console.log(computer.split(','))*/

//Arrays - Variables that hold multiple values

/*//Array by using Array constructor
const numbers = new Array(1,2,3,4,5)

console.log(numbers)*/

/*//Array by normal
const fruits = ['orages', 'pears', 'apples']

fruits[3] = 'grapes'

fruits.push('mangos')

fruits.unshift('berry')

fruits.pop()

console.log(fruits.indexOf ('orages'))
console.log(fruits)

console.log(Array.isArray(fruits))*/

//Object Literals

/*const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'soccer', 'reading'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'USA'
    }
}

//console.log(person.address.city)

/*const { firstName, lastName, address:{city}} = person

console.log(city)*/

/*person.email = 'john@gmail.com'

console.log(person.email)*/


/*const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appt',
        isCompleted: false
    },
]

console.log(todos[1].text)*/

/*//Json formats

const JSONtodos = JSON.stringify(todos)

console.log(JSONtodos)*/

//LOOPS
//For
/*for (let i=0; i <= 10; i++) {
    console.log(`for loop let's see: ${i}`)
}*/

/*//while
let i = 0;
while (i < 10) {
    console.log(`While loop Number: ${i}`);
    i++;
} */

//loop to Arrays

/*for(let todo of todos) {
    console.log(todo.isCompleted)
}*/

//High order array method(best)
//forEach, map, filter

/*todos.forEach(function(todo) {
    console.log(todo.text)
})*/

/*const todoText = todos.map(function(todo) {
    return todo.text
})

console.log(todoText)

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true
})

console.log(todoCompleted)*/

//CONDITIONERS (if and else if)

/*const x = 10

if(x === 10) {
    console.log('X = 10')    
    }
else {
    console.log('x is not 10')
}*/

/*const x = 5

if(x === 10) {
    console.log('x = 10')
}else if(x > 10){
    console.log('x is greater than 10')
}
 else{
    console.log('x is not greater than 10')
}*/

//multiple condition
/*const x = 7
const y = 11

if(x > 6 || y > 10) {
    console.log('x is more than 6 or y is more than 10')
}

if(x > 6 && y > 10) {
    console.log('x is more than 6 or y is more than 10')
}*/

//TENAERY OPERATOR

/*const x = 9

const color = x > 10 ? 'red' : 'blue'

console.log(color)

//switch
switch(color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue' :
        console.log('color is blue')
        break;
    default:
        console.log('color is neither red nor blue')
}*/

//FUNCTIONS

/*function addNums(num1=1, num2=1){
return num1 + num2
}

console.log(addNums(5,5))

//Constructor function(not always used)

function Person(firstName, lastName, dob, time) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}*?

/*Person.prototype.getBirthYear = function (){
    return this.dob.getFullYear()
}
Person.prototype.getFullName = function (){
    return `${firstName} ${lastName}`
}*/

//Class(used)
/*class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    getBirthYear(){
        return this.dob.getFullYear()
    }
    getFullName(){
        return `${firstName} ${lastName}`
    }
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-5-1918')
const person2 = new Person('Mary', 'Smith', '3-10-1991')

console.log(person1)*/

//The DOM

// Single Element
/*console.log(document.getElementById('my-form'))
console.log(document.querySelector('.msg'))


// Multiple element
console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('item'))//not mostly used*/

//How to loop through

/*const items = document.querySelectorAll('.item')

items.forEach((item) => console.log(item))*/

//MANIPULATING THE DOM

//const ul = document.querySelector('.items')

//ul.remove()
//ul.lastElementChild.remove()
//ul.firstElementChild.textContent = 'No item'
//ul.children[1].innerText = 'Brad'
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

//const btn = document.querySelector('.btn')
//btn.style.background = 'green'

/*const btn = document.querySelector('.btn')

btn.addEventListener('mouseout', (e) => {
    e.preventDefault()
    //console.log(e.target.className)
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('.btn').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
})*/

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 3000)
    } else {
            const li = document.createElement('li')
            li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
            userList.appendChild(li)

            //clear fields
            nameInput.value = ''
            emailInput.value = ''
     }
    

    //console.log(nameInput.value)
    //console.log(emailInput.value)
}



