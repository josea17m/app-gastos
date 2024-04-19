/* eslint-disable react/prop-types */


const ButtonNewSpent = ({ setModalSpent }) => {
  return (
    <button
    onClick={() => setModalSpent(true)}
    className="fixed bottom-4 right-4 navbar-button text-primary shadow-lg z-10"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={45}
      height={45}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  </button>
  )
}

export default ButtonNewSpent
