import React from "react";
import CompC from "./CompC";
let Panchayat1 = React.createContext();
let Panchayat2 = React.createContext();
export default class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state={
  //     name:"Ram Yadav"
  //   };
  // };
  render() {
    return (
      <>
      <Panchayat2.Provider value={"Dekh raha he,"}>
        <Panchayat1.Provider value={"Vinod"}>
          <CompC />
        </Panchayat1.Provider>
        </Panchayat2.Provider>
      </>
    );
  }
}
export { Panchayat1,Panchayat2 };
