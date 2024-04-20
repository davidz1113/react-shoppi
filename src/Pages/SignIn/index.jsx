import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

function SignIn() {
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });

  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  const context = useContext(ShoppingCartContext);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    context.setLocalStorageUser(userData);
    context.setLocalStorageSing(true);
    navigate("/");
  };

  const renderView = () => {
    if (showForm) {
      return formToSignUp();
    }
    return sectionToSignIn();
  };

  const formToSignUp = () => {
    return (
      <form onSubmit={formSubmit} className="w-full flex flex-col items-center font-light">
        <h1 className="mb-6 font-bold text-2xl">Welcome</h1>
        <div className="w-3/12 flex flex-col">
          <label htmlFor="name">Your name:</label>
          <input
            onChange={(event) => setUserData((prevState) => ({ ...prevState, name: event.target.value }))}
            id="name"
            type="text"
            className="border border-black rounded-lg mb-4 h-11 p-2 font-semibold"
          />
          <label htmlFor="email">Your email:</label>
          <input
            onChange={(event) => setUserData((prevState) => ({ ...prevState, email: event.target.value }))}
            id="email"
            type="email"
            className="border border-black rounded-lg mb-4 h-11 p-2 font-semibold"
          />
          <label htmlFor="password">Your password:</label>
          <input
            onChange={(event) => {
              setUserData((prevState) => ({ ...prevState, password: event.target.value }));
            }}
            id="password"
            type="password"
            className="border border-black rounded-lg mb-4 h-11 p-2 font-semibold"
          />
          <button className="btn-checkout text-white rounded-lg p-2 bg-black self-center" type="submit">
            Create
          </button>
        </div>
      </form>
    );
  };

  const sectionToSignIn = () => {
    return (
      <div className="w-full flex flex-col items-center font-light">
        <h1 className="mb-6 font-bold text-2xl">Welcome</h1>
        <div className="mb-6">
          <p>
            Email: <span className="font-semibold">{context.valueUser.name}</span>
          </p>
          <p>
            Password: <span className="font-semibold">{context.valueUser.password}</span>
          </p>
        </div>
        <button
          disabled={!context.valueUser.name && !context.valueUser.password}
          className={`${
            context.valueUser.name && context.valueUser.password ? "" : "opacity-60"
          } mb-5 btn-checkout text-white font-semibold rounded-lg p-2 self-center bg-black`}
          onClick={() => {
            context.setLocalStorageSing(true);
            navigate("/");
          }}
        >
          Login
        </button>
        <p className="underline mb-5 cursor-pointer">Forgot my password</p>
        <button
          disabled={context.valueUser.name && context.valueUser.password}
          className={`${
            context.valueUser.name && context.valueUser.password ? "opacity-40" : ""
          } mb-5 btn-checkout text-black font-semibold rounded-lg p-2 border border-black  self-center `}
          onClick={() => {
            setShowForm(true);
          }}
        >
          Sign up
        </button>
      </div>
    );
  };

  return <div className="w-full">{renderView()}</div>;
}

export default SignIn;
