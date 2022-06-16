import React from "react";


class Store extends React.Component{
    constructor(){
        this.state={
            itemName: 'rose',
            number:1000,
        };
        this.getItem = this.getItem.bind(this);
    }
    getItem(){
        this.setState({number: this.state.number-1})
    }
    render(){
        <div>
            <h1> Item name: {this.state.itemName}</h1>
            <h2> number of roses in stocl: {this.state.number}</h2>
            <button onClick={this.getItem}> add to card</button>
        </div>
    }
}

export default Store;