import React from "react";
import Input from "./Input";
import Btnsignin from "./Btnsignin";

function Signinpage() {
  return (
    <>
      <body>
        <div className="main2">
          <div className="right">
            <h2>I already have an account</h2>
            <p>Sign in with your email and password</p>
            <form>
              <Input type="email" label="Email" />
              <Input type="password" label="Password" />
              <p>
                ..........................................................................................
              </p>
              <div className="btn">
                <Btnsignin btnName="sign in" />
                <Btnsignin btnName="Sign in with Google" />
              </div>
            </form>
          </div>
          <div
            className="right
          "
          >
            <h2>I do not have a account</h2>
            <p>Sign up with your email and password</p>
            <form>
              <Input type="text" label="displayName" />
              <Input type="email" label="Email" />
              <Input type="password" label="Password" />
              <Input type="password" label="Confirm Password" />
              <div className="btn">
                <Btnsignin btnName="do sign in" className="google" />
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}

export default Signinpage;
