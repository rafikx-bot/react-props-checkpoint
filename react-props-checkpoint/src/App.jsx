
import './App.css'

import { Profile } from './profile/Profile'
import image from './assets/images/5d68d7070e43a0.37989709.png'

function App() {
const handleName=(fullName)=>{
  alert(`Hi my name is ${fullName}`);
}
  return (
    <div className="App" style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
      <Profile  fullName={"Otmani Rafik"} bio={"Hi there, my name is rafik and i'am an architecture student"} profession={"i'm a student"} handleName={handleName} >
        <img src={image} alt="card-image"  />
        </Profile>
    </div>
  )
}

export default App

