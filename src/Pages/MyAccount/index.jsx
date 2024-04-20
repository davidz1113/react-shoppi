import { ShoppingCartContext } from "../../Context";
import { useContext, useState } from "react";

function MyAccount() {
  const context = useContext(ShoppingCartContext);
  const [userData, setUserData] = useState(context.valueUser);

  const [showForm, setShowForm] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    context.setLocalStorageUser(userData);
    setShowForm(false);
  };

  const formEdit = () => {
    return (
      <form onSubmit={formSubmit} className="w-full flex flex-col items-center font-light">
        <h1 className="mb-6 font-bold text-2xl text-center">Edit info</h1>
        <div className="w-3/12 flex flex-col">
          <label htmlFor="name">Your name:</label>
          <input
            onChange={(event) => setUserData({ ...userData, name: event.target.value })}
            id="name"
            type="text"
            className="border border-black rounded-lg mb-4 h-11 p-2 font-semibold"
            value={userData.name}
          />
          <label htmlFor="email">Your email:</label>
          <input
            onChange={(event) => setUserData({ ...userData, email: event.target.value })}
            id="email"
            type="email"
            className="border border-black rounded-lg mb-4 h-11 p-2 font-semibold"
            value={userData.email}
          />
          <label htmlFor="password">Your password:</label>
          <input
            onChange={(event) => setUserData({ ...userData, password: event.target.value })}
            id="password"
            type="password"
            className="border border-black rounded-lg mb-4 h-11 p-2 font-semibold"
            value={userData.password}
          />
          <button
            className={` mt-8 btn-checkout text-black font-semibold rounded-lg p-2 border border-black  self-center `}
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    );
  };

  const dataAccount = () => {
    return (
      <div className="w-full flex flex-col items-center font-light">
        <h1 className="mb-6 font-bold text-2xl text-center">My account</h1>

        <p>
          Name: <span className="font-medium">{context.valueUser.name}</span>
        </p>
        <p className="mb-4">
          Email: <span className="font-medium">{context.valueUser.email}</span>
        </p>

        <button
          onClick={() => setShowForm(!showForm)}
          className={` mt-8 btn-checkout text-black font-semibold rounded-lg p-2 border border-black  self-center `}
        >
          Edit
        </button>
      </div>
    );
  };

  return <div className="font-light w-full">{showForm ? formEdit() : dataAccount()}</div>;
}

export default MyAccount;
