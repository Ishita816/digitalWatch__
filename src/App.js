// import React from 'react';
// import ReactDOM from 'react-dom';

// function App()
// {
//   return <h1>hello,  react!</h1>;
// }

// ReactDOM.render(<App /> ,document.getElementById('root'));
// export default App

// import React from 'react';
// import ClickerCounter from './ClickerCounter';
// import ClickerCounter1 from './ClickerCounter1';

// const App = () => {
//   return (
//     <div>
//     <ClickerCounter />
//     <ClickerCounter1 />
//     </div>

//   );
// };

// export default App;



import React from 'react';
import DigitalClock from './digitalwatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Digital Clock</h1>
      <DigitalClock />
    </div>
  );
}

export default App;
