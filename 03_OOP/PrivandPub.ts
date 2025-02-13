class Myuser{
    public email:string
    private name:string
    readonly city :string ="Lahore"
    constructor(em:string,nm:string){
        this.email=em;
        this.name=nm
    }
}
// Preffered approch for industry

class MyuserIndustrylevel{
    // public email:string
    // private name:string
    // readonly city :string ="Lahore"
    constructor(public em:string,public nm:string){
        
    }
}

const murtaza= new Myuser("murtaza@","mmm")


//get set private metod

class course {
    private cteacher:string
    protected courseclass:string
    
    constructor(public cname:string,public cid :number){
    }

    get teachername():string{
        return `Teacher name is ${this.cname}`
    }

    set teachernam(teach:string){
        this.cname=teach
    }

    private sayhello():string{
    return "hello"
    }

}

const oop=new course("oop132",123)
oop.teachername
oop.teachernam="jj"
