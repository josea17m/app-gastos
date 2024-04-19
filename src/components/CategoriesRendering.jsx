/* eslint-disable no-unused-vars */
import CardSpent from "./CardSpent";

/* eslint-disable react/prop-types */
const CategoriesRendering = ({ title, items, category }) => {
  // Filter category by id
  const categoryItem = category.filter((c) => c.id === title);
  const titleH2 = categoryItem[0].name;

  // Filter items by category
  const filteredItems = items.filter((i) => i.category === title);
  //console.log(filteredItems);

  return (
    <>
      {filteredItems.length === 0 ? null : (
        <article>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold">{titleH2}</h2>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={30}
                height={30}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-8">
            {filteredItems.map((i) => (
              <CardSpent key={i.id} data={i} category={categoryItem[0]} />
            ))}
          </ul>
        </article>
      )}
    </>
  );
};

export default CategoriesRendering;
