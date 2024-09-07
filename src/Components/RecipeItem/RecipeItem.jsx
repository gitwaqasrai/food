import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function RecipeItem({ recipeItem }) {
  return (
    <div className="flex flex-col w-full lg:w-1/3 md:w-1/2 p-5 shadow-xl gap-4 border-4 rounded-2xl bg-white/80 border-red-400 hover:shadow-2xl transition-shadow duration-300">
      <div className="h-48 flex justify-center items-center overflow-hidden rounded-xl">
        <img
          src={recipeItem?.image_url}
          alt="Recipe Item"
          className="block w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="">
        <span className="text-sm text-yellow-500 font-semibold">
          {recipeItem?.publisher}
        </span>
        <h3 className="text-red-700 font-bold truncate text-2xl">
          {recipeItem?.title}
        </h3>
        <Link
          className="text-sm p-3 px-6 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md mt-4 bg-red-500 text-white hover:bg-yellow-500 transition-colors duration-300"
          to={`/details/${recipeItem?.id}`}
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeItem;
