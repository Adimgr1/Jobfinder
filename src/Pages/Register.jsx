import { useState } from "react";
import {useNavigate} from "react-router-dom"
import "../CSS/Register.css";
export default function Register() {
  let navigate= useNavigate()
  let [details, setDetails] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
  });
  let [error, setError] = useState({});

  let handleChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target.closest("form");
    if (!form.checkValidity()) {
      return form.reportValidity();
    }
    let register = fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    register.then((data) => {
      console.log(data);
      navigate("/login")
    });
  };
  return (
    <>
      <div className="signupscreen">
        <div className="leftscreen">
          <div className="signupheadings">
            <h1>Create an account?</h1>
            <p>Your personal job finder is here</p>
          </div>
          <div className="signupforms">
            <form
              style={{ display: "flex", flexDirection: "column" }}
              action=""
            >
              <input
                className={error.name?.length > 0 ? "error-class" : ""}
                type="text"
                placeholder="Name"
                value={details.name}
                name="name"
                onChange={handleChange}
                required
                disabled={!error.name && Object.keys(error).length > 0}
                onBlur={(e) => {
                  if (e.target.value.length < 3) {
                    setError((prev) => {
                      return { name: "name should have atleat 3 letters" };
                    });
                  } else {
                    setError((prev) => {
                      return {};
                    });
                  }
                }}
              />
              <p className="p-name" style={{ color: "red" }}>
                {error.name ? error.name : null}
              </p>
              <input
                className={error.email?.length > 0 ? "error-class" : ""}
                type="text"
                placeholder="Email"
                value={details["email"]}
                name="email"
                onChange={handleChange}
                required
                disabled={!error.email && Object.keys(error).length > 0}
                onBlur={(e) => {
                  if (
                    !e.target.value.includes("@") ||
                    !e.target.value.includes(".com")
                  ) {
                    setError((prev) => {
                      return { email: "email should be like abc@xyz.com" };
                    });
                  } else {
                    setError((prev) => {
                      return {};
                    });
                  }
                }}
              />
              <p className="p-email" style={{ color: "red" }}>
                {error.email ? error.email : null}
              </p>
              <input
                className={error.mobile?.length > 0 ? "error-class" : ""}
                type="text"
                placeholder="Mobile"
                value={details["mobile"]}
                name="mobile"
                onChange={handleChange}
                required
                disabled={!error.mobile && Object.keys(error).length > 0}
                onBlur={(e) => {
                  if (e.target.value.length < 9) {
                    setError((prev) => {
                      return { mobile: "mobile number should have 10 digits" };
                    });
                  } else {
                    setError((prev) => {
                      return {};
                    });
                  }
                }}
              />
              <p className="p-mobile" style={{ color: "red" }}>
                {error.mobile ? error.mobile : ""}
              </p>
              <input
                type="text"
                placeholder="Password"
                value={details["password"]}
                name="password"
                onChange={handleChange}
                required
                disabled={!error.password && Object.keys(error).length > 0}
                onBlur={(e) => {
                  if (e.target.value.length < 6) {
                    setError((prev) => {
                      return {
                        password: "password should have atleast 6 characters",
                      };
                    });
                  } else {
                    setError((prev) => {
                      return {};
                    });
                  }
                }}
              />
              <p className="p-password" style={{ color: "red" }}>
                {error.password ? error.password : null}
              </p>
              <label
                style={{
                  display: "flex",
                  flexDirection: "colum",
                  fontSize: "0.9rem",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <input
                  style={{ width: "18px", marginTop: "18px" }}
                  type="checkbox"
                  name="check"
                  id=""
                  required
                />
                <p>
                  By creating an account, I agree to our terms of use and
                  privacy policy
                </p>
              </label>
              <button
                className={
                  Object.keys(error).length > 0
                    ? "error-button"
                    : "signupforms-button"
                }
                // disabled={Object.keys(error).length > 0}
                onClick={handleSubmit}
                type="submit"
              >
                Create Account
              </button>
            </form>
            <p style={{ marginTop: "10px", fontSize: "15px" }}>
              Already have an account? &nbsp;
              <span className="signin-link">Sign In</span>
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
