import React, { useContext } from "react";
import { AletNoResults } from "../../common/AletNoResults";
import { Spinner } from "../../common/Spinner";
import { AppContext } from "../../context/AppContext";
import { useFetchCards } from "../../hooks/useFetchCards";
import { Card } from "./Card";

export const GridCards = () => {
  const { keywords } = useContext( AppContext );
  const message = `There is no a results with ${ keywords }`;
  const { data, loading } = useFetchCards();

  return (
    <>
      { (loading) && <Spinner />}
      { 
        (!loading && keywords !== '' && data.length === 0) 
        && 
        <AletNoResults message={ message } />
      }
      <div className="my-5 flex flex-wrap -mx-2">
        {
          (data) &&
          data.map((card, index) => (
            <Card key={index} {...card} />
          ))
        }
      </div>
    </>
  );
};
