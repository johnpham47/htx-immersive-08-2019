import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  name = "John";

  doThing = () => {};

  render() {
    return (
      <>
        <Header></Header>
        <h1 className="greeting">Hello</h1>
        <Footer></Footer>
      </>
    );
  }
}

// Developer doesn't call instance like the one below
// const app = new App();
// console.log(app);

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. *Dabs*
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

// export default App;
