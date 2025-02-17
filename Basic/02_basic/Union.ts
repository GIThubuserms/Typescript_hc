// | union :)

let score:number | string;
score=4
score="4"


// Now we use types  Admin and user

type Admin={
    username:string,
    age:number
}

type User ={
    name:string,
    age:number
}

let murtaza1:User|Admin={name:"mm",age:22}
 murtaza1={username:"mm",age:22}




 // function playing 

 function getdbid(name:number|string){
   if(typeof(name)==="string"){
    name.toLocaleString()
   }
   if(typeof(name)==="number"){
    name.toFixed()
   }
 }
getdbid(3)


// array 

const data1:number[]=[1,2,3,4,5]
const data2:string[]=["1","5"]
const data3:(string|number|boolean)[]=[1,"2",3,"999",5,true]



// assigning variable 

let aeroplaneseets:"first"|"second"|"third";
aeroplaneseets="first"
// aeroplaneseets="fourth"