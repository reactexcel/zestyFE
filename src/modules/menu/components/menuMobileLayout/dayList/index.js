import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { allDayList } from "src/Utils/localStorageUtil";
import "./index.scss";

function DayList(props) {
  const SelectedDayList = Object.keys(props.dayLists);
  const NavList = allDayList.filter((val) => SelectedDayList.includes(val));
  return (
    <div className='day-list'>
      <div className='d-flex flex-column'>
        {NavList.map((val) => {
          return (
            <NavLink to={`/menu/${val}`}>
              <p
                className={
                  props.match.params.id === val ? "active-day" : "inactive-day"
                }
                onClick={props.handleDayListItem}
              >
                {val}
              </p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
export default withRouter(DayList);
