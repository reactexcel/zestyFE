import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingState from "src/components/common/spinner";
import FavoriteFoodList from "./favoriteFoodList";
import { getFavoriteRequest } from "src/modules/questionnaire/redux/action";
import { setData } from "src/Utils/localStorageUtil";
import "./index.scss";

function FavoriteFood() {
  const [favoriteFood, setfavoriteFood] = useState({});
  const dispatch = useDispatch();
  const favoriteFoodList = useSelector((state) => state.favoriteFoodStatus);

  useEffect(() => {
    dispatch(getFavoriteRequest());
    setData(9, "stepperValue");
  }, []);

  useEffect(() => {
    if (favoriteFoodList.data) {
      setfavoriteFood(favoriteFoodList);
    }
  }, [favoriteFoodList.data]);

  return (
    <>
      <div className='container-sp36'>
        <p className='select-y36 text-center mb-5'>What's your favourite ?</p>
        <p className='dietary-text text-center'>
          Helping us understand what you like the most will help us make sure
          the menu has the right ingredients in the dishes!
        </p>
        {favoriteFoodList.isLoading ? (
          <LoadingState />
        ) : (
          <FavoriteFoodList title={favoriteFood} />
        )}
      </div>
    </>
  );
}
export default FavoriteFood;
