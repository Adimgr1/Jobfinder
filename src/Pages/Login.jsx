import "../CSS/Login.css";
import { useState } from "react";
export default function Login() {
  let [details, setDetails] = useState({
    email: "",
    password: "",
  });

  let handleChange = (e) => {
     setDetails((prev)=>(
          {...prev, [e.target.name]:e.target.value}
     ))
  };

  let handleSubmit= (e)=>{
     e.preventDefault()
     let form= e.target.closest("form")
     if (!form.checkValidity()) {
      return form.reportValidity();
    }
     let login= fetch("http://localhost:3000/api/auth/login", {
          method:"POST",
          headers: {
               "Content-Type": "application/json",
             },
          body: JSON.stringify(details)

     })
     login.then((data)=>{
          console.log(data)

     })


  }
  return (
    <>
      <div className="loginscreen">
        <div className="leftscreen">
          <div className="loginheadings">
            <h1>Already have an account?</h1>
            <p>Your personal job finder is here</p>
          </div>
          <div className="loginforms">
            <form
              style={{ display: "flex", flexDirection: "column" }}
              action=""
            >
              <input
                type="text"
                placeholder="Email"
                value={details["email"]}
                name="email"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Password"
                value={details["password"]}
                name="password"
                onChange={handleChange}
                required
              />
              <button onClick={handleSubmit} type="submit">Sign in</button>
            </form>
            <p style={{ marginTop: "10px", fontSize: "15px" }}>
              Don't have an account? &nbsp;
              <span className="signup-link">Sign Up</span>
            </p>
          </div>
        </div>
        <div className="rightscreen">
          <img
            src="https://s3-alpha-sig.figma.com/img/f916/e83d/5e2b67cb4a2bd105a7f8c3375419619a?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KtFiv6eXCubd0roz6Q7ux1Pp9EKxW-1Jh~cvClyO8OsXsAPM6JO8yQHmLJ1b3~JS-LfRprWv4EfJ2F6JZ62xTgESkjEdIxSzV1J3vClx25foRjuNZlyGmhmf8BNvM6rVt1L69PyucNP5kQiPP7677ke1OsoCoIlxt4SzzjaHsmWo2npwAaOmQXP9OcI~EMVRqZgYNhyQHiq2noSExqM8W90gNylhf1jdhlkyUqMmIJV7C0mLv3GI4Fj3aJNHcsJnJ5GDBmm2moPTso7toDZ8N8reGM2XgzuOXDXeNxf861KmamBTkj2ot4TSZb5W~C2O7xxwgnYn7HUK0OIBZjvoLg__"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
