import { useState, useRef } from "react";
import { useLoginMutation } from "./store/Service/AuthService";

const App = () => {
  const [login, response] = useLoginMutation();
  const formRef = useRef();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form.get("email"), form.get("password"));
    fetch("http://go.contact.mmeducare.com/api/v1/login", {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };

  if (response.isLoading) {
    return <h1>Is Loading</h1>;
  } else {
    return (
      <div className=" flex justify-center items-center container mx-auto h-[100vh]">
        <div className="card">
          <h1 className="text-2xl text-center">Login Your Account</h1>
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className="input-container">
              <label className="label">Email</label>
              <input
                type="text"
                placeholder="Email address"
                className="inputer"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-contaienr">
              <label className="label">Password</label>
              <input
                value={data.value}
                onChange={handleChange}
                type="text"
                className="inputer"
                placeholder="Password"
                name="password"
              />
            </div>

            <button className="btn-nonprimary mt-5">Login</button>
          </form>
        </div>
      </div>
    );
  }
};

export default App;
