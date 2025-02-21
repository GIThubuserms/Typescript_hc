// How to run   tsc -w

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


class player{

    constructor(private height:number,private weight:number){
        this.height=height,
        this.weight=weight
    }

    get getplayerheight():number{
        return this.height
    }

    set setplayerheight(hght:number){
        this.height=hght
    }
}

const player1=new player(5.9,60)
console.log(player1.getplayerheight)
player1.setplayerheight=6.1
console.log(player1.getplayerheight)


 // Interface and classes

interface product{
    name:string,
    price:number,
    amount:number,
    id?:number
}

class apple1 implements product {
    name:string
    price:number
    amount:number
    id?:number

    constructor( nm:string, ps:number, amt:number, id:number) {
       this.name=nm,
       this.price=ps,
       this.amount=amt,
       this.id=id
    }
}

class apple2 {
    // name:string
    // price:number
    // amount:number
    // id?:number

    constructor(public nm:string,public ps:number,public amt:number,public id:number) {
       this.nm=nm,
       this.ps=ps,
       this.amt=amt,
       this.id=id
    }
}

// Day 2 ended with 1:40 mins

// Type assertion

const myp=document.getElementById('myp') as HTMLElement
console.log(myp);
console.log(typeof(myp));


// Objects accessing using key

// type Person={
//     [key:string]:string,
// }
interface Person{
    [key:string]:string,
}

const per1:Person={
     name:"M",
}

const getname=(nm:"name"|"age"):string=>{
  return per1[nm]
}

console.log(getname("name"));
// console.log(getname("nme"));


// Utility Types
// partial required   


// Generics

const getsame=<T>(n:T):T=>{
    return n
}


// DAY 4 ends on 2:31
