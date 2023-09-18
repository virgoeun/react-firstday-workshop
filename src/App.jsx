import "./App.css";
import Avatar from "./components/Avatar";
const bart = {
  image:
  "https://www.stickees.com/files/cartoon/the-simpsons/2243-bart-simpson-greeting.png",
  firstName: "Bart",
  lastName:"Simpson"
}

const homer = {
  image: 
  "https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
  firstName: "Homer",
  lastName:"Simpson"
    }

  

function App() {
  return (
    <>

<Avatar {...bart}/> 
<Avatar {...homer}/>
      {/* <Avatar firstName = "Bart" lastName ="Simpson" image="https://www.stickees.com/files/cartoon/the-simpsons/2243-bart-simpson-greeting.png" /> 
      <Avatar firstName = "Homer" lastName ="Simpson" image="https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png" />  */}
    </>
  );
}

export default App;
