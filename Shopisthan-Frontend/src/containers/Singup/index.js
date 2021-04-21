import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MaterialInput } from "../../components/MaterialUI";
import { userSignup } from "../../actions/user.action";

/**
 * @author
 * @function Signup
 **/

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const newUserSignup = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(user);
    dispatch(userSignup(user));
  };

  return (
    <>
      <div className="rightspace">
        <form onSubmit={newUserSignup}>
          <MaterialInput
            type="text"
            placeholder="First Name"
            value={firstName}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <MaterialInput
            type="text"
            placeholder="Last Name"
            value={lastName}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />

          <MaterialInput
            type="text"
            placeholder="email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <MaterialInput
            type="text"
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.password)}
          />

          <button variant="primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
