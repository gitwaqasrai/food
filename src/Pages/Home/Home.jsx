import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext/useContxt";
import RecipeItem from "../../Components/RecipeItem/RecipeItem";

function Home() {
  const { loading, recipeList } = useContext(GlobalContext);

  if (loading) {
    return <div className="text-red-500 font-bold text-2xl">Loading...</div>;
  }

  return (
    <div className="py-8 container mx-auto flex justify-center flex-wrap gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((recipeItem, index) => (
          <RecipeItem key={index} recipeItem={recipeItem} />
        ))
      ) : (
        <p className="text-center lg:text-4xl text-xl text-red-600 font-extrabold">
          Nothing to Show! Please Wait....
        </p>
      )}
    </div>
  );
}

export default Home;
