import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../models/Sing";
/*
login, address, password
*/
function SingIn() {
  let Login = React.useRef();
  let Account = React.useRef();
  let Password = React.useRef();
//   const dispatch = useDispatch();

  return (
    <div>
      <p>Sing In</p>
      <input type="text" placeholder="Account" />
      <input type="text" placeholder="Login" />
      <input type="text" placeholder="Password" />
      <button
        className="sing_in_btn"
        onClick={() => {
          dispatch(
            authActions.loginThunk({
              login: Login.current.value,
              address: Account.current.value,
              password: Password.current.value,
            })
          );
          console.log(loginThunk);
          dispatch(getShopsThunk({ address: Login.current.value }));
          dispatch(getRequestThunk({ address: Login.current.value }));
        }}
      >
        sing in
      </button>
    </div>
  );
}
export default SingIn;
