import React, { useCallback } from "react";
import { useHistory, withRouter } from "react-router";
import { NavItem } from "react-bootstrap";
import { Link } from "react-scroll";
import UpdateTime from "src/modules/menu/components/common/editTime";
import DaysList from "src/modules/menu/components/menuDesktopLayout/sideBar/daysList";
import { getShortedDateAndTime } from "src/Utils/menu";
import { PATH } from "src/constants/path";
import "./index.scss";

function MenuSidebar(props) {
  const history = useHistory();

  const handleRouting = useCallback(
    (val) => {
      history.push(`/menu/${val}`);
    },
    [history]
  );

  const handleUpdateTime = useCallback(() => {
    history.push(PATH.UPDATETIME);
  }, [history]);

  const getClassName = () => {
    const isTopMarginCorrect = props.lastScrollYValue < 270 ? true : false;
    return isTopMarginCorrect ? "sidebar1 sidebar" : "sidebar2 sidebar";
  };

  return (
    <div className={getClassName()}>
      <div className='sidebar-container'>
        <UpdateTime handleUpdateTime={handleUpdateTime} />
        <ul className='side-nav'>
          {getShortedDateAndTime(props.dayListMenus)?.map((val, i) => {
            return (
              <div key={i}>
                <NavItem key={i}>
                  <Link
                    className={
                      props.match.params.id == val.day
                        ? "active-day"
                        : "inactive-day"
                    }
                    onClick={() => handleRouting(val.day)}
                    activeClass='active'
                    to={val.day}
                    spy={true}
                    smooth={true}
                  >
                    <DaysList
                      selectedDay={props.match.params.id}
                      daysAnddDates={val}
                    />
                  </Link>
                </NavItem>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default withRouter(MenuSidebar);
