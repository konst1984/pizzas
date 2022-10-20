import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../redux/filter/slice";
import { selectCategory } from "../../redux/filter/selectors";

const Category: React.FC = () => {
  const categoryId = useSelector(selectCategory);
  const dispatch = useDispatch();

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li key={category}>
            <button
              onClick={() => dispatch(setCategoryId(index))}
              className={
                categoryId === index
                  ? "button-category active"
                  : "button-category"
              }
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
