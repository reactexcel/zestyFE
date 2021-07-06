import React, { useState, useEffect } from "react";
import { Collapse } from "react-bootstrap";
import { getFormattedFoodDetails } from "src/Utils/lastWeekPlan";
import MealPlanDetails from "src/modules/profile/components/mealPlanDetails";
import Button from "src/modules/profile/components/mealSelectionButton";
import DateRange from "src/modules/profile/components/dateRange";
import "./index.scss";

const LastWeekPlan = (props) => {
  const daysMenu = props.lastweekplan;
  const [open, setOpen] = useState();

  useEffect(() => {
    if (!open) {
      const noOfWeeks = daysMenu?.length;
      const lastWeekPlanList = new Array(noOfWeeks).fill({
        button: true,
        active: false,
      });
      setOpen(lastWeekPlanList);
    }
  }, [daysMenu]);

  const setLastWeekPlanActive = (selected) => {
    const newOpen = open.map((val, i) => {
      if (i == selected) {
        return { ...val, active: !val.active };
      } else {
        return { ...val, active: false };
      }
    });
    setOpen(newOpen);
  };

  return (
    <>
      <div className='last_week_plan'>
        {daysMenu?.map((lastweekbutton, index) => (
          <div className='d-inline-block' key={index}>
            <Button
              index={index}
              active={open?.length > 0 && open[index]?.active}
              open={open}
              startdate={lastweekbutton.startdate}
              enddate={lastweekbutton.enddate}
              setLastWeekPlanActive={setLastWeekPlanActive}
            />
          </div>
        ))}
      </div>

      {daysMenu.map((lastweek, indexvalue) => (
        <Collapse
          in={open?.length > 0 && open[indexvalue]?.active}
          key={indexvalue}
        >
          <div id='example-collapse-text' key={indexvalue}>
            <div className='d-flex flex-wrap justify-content-around'>
              <DateRange
                startdate={lastweek.startdate}
                enddate={lastweek.enddate}
              />
              {daysMenu &&
                daysMenu.map((val, i) => {
                  return getFormattedFoodDetails(val).map((value, keyvalue) => {
                    return (
                      <div className='subscription-box' key={keyvalue}>
                        <MealPlanDetails mealDetails={value} />
                      </div>
                    );
                  });
                })}
            </div>
          </div>
        </Collapse>
      ))}
    </>
  );
};

export default LastWeekPlan;
