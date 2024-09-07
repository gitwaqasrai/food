import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Contexts/GlobalContext/useContxt";

function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favouriteList,
    handleAddToFavourite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );

        const result = await response.json();
        if (result?.data?.recipe) {
          console.log(result?.data?.recipe);

          setRecipeDetailsData(result?.data?.recipe);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getRecipeDetails();
  }, [id]);

  return (
    <div className="container mx-auto py-10 px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-95 overflow-hidden group rounded-xl shadow-lg">
          <img
            src={recipeDetailsData?.image_url}
            className="rounded-xl w-full h-full object-cover block group-hover:scale-110 transition-transform duration-500"
            alt={recipeDetailsData?.title}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:pl-5">
        <span className="text-sm text-yellow-500 font-semibold tracking-wide">
          {recipeDetailsData?.publisher}
        </span>
        <h3 className="text-red-700 font-bold text-3xl lg:text-4xl leading-tight">
          {recipeDetailsData?.title}
        </h3>
        <button
          onClick={() => handleAddToFavourite(recipeDetailsData)}
          className="self-start text-sm p-3 px-6 rounded-lg uppercase font-medium tracking-wider shadow-lg bg-red-500 text-white hover:bg-yellow-500 transition-colors duration-300"
        >
          {favouriteList.findIndex(
            (item) => item.id === recipeDetailsData.id
          ) !== -1
            ? "Remove from Favourite"
            : "Add to Favourite"}
        </button>
        <div className="pt-6">
          <span className="text-2xl text-black font-semibold">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-2 mt-4 text-lg leading-relaxed text-gray-700">
            {recipeDetailsData?.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="font-semibold">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span>{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
