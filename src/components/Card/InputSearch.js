import React, { useCallback, useContext } from "react";
// import _ from "lodash";
import debounce from 'lodash.debounce';

import { AppContext } from "../../context/AppContext";

export const InputSearch = () => {

  const { dispatch } = useContext(AppContext);

    const handleInputChange = (event) => {
      dispatch({
          type: 'update',
          payload: event.target.value
      });
    }

    const debouncedChangeHandler = useCallback(
      debounce(handleInputChange, 500)
    , []);
    
  return <div className="mt-5">
      <input
        placeholder="Search"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        type="text" 
        onChange={debouncedChangeHandler}
      />
    </div>;
};
