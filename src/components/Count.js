import React from "react";

class Account extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name : 'Van',
            balence: 1000
        };
        this.withdraw=this.withdraw.bind(this);
    }
    withdraw(){
        this.setState({balane:900});
    }
    render(){
        return(
            <div>
                <h2>name: {this.state.name}</h2>
                <h2>balance: {this.state.balance}</h2>
                <button onClick={this.withdraw}>click me</button>
            </div>
        );
    }
}
export default Account;