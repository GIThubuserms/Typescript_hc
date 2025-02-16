interface Owner{
    name:string,
    age:number
}

interface Member{
    id:number,
    clientname:string
}


class GYM <T>{
   public mygymuser:T

   saymyuser(num:T){
    this.mygymuser=num
   }
}


class BAR <T>{
   public mygymuser:T[]=[]

   saymyuser(num:T){
    this.mygymuser.push(num)
   }
}

