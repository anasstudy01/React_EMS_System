import React, { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(`Email: ${email}, Password: ${password}`);
    // handleLogin(email, password);

    setEmail("");
    setPassword("");
  };



  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border border-green-600 rounded-lg p-8 w-80 mx-auto mt-20">
      <form  onSubmit={submitHandler} className="flex flex-col">

        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 px-4 py-2 border border-green-600 rounded-full bg-transparent text-white placeholder-white focus:outline-none"
        />
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
          className="w-full mb-6 px-4 py-2 border border-green-600 rounded-full bg-transparent text-white placeholder-white focus:outline-none"
        />
        <button required  className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 w-full">
          Log in
          
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;
