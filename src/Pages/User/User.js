import React, { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const User = () => {
  const [users, setUsers] = useState([]);
  // const [run, setRun] = useState(0); //useEffect عندما نحذف شخص يقوم بالتحديث فورا بواسة
  const [run, setRun] = useState(0); //useEffect عندما نحذف شخص يقوم بالتحديث فورا بواسة
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) =>
        // console.log(data);
        setUsers(data)
      );
  }, [run]);

  async function deleteUser(id) {
    const res = await axios.delete(
      `http://127.0.0.1:8000/api/user/delete/${id}`
    );
    if (res.status === 200) {
      setRun((prev) => prev + 1);
    }
  }
  // async function deleteUser(id) {
  //   try {
  //     const res = await axios.delete(
  //       `http://127.0.0.1:8000/api/user/delete/${id}`
  //     );
  //     if (res.status === 200) {
  //       setRun((prev) => prev + 1);
  //     }
  //   } catch {
  //     console.log("none");
  //   }
  // }
  const showUsers = users.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td> <td>{user.name}</td> <td>{user.email}</td>
      <td>
        <Link to={`${user.id}`}>
          <i
            className="fa-solid fa-pen-to-square"
            style={{ color: "black", padding: " 0 20px", cursor: "pointer" }}
          ></i>
        </Link>
        <i
          onClick={() => deleteUser(user.id)}
          // onClick={() => deleteUser(user.id)}
          className="fa-solid fa-user-minus"
          style={{ color: "red", padding: " 0 20px", cursor: "pointer" }}
        ></i>
      </td>
    </tr>
  ));
  return (
    <div id="user">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>User</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{showUsers}</tbody>
      </table>
    </div>
  );
};
// =============================================
// //homework
// import React, { useEffect, useState } from "react";
// import "./User.css";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export const User = () => {
//   const [users, setUsers] = useState([]);
//   const [run, setRun] = useState(0);
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/user/show")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, [run]);
//   async function deleteUser(id) {
//     const res = await axios.delete(
//       `http://127.0.0.1:8000/api/user/delete/${id}`
//     );
//     if (res.status === 200) {
//       setRun((prev) => prev + 1);
//     }
//   }
//   const showUser = users.map((user, index) => (
//     <tr key={index}>
//       <td>{index + 1}</td>
//       <td>{user.name}</td>
//       <td>{user.email}</td>
//       <td>
//         <Link to={`${user.id}`}>
//           <i
//             className="fa-solid fa-pen-to-square"
//             style={{ color: "black", padding: " 0 30px", cursor: "pointer" }}
//           ></i>
//         </Link>
//         <i
//           onClick={() => deleteUser(user.id)}
//           className="fa-solid fa-user-minus"
//           style={{ color: "red", padding: " 0 30px", cursor: "pointer" }}
//         ></i>
//       </td>
//     </tr>
//   ));
//   return (
//     <div id="user">
//       <table>
//         <thead>
//           <tr>
//             <th>id</th>
//             <th>User</th>
//             <th>Email</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>{showUser}</tbody>
//       </table>
//     </div>
//   );
// };
