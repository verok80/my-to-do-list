import './App.css';
import { MyToDoList } from './MyToDoList';
import image from './notepad.jpg';
import imageTwo from './pensils.jpg'

function App() {
  return (
    <div className="App">
      <div className='container'>
       <img src= { image } width="300px" alt="notepad" />
       </div>
       <div className='container'>
       <h1>MY TO DO LIST</h1>
       </div>
       <MyToDoList/>
       <div className='container'>
       <img src= { imageTwo } width="300px" alt="pensils"/>
       </div>
    </div>
  );
}

export default App;
