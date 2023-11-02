import {Component, React} from "react";
class MyComponent extends Component{
    constructor(){
        super();
        this.state = {name:'Vinay', city:'Bengaluru'}
    }
    render(){
        return(
            <div>
                <h1>This is amazing {this.state.name}</h1>
                <h2>That all students from {this.state.city} are attending</h2>
                <p>{this.state.name}</p>
                <p>{this.state.name}</p>
                <p>{this.state.name}</p>
                <p>{this.state.city}</p>
                <p>{this.state.city}</p>
                <p>{this.state.city}</p>
                <button onClick={()=> this.setState({name:'Vivaan'})}>Click Here</button>
            </div>
        )
    }
}
/* function MyComponent(){
    return(
        <div>
            <h1>This is amazing</h1>
            <h2>That all students are attending</h2>
        </div>
    )
}
*/


export default MyComponent;