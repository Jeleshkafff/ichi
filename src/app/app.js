import { useSelector } from "react-redux";
import FormsInAccount from "../components/FornSingAccount/FormInAcc";
import React from "react";

function App() {
    const isLogin = useSelector((state) => state.auth.isLogin);
    console.log(isLogin);
    if (isLogin) {
      return (
          <div className="App">
            {/* <Account /> */}
          </div>
      );
    } else {
      return (
          <div className="App">
            <FormsInAccount />
          </div>
      );
    }
  }
  
  export default App;