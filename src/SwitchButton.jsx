import React, { useState } from "react";

export default function SwitchButton({isOn: initializeIsOn = false}) {
  const [isOn, setIsOn] = useState(initializeIsOn);
  // console.log(isOn);

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <button onClick={handleClick}>TURN {isOn ? "OFF" : "ON"}</button>
  );
}

// class SwitchButtonHook extends React.Component {
//   state = {
//     isOn: false
//   };
//   handleClick = () => {
//     this.setState({
//       isOn: !this.state.isOn
//     });
//   };

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         TURN {this.state.isOn === true ? "OFF" : "ON"}
//       </button>
//     );
//   }
// }
