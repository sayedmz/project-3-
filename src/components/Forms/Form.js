import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Forms.css";
export const Form = (props) => {
  const boxRegister = {
    display: "flex",
    placeItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  };
  const inputRegister = {
    width: "470px",
  };
  const styleInput = {
    border: "2px solid #80a9e6",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false); //  من اجل عدم ظهور الاخطاء مباشرة
  const [emailError, setEmailError] = useState("");
  // const [flag, setFlag] = useState(false);  لا نستعمل يوزستيت في هذه الحالة
  // console.log(flag);
  useEffect(() => {
    setName(props.name);
    setEmail(props.email);
  }, [props.name, props.email]);

  async function Submit(e) {
    let flag = true;
    e.preventDefault(); //امنع الشيئ الطبيعي وهنا الارسال
    setAccept(true);
    if (name === "" || password.length < 8 || passwordR !== password) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        let res = await axios.post(
          `http://127.0.0.1:8000/api/${props.endPoint}`,
          {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordR,
          }
        );
        // .then((t) => console.log(t));
        if (res.status === 200) {
          props.hasLocal && window.localStorage.setItem("email", email);
          window.location.pathname = `/${props.navigate}`;
        }
      }
    } catch (err) {
      // console.log(err.response.status); كيف نقدر نحدد مكان الخطا
      setEmailError(err.response.status);
      // console.log(err.response.status);
    }
  }
  return (
    <div>
      <div id="box" style={props.boxRegister && boxRegister}>
        <div id="inputBox" style={props.inputRegister && inputRegister}>
          <span className="borderLine"></span>
          <form id="form" onSubmit={Submit}>
            <h2 id="signUp">{props.names}</h2>
            <label htmlFor="name">Name:</label>
            <input
              style={props.styleInput && styleInput}
              className="input"
              type="text"
              name="name"
              id="name"
              placeholder="Name...."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {name === "" && accept && <p>UserName is required</p>}
            <label htmlFor="email">Email:</label>
            <input
              style={props.styleInput && styleInput}
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="Email...."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {accept && emailError === 422 && <p>Email is already been taken</p>}
            <label htmlFor="password">password:</label>
            <input
              style={props.styleInput && styleInput}
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="password...."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.length < 8 && accept && (
              <p>password must be more than 8 char</p>
            )}
            <label htmlFor="repeat">Repeat Password:</label>
            <input
              style={props.styleInput && styleInput}
              className="input"
              type="password"
              name="repeat"
              id="repeat"
              placeholder="Repeat Password...."
              value={passwordR}
              onChange={(e) => setPasswordR(e.target.value)}
            />
            {passwordR !== password && accept && <p>Password dose not match</p>}
            <div style={{ textAlign: "center" }}>
              <button type="submit">{props.button}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
