import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import onClickOutside from "react-onclickoutside";
import { Link, animateScroll as scroll } from "react-scroll";
import MenuModal from "src/modules/menu/components/common/menuModal";
import SwipeMessage from "src/modules/menu/components/common/swipeMessage";
import MenuDetails from "src/modules/menu/components/menuDesktopLayout/menuDetails";
import PriceSummary from "src/modules/menu/components/menuDesktopLayout/priceSummary";
import {
  resetFoodPlanRequest,
  itemCountRequest,
} from "src/modules/menu/redux/action";
import DayAndDateDetails from "src/modules/menu/components/menuDesktopLayout/dayAndDateDetails";
import Footer from "src/modules/menu/components/common/footer";
import { getShortedDateAndTime } from "src/Utils/menu";
import {
  allDayList,
  isAccessToken,
  removeAllDaysData,
  setData,
} from "src/Utils/localStorageUtil";
import { PATH } from "src/constants/path";
import "./index.scss";

function MenuDesktopLayout(props) {
  const {
    dayListMenus: newUpdatedMenuList,
    sideDishDetails,
    setSideDishDetails,
    handleSelectExtraDish,
    handelAddExtra,
    handleRemoveDishes,
    menuListDots,
  } = props;

  const [modalPage, setModalPage] = useState(false);
  const [swipeMessage, setSwipMessage] = useState(false);
  const dispatch = useDispatch();
  const router = useHistory();
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);

  const handleBack = () => {
    router.push(PATH.QUESTIONNAIRES);
  };

  const selectDay = useParams();

  const handleSetActive = (to) => {
    router.push(`/menu/${to}`);
  };

  const handleModalClose = () => {
    setModalPage(false);
    setTimeout(() => setSwipMessage(true), 2000);
  };

  useEffect(() => {
    removeAllDaysData();
    dispatch(resetFoodPlanRequest());
    setTimeout(() => setModalPage(true), 2000);
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

  const SelectedDayList = Object.keys(newUpdatedMenuList);
  const NavList = allDayList.filter((val) => SelectedDayList.includes(val));

  const handleFoodSwipe = (day, selectedday) => {
    setData(true, "isSwipe");
    props.handleSwipeDish(
      newUpdatedMenuList[day]?.[selectedday],
      `${selectedday}`,
      day
    );
  };

  MenuDesktopLayout.handleClickOutside = (e) => {
    if (e.target.id == "side_dishes_list") {
      console.log("open");
    } else {
      setSideDishDetails({
        ...sideDishDetails,
        id: "",
        type: "",
        isOpen: false,
        currentday: "",
      });
    }
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

  return (
    <>
      <MenuModal show={modalPage} handleModalClose={handleModalClose} />
      {NavList.length ? (
        <div>
          {swipeMessage && !modalPage ? (
            <SwipeMessage handleCloseSwipMessage={handleCloseSwipMessage} />
          ) : null}
        </div>
      ) : null}

      {getShortedDateAndTime(newUpdatedMenuList).map((val, i) => {
        return (
          <div key={i}>
            <Link
              activeClass='active'
              to={val.day}
              spy={true}
              smooth={true}
              hashSpy={true}
              delay={500}
              isDynamic={false}
              onSetActive={handleSetActive}
              ignoreCancelEvents={false}
            ></Link>
            <div id={val.day}>
              <DayAndDateDetails day={val?.day} date={val.date} />

              {newUpdatedMenuList[val.day]?.Breakfast && (
                <MenuDetails
                  foodType='Breakfast'
                  foodData={val}
                  menuItemsList={newUpdatedMenuList[val.day]?.Breakfast}
                  swipeSelection={props?.swipeData}
                  handleSwipeDish={props.handleSwipeDish}
                  selectedMealTypes={QuestionnairesStatus.mealType}
                  handleRemoveDishes={handleRemoveDishes}
                  handleItemCount={handleItemCount}
                  additionalFoodItem={sideDishDetails}
                  handleFoodSwipe={handleFoodSwipe}
                  handelAddExtra={handelAddExtra}
                  handleSelectExtraDish={handleSelectExtraDish}
                  paginationedList={menuListDots?.breakfastDots}
                />
              )}

              {newUpdatedMenuList[val.day]?.Lunch && (
                <MenuDetails
                  foodType='Lunch'
                  foodData={val}
                  menuItemsList={newUpdatedMenuList[val.day]?.Lunch}
                  swipeSelection={props?.swipeData}
                  handleSwipeDish={props.handleSwipeDish}
                  selectedMealTypes={QuestionnairesStatus.mealType}
                  handleRemoveDishes={handleRemoveDishes}
                  handleItemCount={handleItemCount}
                  additionalFoodItem={sideDishDetails}
                  handleFoodSwipe={handleFoodSwipe}
                  handelAddExtra={handelAddExtra}
                  handleSelectExtraDish={handleSelectExtraDish}
                  paginationedList={menuListDots?.lunchDots}
                />
              )}

              {newUpdatedMenuList[val.day]?.Dinner && (
                <MenuDetails
                  foodType='Dinner'
                  foodData={val}
                  menuItemsList={newUpdatedMenuList[val.day]?.Dinner}
                  swipeSelection={props?.swipeData}
                  handleSwipeDish={props.handleSwipeDish}
                  selectedMealTypes={QuestionnairesStatus.mealType}
                  handleRemoveDishes={handleRemoveDishes}
                  handleItemCount={handleItemCount}
                  additionalFoodItem={sideDishDetails}
                  handleFoodSwipe={handleFoodSwipe}
                  handelAddExtra={handelAddExtra}
                  handleSelectExtraDish={handleSelectExtraDish}
                  paginationedList={menuListDots?.dinnerDots}
                />
              )}
            </div>
          </div>
        );
      })}

      <Footer handleNext={handleNext} handleBack={handleBack} />
      <div className='total_price_container'>
        <PriceSummary
          totalPrice={newUpdatedMenuList.totalAmount}
          handleCheckout={handleNext}
        />
      </div>
    </>
  );
}
const clickOutsideConfig = {
  handleClickOutside: () => MenuDesktopLayout.handleClickOutside,
};
export default onClickOutside(MenuDesktopLayout, clickOutsideConfig);
