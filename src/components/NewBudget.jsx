/* eslint-disable react/prop-types */
import { useState } from "react";

const NewBudget = ({ newBudgetOpen, setNewBudget, setNewBudgetOpen }) => {
  const [budget, setBudget] = useState(0);
return (
    <>
        <div
            onClick={() => setNewBudgetOpen(false)}
            className={`${
                newBudgetOpen ? "" : "hidden"
            } h-dvh w-full bg-[#00000088] fixed top-0 flex gap-10 justify-center items-center z-50`}
        ></div>
        <div
            className={`${
                newBudgetOpen ? "" : "hidden"
            } flex flex-col bg-white fixed w-max h-max inset-0 m-auto rounded-2xl z-50`}
        >
            <input
                className="py-4 px-2 rounded-t-2xl"
                value={budget ||  ""}
                onChange={(e) => setBudget(e.target.value)}
                type="number"
                pattern="[0-9]*"
                placeholder="Enter your budget"
            />
            <button
                className="py-4 bg-primary text-white rounded-b-2xl"
                onClick={() => setNewBudget(budget)}
            >
                Set
            </button>
        </div>
    </>
);
};

export default NewBudget;
