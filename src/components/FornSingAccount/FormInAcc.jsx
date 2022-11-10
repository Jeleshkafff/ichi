import SingIn from "./SingIn";
//import { web3, contractInstance } from "../network.js";
import {contractInstance, web3 } from "../../api/network.js"
function FormsInAccount() {
    return (
      <div>
          <SingIn />
      </div>
    );
  }
  export default FormsInAccount