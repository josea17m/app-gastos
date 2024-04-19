/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import DoughnutChart from "./DoughnutChart";

const BudgetPercent = ({
  budget,
  spent,
  balance,
  spentPercent,
  balancePercent,
  setNewBudgetOpen,
  setModal,
}) => {
  return (
    <section className="h-full flex flex-col justify-between py-10">
      <article className="flex justify-center">
        <DoughnutChart budget={balancePercent} spent={spentPercent} />
      </article>
      <article className="flex flex-col justify-between text-xl">
        <div className="flex flex-col gap-5">
          <p className="flex justify-between">
            Budget: <span className="font-semibold">{budget}$</span>
          </p>
          <p className="flex justify-between">
            Spent:{" "}
            <span className="font-semibold text-[#ff0404]">-{spent}$</span>
          </p>
          <p className="flex justify-between">
            Balance:{" "}
            <span
              className={`${
                balance > 0 ? "text-green-500" : "text-[#ff0404]"
              } font-semibold`}
            >
              {balance}$
            </span>
          </p>
        </div>
      </article>
      <article className="flex justify-between">
        <button
          onClick={() => setModal(true)}
          className="px-10 py-3 rounded-full bg-[#ff0404] text-white"
        >
          Reset
        </button>
        <button
          onClick={() => setNewBudgetOpen(true)}
          className="px-10 py-3 rounded-full bg-primary text-white"
        >
          Edit
        </button>
      </article>
    </section>
  );
};

export default BudgetPercent;
