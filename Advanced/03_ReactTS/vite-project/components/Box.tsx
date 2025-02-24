// function Box({heading}:{heading:string}) {
//   return (
//     <div>
//       <h1>{heading} 1</h1>
//     </div>
//   )
// }

import { Dispatch, SetStateAction } from "react";

// import { ReactNode } from "react";

// type prototype = {
//   heading: string;
//   para: string;
//   alphabets?: number;
//   func: (a: string) => void;
//   children: ReactNode;
// };

// function Box(prop:prototype) {
//   return (
//     <div>
//       <h1> {prop.heading}</h1>
//     </div>
//   )
// }

// function Box({ heading, alphabets = 797, para, func, children }: prototype) {
//   func("Buddy from tsx");
//   return (
//     <div>
//       <h1> 1 {heading}</h1>
//       <h1> 2 {para}</h1>
//       <h1> 3 {alphabets}</h1>
//       {children}
//     </div>
//   );
// }

// export default Box;

type myform = {
  label: string;
  button: string;
  onclck:Dispatch<SetStateAction<string>>;
  mytype:string
}

function Box({ label, button, onclck,mytype="email" }: myform) {
  return (
    <>
      <form >
        <label>{label}</label>
        <input type={mytype} name="" id="" />
        <button onClick={()=>onclck("6")}>{button}</button>
      </form>
    </>
  );
}

export default Box;
