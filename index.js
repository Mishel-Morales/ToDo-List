let botton = document.querySelector('#agregarBtn')
let ul = document.querySelector('ul')
let input = document.querySelector('#tareaInput')

const agregar = (event) => {
    //Selecciono el Input
    let inputTask = document.querySelector('#tareaInput')
    //Creando un li
    let li = document.createElement('li')
        li.classList.add ('list-unstyled')
    //Creando un div
    let div = document.createElement('div')
    //Creando un input
    let input = document.createElement('input')
    input.value = inputTask.value
    inputTask.value = ''
    //Creando dos botones
    let buttonOne = document.createElement('button')
        buttonOne.innerText = 'Eliminar'
        buttonOne.className = 'bg-danger m-1'
        buttonOne.addEventListener('click', (event) =>{
            li.remove()
        })
    let buttonTwo = document.createElement('button')
        buttonTwo.innerText = 'Finalizado'
        buttonTwo.addEventListener('click', (event) => {
             input.classList.add("text-decoration-line-through")
        })
    //agregando div a li:
    li.appendChild(div)
    //agregando input a div:
    div.appendChild(input)
    //agregando buttonOne a div:
    div.appendChild(buttonOne)
    //agregando buttonTwo a div:
    div.appendChild(buttonTwo)
    //agregando todo al ul:
    ul.appendChild(li)
}

//Cuando el evento 'click' se escuche se mostrara el arrow function 'agregar'
botton.addEventListener('click', () => {
    agregar()
})

input.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        agregar()
    }
})

