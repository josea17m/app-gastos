/* eslint-disable no-unused-vars */
import { useEffect, useReducer, useState } from "react";
import BudgetPercent from "./components/BudgetPercent";
import FoodIcon from "../public/assets/food.jsx";
import SubsIcon from "../public/assets/subs.jsx";
import HouseIcon from "../public/assets/house.jsx";
import CarIcon from "../public/assets/car.jsx";
import MedicIcon from "../public/assets/medic.jsx";
import PetsIcon from "../public/assets/pets.jsx";
import FamilyIcon from "../public/assets/family.jsx";
import NewSpent from "./components/NewSpent.jsx";
import CategoriesRendering from "./components/CategoriesRendering.jsx";
import NewBudget from "./components/NewBudget.jsx";
import Aos from "aos";
import Modal from "./components/Modal.jsx";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 200,
      once: true,
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [modalSpent, setModalSpent] = useState(false);
  const [newBudgetOpen, setNewBudgetOpen] = useState(false);
  const [budget, setBudget] = useState(localStorage.getItem("budget") || 0);
  const [spent, setSpent] = useState(localStorage.getItem("spent") || 0);
  const [balance, setBalance] = useState(0);
  const [modal, setModal] = useState(false);

  const [spentPercent, setSpentPercent] = useState((spent * 100) / budget);
  const [balancePercent, setBalancePercent] = useState(
    (balance * 100) / budget
  );
  const [category, setCategory] = useState([
    { name: "Food", icon: FoodIcon, id: "1" },
    { name: "Car", icon: CarIcon, id: "2" },
    { name: "House", icon: HouseIcon, id: "3" },
    { name: "Pets", icon: PetsIcon, id: "4" },
    { name: "Family", icon: FamilyIcon, id: "5" },
    { name: "Medic", icon: MedicIcon, id: "6" },
    { name: "Subs", icon: SubsIcon, id: "7" },
    { name: "Other", icon: SubsIcon, id: "8" },
  ]);
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );
  useEffect(() => {
    if (expenses.length === 0) {
      setSpentPercent((spent * 100) / budget);
      setBalancePercent((balance * 100) / budget);

      // Calculate total spent
      const totalSpent = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
      );
      setSpent(totalSpent);
      setBalance(budget - totalSpent);
    }
    return () => {};
  }, [spent, budget, expenses, balance]);

  // Functions declaration

  // New expense
  const addExpense = (name, amount, category) => {
    const id = expenses.length + 1;
    const date = new Date().toLocaleDateString();

    console.log(date);
    const newExpense = { name, amount, category, date, id };
    setExpenses([...expenses, newExpense]);
    localStorage.setItem("expenses", JSON.stringify([...expenses, newExpense]));
  };

  // Delete expense
  const deleteExpense = (id) => {
    const newExpenses = expenses.filter((i) => i.id !== id);
    setExpenses(newExpenses);
  };

  // Edit expense
  const editExpense = (id, name, amount, category, date) => {
    const newExpenses = expenses.map((i) => {
      if (i.id === id) {
        i.name = name;
        i.amount = amount;
        i.category = category;
        i.date = date;
      }
      return i;
    });
    setExpenses(newExpenses);
  };

  // Reset budget
  const resetBudget = () => {
    setModal(false);
    setBudget(0);
    setSpent([]);

    localStorage.removeItem("budget");
    localStorage.removeItem("expenses");
  };

  // Edit budget
  const editBudget = (newBudget) => {
    setBudget(newBudget);
  };

  // Set budget
  const setNewBudget = (newBudget) => {
    setNewBudgetOpen(false);
    setBudget(newBudget);
    localStorage.setItem("budget", newBudget);
  };

  const handleNext = (i) => {
    setActiveIndex(i);
  };
  // Icons

  return (
    <>
      <Modal modal={modal} setModal={setModal} resetBudget={resetBudget} />
      <NewSpent
        addExpense={addExpense}
        modalSpent={modalSpent}
        setModalSpent={setModalSpent}
      />
      <NewBudget
        newBudgetOpen={newBudgetOpen}
        setNewBudgetOpen={setNewBudgetOpen}
        setNewBudget={setNewBudget}
      />
      <nav className="fixed bottom-0 flex text-lg font-semibold bg-white h-[7dvh] w-full z-40 shadow-navbar">
        <div
          onClick={() => handleNext(0)}
          className={`${
            activeIndex === 1 ? "" : "bg-teal-200"
          } text-primary  flex items-center flex-1 justify-center duration-150 border-white border-r-[1px]`}
        >
          Overview
        </div>
        <div
          onClick={() => handleNext(1)}
          className={`${
            activeIndex === 0 ? "" : "bg-teal-200"
          } text-primary  flex items-center flex-1 justify-center duration-150 border-white border-l-[1px]`}
        >
          Expenses
        </div>
      </nav>
      <div className="h-[93dvh]">
        {activeIndex === 0 ? (
          <main className="w-full h-full px-[2rem]">
            <BudgetPercent
              setModal={setModal}
              setNewBudgetOpen={setNewBudgetOpen}
              budget={budget}
              spent={spent}
              balance={balance}
              spentPercent={spentPercent}
              balancePercent={balancePercent}
              resetBudget={resetBudget}
            />
          </main>
        ) : (
          <>
            <button
              onClick={() => setModalSpent(true)}
              className="shadow-md text-primary font-semibold w-full py-5 text-center z-10 fixed top-0 bg-white"
            >
              Add new expense
            </button>

            <main className="flex flex-col gap-10 overflow-y-scroll h-full pt-[10dvh] pb-[7dvh] px-[2rem]">
              {category.map(function (i) {
                return (
                  <CategoriesRendering
                    key={i.id}
                    title={i.id}
                    items={expenses || []}
                    category={category}
                  />
                );
              })}
            </main>
          </>
        )}
      </div>
    </>
  );
}

export default App;
