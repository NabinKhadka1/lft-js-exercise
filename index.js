// Patterns in JavaScript
/*
    *****
    ****
    ***
    **
    *
*/
function pattern(n){
    let string  = '';
    for (let i=0; i<n; i++) {
        for (let j=0; j<n-i; j++){
            string += '*'
        }
        string += '\n'
    }
    
    return string
}
let number = 5
// let number = prompt('Enter a number: ')
let stringPattern = pattern(number)
console.log(stringPattern)

/* Question 2 */
let information = {
    'name':'Nabin Khadka',
    'address': 'Kadaghari, Kathmandu',
    'email': 'abc@abc.com',
    'interest': 'Basketball',
    'education': [
        {   
            'name': 'ABC School of Schoolery',
            'enrolledDate': 2000
        },
        {
            'name': 'BCD School of Trickery',
            'enrolledDate': 2006
        }
    ]
}

for (let i=0; i<information.education.length;i++){
    console.log(`Name: ${information.education[i].name}, Date: ${information.education[i].enrolledDate}`)
}

/* Question 3 */
/* Input:
    fruits = [
        {id: 1,name:'Banana', color:'Yellow'},
        {id:2,name='Apple',color:'Red}
    ]

*/
/* Output:
    searchByName(fruits, 'apple')

    Should return: {id:2,name='Apple',color:'Red'}
*/

var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]

function searchByName(fruits, fruit){
for (let i =0;i<fruits.length; i++){
    if (fruits[i].name.toLowerCase() == fruit.toLowerCase()){
        return fruits[i]
        
    }
}
}

let returnedObject = searchByName(fruits, 'apple')
console.log(returnedObject)


/* Question 4 */
/* Write a function that transforms an array of inputs into a new array based on a provided transformation function */
let arr  = [1,2,3,4]
function transforms(arr,transFunc){
    var arr1 = []
    arr.forEach(ele => {
        arr1.push(transFunc(ele))
    });
    return arr1
}

let array1 = transforms(arr, function(num){
    return num * 2
})
console.log(array1)