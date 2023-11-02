import logo from './logo.svg';
import './App.css';
import AbcComponent from './AbcComponent';
import XyzComponent from './XyzComponent';
import Messenger from './Messenger';
import ParentComponent from './ParentComponent';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  return(
    <div>
      <h2>This is my first app</h2>
      <ParentComponent />
      <AbcComponent />
      <XyzComponent />
      <Messenger />
    </div>
    
    
  );
}

export default App;
