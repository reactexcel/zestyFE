import React, { useEffect, useState, useRef, useCallback } from "react";
import { Switch, Route } from "react-router";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuHeader from "src/modules/menu/components/common/menuHeader";
import HomeNavbar from "src/components/common/primaryHeader";
import Footer from "src/components/common/primaryFooter";
import MenuSidebar from "src/modules/menu/components/menuDesktopLayout/sideBar";
import MenuDesktopLayout from "src/modules/menu/components/menuDesktopLayout";
import MenuMobileLayout from "src/modules/menu/components/menuMobileLayout";
import {
  getFoodRequest,
  addDislikedFoodRequest,
  addSideDishRequestt,
  RemoveDishes,
} from "../redux/action";
import { userChoices } from "src/Utils/userChoices";
import {
  setData,
  clearLocalStorage,
  getData,
} from "src/Utils/localStorageUtil";
import {
  getUpdatedMenuList,
  selectedExtraMeals,
  getPaginatedList,
} from "src/Utils/menu";
import { PATH } from "src/constants/path";
import "./index.scss";

function MenuList(props) {
  const [dayListMenus, setDayListMenu] = useState({});
  const [swipeData, setSwipeData] = useState({
    isSwipe: false,
    daySelected: "",
    timeSelected: "",
  });
  const [menuListDots, setMenuListDots] = useState({
    breakfastDots: [true, false, false],
    lunchDots: [true, false, false],
    dinnerDots: [true, false, false],
  });
  const [lastScrollYValue, setLastScrollYValue] = useState(0);
  const [sideDishDetails, setSideDishDetails] = useState({
    id: "",
    type: "",
    isOpen: false,
    currentday: "",
  });
  const [breakfastExtraList, setBreakfastExtraList] = useState({
    name: [],
    id: [],
    price: [],
  });
  const [lunchExtraList, setLunchExtraList] = useState({
    name: [],
    id: [],
    price: [],
  });
  const [dinnerExtraList, setdinnerExtraList] = useState({
    name: [],
    id: [],
    price: [],
  });

  const refValue = useRef();
  const dispatch = useDispatch();
  const getFood = useSelector((state) => state.GetFood);
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  }, []);
  useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  let lastScrollY = 0;
  const handleScroll = () => {
    lastScrollY = window.scrollY;
    setLastScrollYValue(lastScrollY);
  };
  useEffect(() => {
    setBreakfastExtraList([]);
    setLunchExtraList([]);
    setdinnerExtraList([]);
  }, [sideDishDetails.currentday]);

  useEffect(() => {
    const sameMenuNextWeek = props.history.location?.state?.sameMenu;
    setData(false, "isSwipe");
    if (sameMenuNextWeek) {
      dispatch(getFoodRequest(sameMenuNextWeek));
    } else {
      setSwipeData({
        ...swipeData,
        isSwipe: false,
        daySelected: "",
        timeSelected: "",
      });
      dispatch(getFoodRequest({ ...userChoices(QuestionnairesStatus, true) }));
    }
    dispatch(addDislikedFoodRequest([]));
    return () => {
      setMenuListDots({ breakfastDots: [], lunchDots: [], dinnerDots: [] });
    };
  }, []);

  useEffect(() => {
    if (getFood?.isSuccess) {
      const newState = {
        ...getUpdatedMenuList(getFood.data),
      };
      const dayListMenu = Object.assign(newState);
      setDayListMenu(dayListMenu);

      const isFoodSwiped = getData("isSwipe") ? true : false;
      if (isFoodSwiped) {
        if (
          dayListMenu.breakfastLength ||
          dayListMenu.dinnerLength ||
          dayListMenu.lunchLength
        ) {
          const {
            breakfastPaginatedList,
            lunchPaginatedList,
            dinnerPaginatedList,
          } = getPaginatedList(menuListDots, swipeData.timeSelected);

          if (swipeData.timeSelected === "Breakfast") {
            setMenuListDots({
              ...menuListDots,
              breakfastDots: breakfastPaginatedList,
            });
          } else if (swipeData.timeSelected === "Lunch") {
            setMenuListDots({
              ...menuListDots,
              lunchDots: lunchPaginatedList,
            });
          } else if (swipeData.timeSelected === "Dinner") {
            setMenuListDots({
              ...menuListDots,
              dinnerDots: dinnerPaginatedList,
            });
          } else {
            setMenuListDots({
              ...menuListDots,
              breakfastDots: breakfastPaginatedList,
              lunchDots: lunchPaginatedList,
              dinnerDots: dinnerPaginatedList,
            });
          }
        }
      }
    } else if (getFood?.isError) {
      clearLocalStorage();
      props.history.push(PATH.QUESTIONNAIRES);
    }
  }, [getFood.data]);

  const handleSwipeDish = (food, selectedDay, day) => {
    setSwipeData({
      ...swipeData,
      isSwipe: true,
      daySelected: day,
      timeSelected: selectedDay,
    });

    let dislikedFoodItem =
      food?.length > 0 ? [...QuestionnairesStatus.dislikedFood] : [];

    food.map((val) => {
      dislikedFoodItem.push(val._id);
    });

    dispatch(
      getFoodRequest({
        ...userChoices(QuestionnairesStatus, true),
        dislikes: dislikedFoodItem,
        specificDay: day,
        specificMealTime: selectedDay,
      })
    );
    dispatch(addDislikedFoodRequest(dislikedFoodItem));
  };

  const handleSelectExtraDish = (value, type, day, id, extradishId, price) => {
    setSideDishDetails({
      ...sideDishDetails,
      isOpen: false,
    });
    if (sideDishDetails.currentday) {
      setSideDishDetails({
        ...sideDishDetails,
        currentday: day,
      });
    }
    if (type == "Breakfast") {
      const { mealId, mealName, mealPrice } = selectedExtraMeals(
        breakfastExtraList,
        value,
        extradishId,
        price
      );
      setBreakfastExtraList({
        ...breakfastExtraList,
        id: mealId,
        name: mealName,
        price: mealPrice,
      });

      dispatch(
        addSideDishRequestt({
          foodlist: dayListMenus,
          extradishName: mealName,
          type: type,
          day: day,
          id: id,
          extradishId: mealId,
          extraPriceList: mealPrice,
        })
      );
    } else if (type == "Lunch") {
      const { mealId, mealName, mealPrice } = selectedExtraMeals(
        lunchExtraList,
        value,
        extradishId,
        price
      );
      setLunchExtraList({
        ...lunchExtraList,
        id: mealId,
        name: mealName,
        price: mealPrice,
      });
      dispatch(
        addSideDishRequestt({
          foodlist: dayListMenus,
          extradishName: mealName,
          type: type,
          day: day,
          id: id,
          extradishId: mealId,
          extraPriceList: mealPrice,
        })
      );
    } else {
      const { mealId, mealName, mealPrice } = selectedExtraMeals(
        breakfastExtraList,
        value,
        extradishId,
        price
      );

      setdinnerExtraList({
        ...dinnerExtraList,
        id: mealId,
        name: mealName,
        price: mealPrice,
      });
      dispatch(
        addSideDishRequestt({
          foodlist: dayListMenus,
          extradishName: mealName,
          type: type,
          day: day,
          id: id,
          extradishId: mealId,
          extraPriceList: mealPrice,
        })
      );
    }
  };

  const handelAddExtra = (id, type, currentday) => {
    if (sideDishDetails && sideDishDetails.id === id) {
      const yoghurtCardList = {
        ...sideDishDetails,
        id: "",
        type: "",
        isOpen: false,
        currentday: "",
      };
      setSideDishDetails(yoghurtCardList);
    } else {
      const yoghurtCardList = {
        ...sideDishDetails,
        id: id,
        type: type,
        isOpen: true,
        currentday: currentday,
      };
      setSideDishDetails(yoghurtCardList);
    }
  };

  const handleRemoveDishes = useCallback((id, day, type) => {
    dispatch(
      RemoveDishes({
        foodlist: dayListMenus,
        type: type,
        day: day,
        id: id,
      })
    );
  });
  const drawerWidth = 220;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      backgroundColor: "#fff",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      position: "relative",
      border: "none",
      zIndex: 0,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: "#fff",
      padding: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  return (
    <>
      <div className='menu-header' ref={refValue}>
        <HomeNavbar />
      </div>
      <div className='menu_list'>
        <MenuHeader menu='Your Menu' />
        <div className={classes.root}>
          <CssBaseline />
          <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
              paper: classes.drawerPaper,
            }}
            toolbar
            anchor='left'
          >
            <div className={classes.toolbar} />
            <div className='menu-list-container'>
              <MenuSidebar
                lastScrollYValue={lastScrollYValue}
                dayListMenus={dayListMenus}
              />
            </div>
          </Drawer>
          <main className={classes.content}>
            <div className='menu-list-container ml-5 pl-5 '>
              <div className='menu-list ml-4'>
                <Switch>
                  <Route
                    path='/menu/:day'
                    exact
                    render={(props) => {
                      return (
                        <MenuDesktopLayout
                          getFoodData={getFood}
                          dayListMenus={
                            dayListMenus && getUpdatedMenuList(dayListMenus)
                          }
                          handleSwipeDish={handleSwipeDish}
                          swipeData={swipeData}
                          menuListDots={menuListDots}
                          sideDishDetails={sideDishDetails}
                          setSideDishDetails={setSideDishDetails}
                          breakfastExtraList={breakfastExtraList}
                          setBreakfastExtraList={setBreakfastExtraList}
                          lunchExtraList={lunchExtraList}
                          setLunchExtraList={setLunchExtraList}
                          dinnerExtraList={dinnerExtraList}
                          setdinnerExtraList={setdinnerExtraList}
                          handleSelectExtraDish={handleSelectExtraDish}
                          handelAddExtra={handelAddExtra}
                          handleRemoveDishes={handleRemoveDishes}
                        />
                      );
                    }}
                  />
                </Switch>
              </div>
            </div>
          </main>
        </div>
        <div className='menu-list-mobile-container'>
          <Switch>
            <Route
              path='/menu/:day'
              exact
              render={(props) => {
                return (
                  <MenuMobileLayout
                    dayLists={dayListMenus && getUpdatedMenuList(dayListMenus)}
                    dayListMenus={
                      dayListMenus[props?.match?.params?.day] &&
                      getUpdatedMenuList(
                        dayListMenus[props?.match?.params?.day]
                      )
                    }
                    handleSwipeDish={handleSwipeDish}
                    swipeData={swipeData}
                    menuListDots={menuListDots}
                    sideDishDetails={sideDishDetails}
                    setSideDishDetails={setSideDishDetails}
                    breakfastExtraList={breakfastExtraList}
                    setBreakfastExtraList={setBreakfastExtraList}
                    lunchExtraList={lunchExtraList}
                    setLunchExtraList={setLunchExtraList}
                    setdinnerExtraList={setdinnerExtraList}
                    handleSelectExtraDish={handleSelectExtraDish}
                    handelAddExtra={handelAddExtra}
                    handleRemoveDishes={handleRemoveDishes}
                  />
                );
              }}
            />
          </Switch>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default withRouter(MenuList);
