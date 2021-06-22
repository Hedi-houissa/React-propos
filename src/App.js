import './App.css';
import Profile from './profile/Profile'
import Photo from './assets/hedi.jpg'



function App() {
  const handleName = x => alert(`this is a message from ${x}`)

  return (
    <div className="App">
      <Profile
     
        name = "hedi"
        bio = "bio"
        profession = "student"
        image= {Photo}
        handleName={handleName}
        
      >
      <h3>test</h3>
      <img src= {Photo} alt="not exist" width="200px" />

      </Profile>
      
    </div>
  );
}

export default App;
