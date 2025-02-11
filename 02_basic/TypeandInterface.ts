//  type
type User={
    readonly _id:number,
    name:string,
    age:number
}

let myuser:User={
    _id:333,
    name:"ddd",
    age:22
}
// myuser._id=33  false
// myuser.age=33  true   



// SUPPOSE MULTIPLE TYPES
type cardnumber={
    cardnum:string
}
type cardowner={
    cardowner:string
}
type carddetails=cardnumber & cardowner & {cvv:number }

const Card1:carddetails={
    cardnum:"miuyy3u3",
    cardowner:"mmuuaazza",
    cvv:33
}