import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { getFetchCards } from "../services/getFetchCards";

export const useFetchCards = (keyword) => {
  const { keywords } = useContext( AppContext );

  const [obj, setState] = useState({});

  useEffect(() => {
    setState({
      data: [],
      loading: true,
    });
    
    getFetchCards(keywords).then((cards) => {
      setState({
        data: cards,
        loading: false,
      });
    });
  }, [keywords]);

  return obj;
};
