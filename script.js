var button =document.querySelector('button')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')

function buttonHandler () {
    console.log('clicked')
    h1.textContent = input.value
}

// h1.addEventListener('mouseenter', function () {
//     console.log('Mouse has entered h1')
// })

// h1.addEventListener('mouseleave', function () {
//     console.log('Mouse has left h1')
// })

h1.addEventListener('mouseenter', function () {
    this.style.color = 'red'
    this.style.backgroundColor = 'black'
})

h1.addEventListener('mouseleave', function () {
    this.style.color = 'black'
    this.style.backgroundColor = 'transparent'
})
button.addEventListener('click', buttonHandler)