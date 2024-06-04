import axios from "axios";
import { useState } from "react";
import Header from "../../components/Header/Header";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [accept, setAccept] = useState(false); //  من اجل عدم ظهور الاخطاء مباشرة
  const [emailError, setEmailError] = useState("");
  // const [flag, setFlag] = useState(false);  لا نستعمل يوزستيت في هذه الحالة
  // console.log(flag);
  async function Submit(e) {
    let flag = true;
    e.preventDefault(); //امنع الشيئ الطبيعي وهنا الارسال
    setAccept(true);
    if (password.length < 8) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: password,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/";
        }
        // .then((t) => console.log(t.data));
      }
    } catch (err) {
      // console.log(err.response.status); كيف نقدر نحدد مكان الخطا
      setEmailError(err.response.status);
    }
  }
  return (
    <>
      <Header />
      <div
        id="box"
        style={{
          display: "flex",
          placeItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "radial-gradient(#80a9e6, white, #9d3477)",
        }}
      >
        <div id="inputBox">
          <span className="borderLine"></span>
          <form id="form" onSubmit={Submit}>
            <h2 id="signUp">Log In</h2>

            <label htmlFor="email">Email:</label>
            <input
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

            <div style={{ textAlign: "center" }}>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
