import React, { useReducer } from "react";
import { GridCards } from "./components/Card/GridCards";
import { InputSearch } from "./components/Card/InputSearch";
import { AppContext } from "./context/AppContext";
import { KeywordReducer } from "./context/KeywordReducer";

export const FlickrSearchApp = () => {
  // const [keyword, setKeyword] = useState("");
  const [keywords, dispatch] = useReducer(KeywordReducer, '');


  return (
    <AppContext.Provider value={{keywords, dispatch}}>
      <div className="container mx-auto mx-auto px-4">
        <h2 className="text-black-500 text-3xl mt-5 font-rale font-black">
        Flickr Search App
        </h2>
        <hr />
        <InputSearch></InputSearch>
        <GridCards/>
      </div>
    </AppContext.Provider>
  );
};
