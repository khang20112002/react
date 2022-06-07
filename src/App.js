import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

// import Hello from './Hello';
// import Hello2 from './Hello2';


// function formatName(user){
//   return user.firstName + ' ' + user.lastName;
// }

// const user ={
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element2 = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// function App() {
//   // const name = 'Josh Perez'
//   // const element = <h1>Hello, {name}</h1>;

//   // ReactDOM.render(
//   //   element,
//   //   document.getElementById('root')
//   // );

//   const data = {id:"1", name:"thi no"};
//   return (
//     // <div className="App">
//     //   <h1>Hello World!</h1>
//     //   <h1>{element}</h1>
//     //   <h1>{name}</h1>
//     //   <h1>{element2}</h1>
//     // </div>
//     // <div>
//     //   <Hello msg="xin chao" user={data}/>
//     //   <Hello2 msg="oke"/>
//     // </div>
//   );
//   }


class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    )
  }
}
export default App;
