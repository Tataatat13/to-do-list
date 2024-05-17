import './App.css';
import { Notes } from './Notes';
import { ToDoList } from './Todolist';
import FonTwo from './fon2.jpg';
import FonFour from './fon4.jpg';


function App() {
  return (
    
  <div className='head'>
    
    <div className="top">
          <div className='header'>
            <h1>Daily planer</h1>
          </div> 
          <div className='fon'>
              <img src={FonFour} alt="fon" width="120px"/>
          </div>

        <div className='Box'>
          <div className='smallBox'>
            <h3>Notes</h3>
            <Notes/>
          </div>

          <div className='fonImage'>
              <img src={FonTwo} alt="fon" width="140px"/>
          </div>

        </div>


    </div>

      <div className='App'>
        <div className='container'>
          <h2> To Do List</h2>
          <ToDoList/>
        </div>
      </div>
      
</div>
  );
}

export default App;
