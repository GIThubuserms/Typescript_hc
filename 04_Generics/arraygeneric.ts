//defining functions with arrays and generic concept

function getproducts1 <T>(num:T):T{
      return num 
}

function getproducts2 <T>(num:T[]):T{
    // Return type is Num[i] one index
    return num[1] 
}

function getproducts3 <T>(num:Array<T>):Array<T>{
    // Return type is array
    return num 
}

// Arrow functions
const getproducts4=<T>(num:T):T=>{
    return num
}

// For one array index

const getproducts5=<T>(num:T[]):T=>{
    return num[7]
}

// For whole array index

const getproducts6=<T>(num:Array<T>):Array<T>=>{
    return num
}
