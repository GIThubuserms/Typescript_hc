// Nothing just like type 
interface User1{
    email:string,
    userId:number,
    start:()=>string,
    finish():string,
    getcoupon(coup:string):number
}

const hitesh :User1={
    email:"murtaza@gmail.com",
    userId:123,
    start:()=>{
    return "hello"
   },
   finish:()=>{
    return "j"
   },
   getcoupon:(cpn:"murta23")=>{
    return 10
   }
}




// Type vs Interface
         // interface extends  
         // type adds 

interface Animal {
    name:string
}



// type bear =Animal &{
//     power:number
// }
interface Bear extends Animal{
    power:number
}


const gorrila=Bear()
gorrila.name="d"
gorrila.power=4

