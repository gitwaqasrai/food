import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext/useContxt";
import RecipeItem from "../../Components/RecipeItem/RecipeItem";

function Favourite() {
  const { loading, favouriteList, handleAddToFavourite, recipeDetailsData } =
    useContext(GlobalContext);

  if (loading) {
    return <div className="text-red-500 font-bold text-2xl">Loading...</div>;
  }

  return (
    <div className="py-8 container mx-auto flex justify-center flex-wrap gap-10">
      {favouriteList && favouriteList.length > 0 ? (
        favouriteList.map((recipeItem, index) => (
          <RecipeItem
            onClick={() => handleAddToFavourite(recipeDetailsData)}
            key={index}
            recipeItem={recipeItem}
          />
        ))
      ) : (
        <p className="text-center lg:text-4xl text-xl text-red-600 font-extrabold">
          Nothing is Added in Favourite....
        </p>
      )}
    </div>
  );
}

export default Favourite;
