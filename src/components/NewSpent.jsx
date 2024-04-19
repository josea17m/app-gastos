/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const NewSpent = ({ modalSpent, setModalSpent, addExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState(0);

  // useEffect(() => {
  //   setName("");
  // }, []);

  const saveExpense = () => {
    if (id === 0) {
      addExpense(name, amount, category);
      setModalSpent(false);
    } else {
      return;
    }
  };
  return (
    <div
      className={`${
        modalSpent ? "h-dvh " : "h-0 py-0 overflow-hidden"
      } w-full  duration-200 justify-between p-5 fixed flex flex-col top-0 bg-[#dfdfdf] z-50`}
    >
      <div className="flex flex-col gap-5">
        <input
          required
          className="px-2 py-4 rounded-2xl"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          required
          className="px-2 py-4 rounded-2xl"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          required
          className="px-2 py-4 rounded-2xl"
          name=""
          id=""
        >
          <option value="">Category</option>
          <option value="1">Food</option>
          <option value="2">Car</option>
          <option value="3">House</option>
          <option value="4">Pets</option>
          <option value="5">Family</option>
          <option value="6">Medic</option>
          <option value="7">Subs</option>
          <option value="8">Other</option>
        </select>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => setModalSpent(false)}
          className="rounded-full navbar-button rotate-45 text-primary"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={45}
            height={45}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
        <button
          onClick={saveExpense}
          className="rounded-full navbar-button text-primary"
        >
          <svg
            width="45"
            height="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewSpent;
