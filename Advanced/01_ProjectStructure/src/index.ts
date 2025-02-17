const myname:string="Murtaza"
console.log(myname);

console.log("Helloworld");


// array play

const myarr:string[]=["M","U","R","T","A","Z","A"]

myarr.forEach(i=>console.log(i))


// obj and type

type Obj={
    name:string,
    readonly age:number,
    gender?:boolean
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
    
}

const obj:Obj={
    name:"murtaza",
    age:19
}

obj.gender=true
// obj.age=3



// Day 1 end on 40 mins