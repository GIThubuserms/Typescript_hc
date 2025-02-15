function one(num:number|boolean):number|boolean{

    // if num string num .lenght and num .fixed 
    // we donot have a fixed thing then what to do 
    return num
}


// use any ?  No bad approch 
function two(num:any):any{
    return num
}

// but what if we have donot any specific type discribed then what to do 

function three<Type>(a:Type):Type{
    return a
}
// Now string num everything goes on

