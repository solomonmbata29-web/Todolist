// selecting elements

const input = document.getElementById("content")
const submitBtn = document.getElementById("submit")
const section = document.getElementById("container")
const form = document.getElementById("form")
const plusIcon = document.getElementById("plus")

function toggleForm(){
    form.classList.add('show')
    plusIcon.style.display = 'none'
}

function addTask(e){
    // prevent default form behaviour
    e.preventDefault()

    // get the input value
    const formInput = input.value

    // check if the input is empty
    if (input.value === '') {
        return
    }else{
        // creating elements
        const div = document.createElement('div')
        const para = document.createElement('p')
        const paraTwo = document.createElement('p')
        const span = document.createElement('span')
        const spanTwo = document.createElement('span')
        
        // adding the form input content to the first paragraph
        para.innerHTML = formInput
        
        // appending children span elements to parent paragraph element
        paraTwo.appendChild(span)
        paraTwo.appendChild(spanTwo)

        // adding the icon to the span
        span.innerHTML = '<i class="fa-solid fa-trash"></i>'
        spanTwo.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
        
        // adding class to span
        span.classList.add('delete')
        spanTwo.classList.add('edit')

        // adding the paragraphs as children to the div
        div.appendChild(para)
        div.appendChild(paraTwo)

        //adding a className to the div.
        div.classList.add('task')
        para.classList.add('text')

        // adding the div as a child to the  section
        section.appendChild(div)

        // clear the input field
        input.value = ''

        // adding event litener to the span
        span.addEventListener('click', function(e){
            const task = e.target.closest('.task')
            task.remove() 
        })

        spanTwo.addEventListener('click', function(e){
            // get the parent div
            const task = e.target.closest('.task')
            const paraText = task.querySelector('.text').textContent

            //adding it to the input
            input.value = paraText

            // remove the parent div
            task.remove()
        })
    
        
    }
}
// adding event listeners
plusIcon.addEventListener('click', toggleForm)
submitBtn.addEventListener('click', addTask)