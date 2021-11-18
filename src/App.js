
import './App.css';
import { Profile } from './profile/Profile';

function App() {
  
  return (
    <div className="App">
      <Profile 
      fullName= {5}
      Bio ="this is my bio" Profission="student">
        <img src= "https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg" alt="profile pic"></img>
      </Profile>
    </div>
  );
}

export default App;
