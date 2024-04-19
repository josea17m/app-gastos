/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const CardSpent = ({ data, category }) => {
  const [icon, setIcon] = useState(null);
  // console.log(data);
  const { name, amount, date } = data;
  const logo = category.icon;

  useEffect(() => {
    setIcon(logo);
  }, [category]);
  return (
    <article className="bg-white rounded-lg shadow-md py-5 px-3 flex justify-between">
      <div className="flex gap-3">
        {icon}
        <div className="flex flex-col justify-between">
          <span className="text-lg">{name}</span>
          <span className="font-semibold text-sm">{amount}$</span>
        </div>
      </div>

      <div>
        <span className="text-xs">{date}</span>
      </div>
    </article>
  );
};

export default CardSpent;
