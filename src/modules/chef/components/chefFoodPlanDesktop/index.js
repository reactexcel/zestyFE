import React from "react";
import TableHeader from "./tableHeader";
import FoodPlanDetail from "./foodPlanDetail";
import { updatedMealTime } from "src/Utils/chefPlan";
import "./index.scss";

function ChefPlanTableDesktop({ checfFoodPlanData }) {
  return (
    <div className='chef-food-plan-table-desktop'>
      <table className='table'>
        <thead>
          <tr>
            <th className='text-center heading_1'>Day</th>
            <th className='heading_2'>
              <div className='d-flex'>
                <td className='time_prepared_row'>
                  <th className='time_prepared'>
                    Time food should be prepared by
                  </th>
                </td>
                <TableHeader />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(checfFoodPlanData).map((val, i) => (
            <tr className='chef_table_body' key={i}>
              <td rowSpan='' className='text-center chef_table_body_day'>
                {val}
              </td>
              <td className='chef_table_body_item'>
                {Object.keys(checfFoodPlanData[val]).map((el) => (
                  <div className='d-flex' key={el} >
                    <td className='text-center mealtiming'>
                      {el}
                    </td>
                    <td className='chef_table_body_row'>
                      {checfFoodPlanData[val][el].map((kl) => (
                        <div className='d-flex' key={kl.Customer_Name}>
                          <FoodPlanDetail
                            customerName={kl.Customer_Name}
                            dishName={kl.dish}
                            adultCount={kl.adult_count}
                            childrenCount={kl.children_count}
                            time={updatedMealTime(kl.Timing)}
                          />
                        </div>
                      ))}
                    </td>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChefPlanTableDesktop;
