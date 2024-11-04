import { NavLink } from "react-router-dom";
import PropType from "prop-types";
const CategoriesSideBar = ({ categories }) => {
  return (
    <div className="drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <ul className="shadow-xl  text-base-content w-60 h-fit flex flex-col gap-4 p-8 rounded-xl border">
          {/* Sidebar content here */}
          {categories.map((category) => (
            <li
              className="text-xl font-medium bg-gray-200 py-3 px-4 rounded-full"
              key={category.productId}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " bg-black  text-warning shadow-sm p-2 rounded-xl"
                    : ""
                }
                to={`/category/${category.category}`}
              >
                {category.category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CategoriesSideBar.propTypes = {
  categories: PropType.array,
};
export default CategoriesSideBar;
