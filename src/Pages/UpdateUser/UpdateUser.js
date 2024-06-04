import React, { useEffect, useState } from "react";
import Form from "../../components/Forms/Form";
export const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const id = window.location.pathname.split("/").slice(-1)[0];
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data[0].name);
        setEmail(data[0].email);
      });
  }, []);

  return (
    <div>
      <Form
        names="Update User"
        button="Update"
        name={name}
        email={email}
        endPoint={`user/update/${id}`}
        navigate="dashboard/users"
        hasLocal={false}
        styleInput={true}
      />
    </div>
  );
};

//قبل components
// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [passwordR, setPasswordR] = useState("");
// const [accept, setAccept] = useState(false); //  من اجل عدم ظهور الاخطاء مباشرة
// const [emailError, setEmailError] = useState("");
// const [flag, setFlag] = useState(false);  لا نستعمل يوزستيت في هذه الحالة
// console.log(flag);

//   useEffect(() => {
//   fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
//     .then((res) => res.json())
//     .then((data) => {
//       // setName(data[0].name);
//       // setEmail(data[0].email);
//     });
// }, []);
// async function Submit(e) {
//   let flag = true;
//   e.preventDefault(); //امنع الشيئ الطبيعي وهنا الارسال
//   setAccept(true);
//   if (name === "" || password.length < 8 || passwordR !== password) {
//     flag = false;
//   } else flag = true;
//   try {
//     if (flag) {
//       let res = await axios.post(
//         `http://127.0.0.1:8000/api/user/update/${id}`,
//         {
//           name: name,
//           email: email,
//           password: password,
//           password_confirmation: passwordR,
//         }
//       );
//       // .then((t) => console.log(t));
//       if (res.status === 200) {
//
//         window.location.pathname = "/dashboard/users";
//       }
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// <div id="box">
//   <div id="inputBox">
//     <span className="borderLine"></span>
//     <form id="form" onSubmit={Submit}>
//       <h2 id="signUp">Update Information</h2>
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
//         <button type="submit">Update</button>
//       </div>
//     </form>
//   </div>
// </div>;
