/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouriteList, setfavouriteList] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const result = await response.json();
      if (result?.data?.recipes) {
        setRecipeList(result?.data.recipes);
        setLoading(false);
        setSearchParam("");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavourite(getCurrentItem) {
    let cpyFavouriteList = [...favouriteList];
    const index = cpyFavouriteList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyFavouriteList.push(getCurrentItem);
    } else {
      cpyFavouriteList.splice(getCurrentItem);
    }
    setfavouriteList(cpyFavouriteList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        setSearchParam,
        handleSubmit,
        handleAddToFavourite,
        favouriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
