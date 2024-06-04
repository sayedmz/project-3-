import Form from "../../components/Forms/Form";
import Header from "../../components/Header/Header";

export default function SignUp() {
  return (
    <div style={{ background: "radial-gradient(#80a9e6, white, #9d3477)" }}>
      <Header />
      <Form
        names="Register"
        button="Register"
        endPoint="register"
        navigate=""
        hasLocal={true}
        boxRegister={true}
        inputRegister={true}
      />
    </div>
  );
}

// قبل  compenents
//return
// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [passwordR, setPasswordR] = useState("");
// const [accept, setAccept] = useState(false); //  من اجل عدم ظهور الاخطاء مباشرة
// const [emailError, setEmailError] = useState("");
// // const [flag, setFlag] = useState(false);  لا نستعمل يوزستيت في هذه الحالة
// // console.log(flag);
// async function Submit(e) {
//   let flag = true;
//   e.preventDefault(); //امنع الشيئ الطبيعي وهنا الارسال
//   setAccept(true);
//   if (name === "" || password.length < 8 || passwordR !== password) {
//     flag = false;
//   } else flag = true;
//   try {
//     if (flag) {
//       let res = await axios.post("http://127.0.0.1:8000/api/register", {
//         name: name,
//         email: email,
//         password: password,
//         password_confirmation: passwordR,
//       });
//       // .then((t) => console.log(t));
//       if (res.status === 200) {
//         window.localStorage.setItem("email", email);
//         window.location.pathname = "/";
//       }
//     }
//   } catch (err) {
//     // console.log(err.response.status); كيف نقدر نحدد مكان الخطا
//     setEmailError(err.response.status);
//     // console.log(err.response.status);
//   }
// }
//html
// <div id="box">
//   <div id="inputBox">
//     <span className="borderLine"></span>
//     <form id="form" onSubmit={Submit}>
//       <h2 id="signUp">Sign Up</h2>
//       <label htmlFor="name">Name:</label>
//       <input
//         className="input"
//         type="text"
//         name="name"
//         id="name"
//         placeholder="Name...."
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       {name === "" && accept && <p>UserName is required</p>}
//       <label htmlFor="email">Email:</label>
//       <input
//         className="input"
//         type="email"
//         name="email"
//         id="email"
//         placeholder="Email...."
//         required
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       {accept && emailError === 422 && <p>Email is already been taken</p>}
//       <label htmlFor="password">password:</label>
//       <input
//         className="input"
//         type="password"
//         name="password"
//         id="password"
//         placeholder="password...."
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {password.length < 8 && accept && (
//         <p>password must be more than 8 char</p>
//       )}
//       <label htmlFor="repeat">Repeat Password:</label>
//       <input
//         className="input"
//         type="password"
//         name="repeat"
//         id="repeat"
//         placeholder="Repeat Password...."
//         value={passwordR}
//         onChange={(e) => setPasswordR(e.target.value)}
//       />
//       {passwordR !== password && accept && <p>Password dose not match</p>}
//       <div style={{ textAlign: "center" }}>
//         <button type="submit">Register</button>
//       </div>
//     </form>
//   </div>
// </div>;
