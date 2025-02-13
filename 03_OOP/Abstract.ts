abstract class Takephoto{
    constructor(
        public cameramode:string,
        public filter:string,
    ){}
    // No implementation
    abstract  changecameramode():void

    changefilter():string{
        return `This is bluency mode`
    }


}
// We cannot create instance of abstract class
//  const myphoto=new Takephoto("blur","specsa")

//                NOW WHAT TO DO

class Instagram extends Takephoto{
 
    constructor(public cm:string,public fm :string,public lens:number){
    super(cm,fm)
    }

    changecameramode(): void {
        console.log("Camera mode changed !!"); 
    }

}


const myinsta=new Instagram("blur","specia",6)
myinsta.changecameramode()
