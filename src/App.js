import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Comment from "./components/Comment";
import Car from "./components/Car";
// import Stock from "./components/Stock";
// import Warning from "./components/Warning";
import Welcome from "./components/Welcome";
import { Form, Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "./components/dish";
import MainComponent from "./components/MainComponent";

// import Account from './components/Count';
// import Store from './components/Store';

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


// const comment={
//   date:new Date().toString(),
//   text:'Hi',
//   author:{
//     name:'Hello',
//     avatarUrl: './image/logo.png',
//   }
// }

// class App extends React.Component{
//   render(){
//     return(
//       <div className="App">
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//         {/* <Count/> */}
//         {/* <Store /> */}
//       </div>
//     )
//   }
// }

// const comment = {
//     date: new Date(),
//     text:'I hope you enjoy my restaurant!',
//     author:(
//         name = 'alberto',
//         avatarUrl = './images/logo.png'
//     )
// }

// class App extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             dishes: DISHES
//         };
//     }
    
// }

class App extends React.Component{
    constructor(props){
        super(props);
    //   this.state={
    //     dishes: DISHES
    //   };
    }

    render() {
        return(
        // <MenuComponent dishes={DISHES}/>
        <div className="App">
        <MainComponent/>
        </div>
    )
    } 
}

// function App(){
//     return(
//         // <div>
//         // <Welcome name="Van" />
//         // <Welcome name="Thuy Kieu" />
//         // <Welcome name="Thuy Van" />
//         // </div>
//         // <Car/>
//         // <Comment date={comment.date} text={comment.text} author={comment.author} />
//         <div className='App'>
//             <Navbar dark color='primary'>
//                 <div className='container'>
//                     <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
//                 </div>
//             </Navbar>
//             <Menu dishes = {this.state.dishes} />
//         </div>
//     );
// }

export default App;
