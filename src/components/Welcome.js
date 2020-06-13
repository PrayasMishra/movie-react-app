import React , { Component } from "react";

class Welcome extends Component{
    render(){
        return(
            <div>
            <h1>Welcome {this.props.name} aka {this.props.heroName}
                - using JSX xD
                - class component
            </h1>
            {this.props.children}
            </div>
        )
    }
}

export default Welcome