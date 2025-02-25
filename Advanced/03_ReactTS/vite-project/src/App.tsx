// import State from '../components/State.jsx';

// function App() {
// //  const [val,setval]=useState<string>('')
// //  console.log(val);
 

// const myData= {
//   namefeild:"password",
//   agefeild:"text",
// };

// // ✅ Pass an object, not an interface

//   return (
//     <div>
//       {/* <Box heading="Hello TSX"  para={"rrr"} func={(a:string)=>{alert(a)}}>
//        {"Hellooo Buddy i am children"}
//        <button>Click me </button>
//       </Box> */}

//       {/* <Box 
//       label="Hello Type something" 
//        mytype="email"
//        button="onclick" 
//        onclck={setval}
//        /> */}
//       {/* <State mytypes={myData} /> */}
       
//     </div>
//   );
// }

// export default App;





import React, { useEffect } from 'react'
import {useThemeContext} from '../components/Context'

function App() {

  const {theme,changetheme}=useThemeContext()
 
  
  return (
    <div style={{backgroundColor:theme==="dark"?"#00000":"#555555",height:"100vh"}}>
      <p>{theme}</p>
      <button onClick={changetheme}>Change theme</button>
    </div>
  )
}

export default App
