import React, { useState, useEffect } from "react";
import DayList from "./dayList";
import { useHistory, useParams } from "react-router";
import onClickOutside from "react-onclickoutside";
import { useDispatch ,useSelector} from "react-redux";
import {
  resetFoodPlanRequest,
  itemCountRequest,
} from "src/modules/menu/redux/action";
import SwipeMessage from "src/modules/menu/components/common/swipeMessage";
import EditTime from "src/modules/menu/components/common/editTime";
import Footer from "src/modules/menu/components/common/footer";
import SelectDay from "src/modules/menu/components/menuMobileLayout/selectDay";
import MenuDetails from "src/modules/menu/components/menuMobileLayout/menuDetails";
import { PATH } from "src/constants/path";
import {
  getData,
  setData,
  removeAllDaysData,
  isAccessToken,
} from "src/Utils/localStorageUtil";
import "./index.scss";

function MenuMobileLayout(props) {
  const [dayListShow, setDaylistShow] = useState(false);
  const [swipMessage, setSwipMessage] = useState(true);
  const {
    sideDishDetails,
    setSideDishDetails,
    handleSelectExtraDish,
    handelAddExtra,
    dayLists,
    handleRemoveDishes,
    handleSwipeDish,
    menuListDots,
  } = props;
  const dispatch = useDispatch();
  const router = useHistory();
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);

  const handleBack = () => {
    router.push(PATH.QUESTIONNAIRES);
  };

  const selectDay = useParams();

  const handleDayList = () => {
    setDaylistShow(!dayListShow);
  };
  const handleDayListItem = () => {
    setDaylistShow(false);
  };

  useEffect(() => {
    removeAllDaysData();
    dispatch(resetFoodPlanRequest());
  }, []);

  const handleNext = () => {
    if (isAccessToken()) {
      router.push({
        pathname: PATH.CHECKOUT,
        state: { isMenu: true },
      });
    } else {
      router.push(`/menu/${selectDay.day}/login`);
    }
  };

  const handleCloseSwipMessage = () => {
    setSwipMessage(false);
  };

  const handleItemCount = (
    foodId,
    day,
    mealId,
    type,
    mealtime,
    mealName,
    mealPrice
  ) => {
    const payloadData = {
      foodId,
      day,
      mealId,
      type,
      mealtime,
      mealName,
      mealPrice,
    };
    dispatch(itemCountRequest(payloadData));
  };
  const isSideDishOpen = (currentMealId) => {
    const checkOpen =
      sideDishDetails.isOpen && sideDishDetails.id == currentMealId
        ? true
        : false;

    return checkOpen;
  };

  MenuMobileLayout.handleClickOutside = (e) => {
    console.log("call");
    if (e.target.id == "side_dishes_list") {
      console.log("open");
    } else {
      console.log("close");
      setSideDishDetails({
        ...sideDishDetails,
        id: "",
        type: "",
        isOpen: false,
        currentday: "",
      });
    }
  };

  const updateTime = () => {
    router.push(PATH.UPDATETIME);
  };

  const handleFoodSwipe = (day, selectedday) => {
    setData(true, "isSwipe");
    handleSwipeDish(dayLists[day]?.[selectedday], `${selectedday}`, day);
  };
  const getClassName = (selectedDishId) => {
    const selectedDay = getData(`${selectDay.day}`);
    return ` ml-3 mr-3 d-flex flex-column justify-content-space ${
      (
        selectedDay
          ? selectedDay[selectDay.day]?.Breakfast == selectedDishId
          : null
      )
        ? "dish-card-active"
        : "dish-card"
    }`;
  };
  return (
    <div className='mobile_layout'>
      <div className='mb-5'>
        <div className='ml-3 my-2'>
          <EditTime handleUpdateTime={updateTime} />
        </div>
        <SelectDay day={selectDay.day} handleSelectSDay={handleDayList} />
        {dayListShow ? (
          <DayList dayLists={dayLists} handleDayListItem={handleDayListItem} />
        ) : null}
        {props?.dayListMenus?.Breakfast?.length ||
        props?.dayListMenus?.Lunch?.length ||
        props?.dayListMenus?.Dinner?.length ? (
          <div>
            {swipMessage ? (
              <SwipeMessage handleCloseSwipMessage={handleCloseSwipMessage} />
            ) : null}
          </div>
        ) : null}
        <MenuDetails
          foodList={props?.dayListMenus}
          selectedFoodType={props.swipeData}
          day={selectDay.day}
          handleSwipeDish={handleSwipeDish}
          handleItemCount={handleItemCount}
          handelAddExtra={handelAddExtra}
          sideDishDetails={sideDishDetails}
          isSideDishOpen={isSideDishOpen}
          handleSelectExtraDish={handleSelectExtraDish}
          handleRemoveDishes={handleRemoveDishes}
          paginationedList={menuListDots}
          handleFoodSwipe={handleFoodSwipe}
          getClassName={getClassName}
          selectedMealTypes={QuestionnairesStatus.mealType}
          isMobile={true}
        />
      </div>
      <Footer handleBack={handleBack} handleNext={handleNext} isMobile={true} />
    </div>
  );
}
const clickOutsideConfig = {
  handleClickOutside: () => MenuMobileLayout.handleClickOutside,
};
export default onClickOutside(MenuMobileLayout, clickOutsideConfig);
