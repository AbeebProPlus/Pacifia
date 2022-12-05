import {Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            color: "blue"
        }
    }
    changeColor=()=>{
        this.setState({color:"red"})
    }
    handleColorChange =(e)=>{
        const color = e.target.value;
        this.setState(color)
    }
    render() {
        return(
            <div>
              <button onClick = {this.changeColor} style={{backgroundColor: this.state.color}}>Increase</button>
            </div>
        )
    }
}

export default Counter