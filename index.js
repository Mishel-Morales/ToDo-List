let botton = document.querySelector('#agregarBtn')
let ul = document.querySelector('ul')
let inputTask = document.querySelector('#tareaInput')
let filtro = document.querySelector('.filtro')

let tareas = []

const agregar = (event) => {
    let nuevaTarea = {
        texto : inputTask.value,
        isCompleted : false
    }

    let li = document.createElement('li')
        li.classList.add ('list-unstyled', 'ms-5')
    let div = document.createElement('div')
    let input = document.createElement('input')
        input.value = nuevaTarea.texto
        input.classList.add ('p-1', 'rounded', 'w-75')
        inputTask.value = ''
    let buttonOne = document.createElement('button')
        buttonOne.innerText = 'Eliminar'
        buttonOne.className = 'bg-danger m-1 p-1 rounded'
        buttonOne.addEventListener('click', (event) =>{
            li.remove()
            tareas = tareas.filter(item => item.texto != event.target.previousElementSibling.value)
            console.log(tareas)
        })
    let buttonTwo = document.createElement('button')  
        buttonTwo.innerText = 'Finalizado'
        buttonTwo.className = 'p-1 rounded'
        buttonTwo.addEventListener('click', (event) => {
             input.classList.add("text-decoration-line-through")
             tareas = tareas.filter(item => {
                if(item.texto == event.target.previousElementSibling.previousElementSibling.value){
                    item.isCompleted = true;
                }
                return item
             })
             console.log(tareas)
        })
   
    li.appendChild(div)
    div.appendChild(input)
    div.appendChild(buttonOne)
    div.appendChild(buttonTwo)
    ul.appendChild(li)

    tareas.push(nuevaTarea)
    console.log(tareas)
}


const filtroTareas = (value) => {
    let filtro = []
    if(value == 'Pendientes'){
        filtro = tareas.filter(item => item.isCompleted == false)
    }  else if(value == 'Completados'){
        filtro = tareas.filter(item => item.isCompleted == true)
    } else{
        filtro = tareas
    }

    let selectfilter = ''
    ul.innerHTML =''
    filtro.forEach(item => {
        let li = document.createElement('li')
        li.classList.add ('list-unstyled', 'ms-5')
    let div = document.createElement('div')
    let input = document.createElement('input')
        input.value = item.texto
        input.classList.add ('p-1', 'rounded', 'w-75')
        inputTask.value = ''
    let buttonOne = document.createElement('button')
        buttonOne.innerText = 'Eliminar'
        buttonOne.className = 'bg-danger m-1 p-1 rounded'
        buttonOne.addEventListener('click', (event) =>{
            li.remove()
            tareas = tareas.filter(item => item.texto != event.target.previousElementSibling.value)
            console.log(tareas)
        })
    let buttonTwo = document.createElement('button')  
        buttonTwo.innerText = 'Finalizado'
        buttonTwo.className = 'p-1 rounded'
        buttonTwo.addEventListener('click', (event) => {
             input.classList.add("text-decoration-line-through")
             tareas = tareas.filter(item => {
                if(item.texto == event.target.previousElementSibling.previousElementSibling.value){
                    item.isCompleted = true;
                }
                return item
             })
             console.log(tareas)
        })
   
    li.appendChild(div)
    div.appendChild(input)
    div.appendChild(buttonOne)
    div.appendChild(buttonTwo)
    ul.appendChild(li)

    })
}


botton.addEventListener('click', () => {
    if(inputTask.value == ''){
        alert('Debe ingresar una tarea')
    } else{
        agregar()
    }
})

inputTask.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        if(inputTask.value == ''){
            alert('Debe ingresar una tarea')
        } else{
            agregar()
        }
    }
})

filtro.addEventListener('change', (event) => {
    console.log(event.target.value)
    filtroTareas(event.target.value)
})
