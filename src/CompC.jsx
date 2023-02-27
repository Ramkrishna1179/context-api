import React from "react";
// import CompB from "./CompB";
import { Panchayat1, Panchayat2 } from "./App";
export default class CompC extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <Panchayat1.Consumer>
          {(part1) => {
            return (
              <>
                <Panchayat2.Consumer>
                  {(part2) => {
                    return (
                      <h1>
                        {part2}
                        {part1}
                      </h1>
                    );
                  }}
                </Panchayat2.Consumer>
              </>
            );
          }}
        </Panchayat1.Consumer>
      </>
    );
  }
}
