import './style.css'

const myform=document.getElementById('formsubmit') as HTMLFormElement
const input=document.getElementById('input') as HTMLInputElement
const mycontainer=document.getElementById('mycontainer') as HTMLDivElement

interface Todo{
  name:string
  id:string
}

let todos:Todo[]=[]

myform.onsubmit=(e:SubmitEvent)=>{
  e.preventDefault()

  const newTodo:Todo={
  name:input.value,
  id:String(Math.random()*1000)
  }
  
  generateTodo(newTodo)
 console.log(todos);
 
}


const deleteTodo=()=>{

}

const generateTodo=(newTodo:Todo):void=>{
  mycontainer.innerText=""
  todos.push(newTodo)
  todos.forEach((td)=>{
   const tdinput=document.createElement('div')
  const tddelte=document.createElement('button')
  tdinput.innerText=td.name
  tddelte.innerText='X'
  tddelte.id=td.id
  mycontainer.appendChild(tdinput)
  mycontainer.appendChild(tddelte)
  })
}