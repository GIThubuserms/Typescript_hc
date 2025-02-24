import { useState } from 'react'

interface formfield{
    namefeild:string,
    agefeild:string
}


// Here we initalize an object to object 
// function State({namefeild,agefeild}:formfield) {
function State(props:{mytypes:formfield}) {

    
    interface Person{
    name?:string
    age?:number 
    }

    const [user,setuser]=useState<Person>()
     

    return (
    <div>
      <form >
        <input 
        type={props.mytypes.agefeild}
        placeholder='Name'
        onChange={(e)=>setuser((prev)=>({...prev,age:Number(e.target.value)}))}
        /> 
         <input 
        type={props.mytypes.namefeild}
        placeholder='Age'
        onChange={(e)=>setuser((prev)=>({...prev,name:String(e.target.value)}))}
        />
                  
      </form>
    </div>
  )
}

export default State
