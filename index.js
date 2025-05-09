let botton = document.querySelector('#agregarBtn')
let ul = document.querySelector('ul')
let input = document.querySelector('#tareaInput')

const agregar = (event) => {
    let inputTask = document.querySelector('#tareaInput')
    let li = document.createElement('li')
        li.classList.add ('list-unstyled', 'ms-5')
    let div = document.createElement('div')
    let input = document.createElement('input')
    input.value = inputTask.value
    input.classList.add ('p-1', 'rounded', 'w-75')
    inputTask.value = ''
    let buttonOne = document.createElement('button')
        buttonOne.innerText = 'Eliminar'
        buttonOne.className = 'bg-danger m-1 p-1 rounded'
        buttonOne.addEventListener('click', (event) =>{
            li.remove()
        })
    let buttonTwo = document.createElement('button')
        buttonTwo.innerText = 'Finalizado'
        buttonTwo.className = 'p-1 rounded'
        buttonTwo.addEventListener('click', (event) => {
             input.classList.add("text-decoration-line-through")
        })
   
    li.appendChild(div)
    div.appendChild(input)
    div.appendChild(buttonOne)
    div.appendChild(buttonTwo)
    ul.appendChild(li)
}

botton.addEventListener('click', () => {
    agregar()
})

input.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        agregar()
    }
})

