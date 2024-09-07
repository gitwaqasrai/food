import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Contexts/GlobalContext/useContxt";
import { useContext } from "react";

function NavBar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between py-6 items-center container mx-auto lg:flex-row flex-col gap-4 px-6 bg-gradient-to-r from-red-400 via-red-500 to-red-600 shadow-lg shadow-red-200 rounded-lg">
      <h1 className="text-3xl font-bold text-white tracking-wider">
        <NavLink
          to="/"
          className="hover:text-yellow-300 transition duration-300 ease-in-out"
        >
          FoodRecipe
        </NavLink>
      </h1>
      <form onSubmit={handleSubmit} className="flex-grow max-w-lg">
        <input
          type="text"
          autoComplete="off"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Search recipes..."
          className="w-full bg-white/80 rounded-full outline-none p-3 px-8 shadow-inner  focus:shadow-lg transition-shadow duration-300 ease-in-out text-gray-700 placeholder-gray-500 border-[3px] border-yellow-400 focus:border-yellow-500"
          name="search"
        />
      </form>
      <ul className="flex gap-6 text-lg">
        <li>
          <NavLink
            to="/"
            className="text-white hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favourite"
            className="text-white hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            Favourite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
