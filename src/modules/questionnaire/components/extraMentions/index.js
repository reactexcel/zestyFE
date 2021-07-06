import React, { useEffect } from "react";
import { questionniarSelectionRequest} from 'src/modules/questionnaire/redux/action'
import { useDispatch, useSelector } from "react-redux";
import { setData } from "src/Utils/localStorageUtil";
import "./index.scss";

function ExtraMentions() {
  const dispatch = useDispatch();
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);

  useEffect(() => {
    setData(6, "stepperValue");
  }, []);

  const handleChange = (e) => {
    let extraMention = QuestionnairesStatus?.extraMention
      ? QuestionnairesStatus?.allergens
      : "";
    if (extraMention.indexOf(e.currentTarget.value) >= 0) {
      extraMention = [...extraMention];
      extraMention = extraMention.filter(
        (value) => value !== e.currentTarget.value
      );
    } else {
      extraMention = [...extraMention, ...[e.currentTarget.value]];
    }
    dispatch(
      questionniarSelectionRequest({
        selectionType: "extraMention",
        value: e.currentTarget.value,
      })
    );
  };

  return (
    <>
      <div className='container-sp38'>
        <p className='select-y38 text-center'>
          Is There Anything Else You Would Like To Mention ?
        </p>
        <input
          type='text'
          className='txt-ar-38'
          placeholder='E.G ; Less Salt Or Allergic To Some Specific Food.'
          value={QuestionnairesStatus?.extraMention}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
}
export default ExtraMentions;
