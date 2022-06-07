import React,{Component} from 'react';
export default class Hello extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <h1>{this.props.msg}</h1>
                <h2>{this.props.user}, {this.props.user.name}</h2>
            </div>
        );
    }
}
