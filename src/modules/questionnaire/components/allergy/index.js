import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingState from "src/components/common/spinner";
import { allergiesListRequest } from "src/modules/questionnaire/redux/action";
import { setData } from "src/Utils/localStorageUtil";
import AllergyLists from "src/modules/questionnaire/components/allergy/allergyList";

const Allergy = () => {
  const [allergyList, setAllergyList] = useState({});
  const dispatch = useDispatch();
  const allergiesListStatus = useSelector((state) => state.AllergiesList);

  useEffect(() => {
    dispatch(allergiesListRequest());
    setData(5, "stepperValue");
  }, []);

  useEffect(() => {
    if (allergiesListStatus.data) {
      setAllergyList(allergiesListStatus);
    }
  }, [allergiesListStatus]);

  return (
    <>
      <div className='container-sp36'>
        <p className='select-y36 text-center mb-5'>
          What allergies do you have, if any ?
        </p>
        {allergiesListStatus.isLoading && <LoadingState />}
        {allergiesListStatus.isSuccess && <AllergyLists title={allergyList} />}
      </div>
    </>
  );
};
export default Allergy;
