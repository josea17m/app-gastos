/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Modal = ({ modal, setModal, resetBudget }) => {
  return (
    <div
      className={`${
        modal ? "fixed" : "hidden"
      } bg-[#00000042] top-0 h-dvh w-full z-50 flex justify-center items-center`}
    >
      <div className="bg-white w-max rounded-2xl text-xl">
        <div className="p-6">Confirm to reset app</div>
        <div className="flex">
          <button
            onClick={resetBudget}
            className="flex-1 p-2 text-white bg-primary rounded-bl-2xl"
          >
            Yes
          </button>
          <button
            onClick={() => setModal(false)}
            className="flex-1 p-2 text-white bg-primary rounded-br-2xl"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
