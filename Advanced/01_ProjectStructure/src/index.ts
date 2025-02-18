const myname:string="Murtaza"
console.log(myname);

// console.log("Helloworld");


// array play

const myarr:string[]=["M","U","R","T","A","Z","A"]

// myarr.forEach(i=>console.log(i))


// obj and type

type Obj={
    name:string,
    readonly age:number,
    gender?:boolean,
    span?:()=>void
}

type Obj1={
    height?:string,
    width?:string
}

type Obj2={
    area?:number
}

type Obj3=Obj & Obj1 & Obj1

const aplha:Obj3={
    name:"ede",
    age:23,
    gender:true,
    span:()=>{
        console.log("Hello world");     
    }
}

 aplha.span  

// const obj:Obj={
//     name:"murtaza",
//     age:19
// }

// obj.gender=true
// obj.age=3



// Day 1 end on 40 mins


interface muinterface{
    name:string,
    readonly age:number,
    gender?:boolean,
    span:()=>void
}

let letmyinteface :muinterface={
    name:"dd",
    age:32,
    gender:true,
    span:()=>{
        console.log("HH");
    }
}

letmyinteface.span()




// FUNCTION WITH REST OPERATOR
const func1=(num:number[]):number[]=>{
    return num
}
 
const func2=(...m:number[]):number[]=>{
    return m
}



// Day 2 ended with 55 mins