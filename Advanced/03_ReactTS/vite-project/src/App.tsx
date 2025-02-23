import Box from "../components/Box";

function App() {


  return (
    <div>
      {/* <Box heading="Hello TSX"  para={"rrr"} func={(a:string)=>{alert(a)}}>
       {"Hellooo Buddy i am children"}
       <button>Click me </button>
      </Box> */}
      <Box 
      label="Hello Type something" 
      mytype="email"
       button="onclick" 
       onclck={() => window.open("https://www.murtazadev.site","_blank")}
       />
    </div>
  );
}

export default App;
