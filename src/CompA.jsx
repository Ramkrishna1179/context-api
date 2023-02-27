import React from "react";
import CompB from "./CompB";
export default class CompA extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      company : "Bridgefix Technology",
      Sector : "IT",
    }
  }
  render(){
    return(
    <div>
   <h1>{this.props.data}</h1>
   <CompB data={this.state.company} />
    </div>
    )
  }
}
