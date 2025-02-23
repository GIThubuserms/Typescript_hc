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
  todos.push(newTodo)
 generateTodo()
 console.log(todos);
 input.value=""
}


const deleteTodo=(id:string)=>{
   todos=todos.filter((i)=>i.id!==id)
   generateTodo()
}

const generateTodo=():void=>{
  mycontainer.innerText=""
 
  todos.forEach((td)=>{
  const tdinput=document.createElement('div')
  const tddelte=document.createElement('button')
  tdinput.innerText=td.name
  tddelte.innerText='X'
  tddelte.id=td.id
  tddelte.onclick=()=>{
  deleteTodo(td.id)
  }
  mycontainer.appendChild(tdinput)
  mycontainer.appendChild(tddelte)
  })

}