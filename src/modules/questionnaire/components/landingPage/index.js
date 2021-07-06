import React, { useEffect } from "react";
import QuestionnairesDetails from "./questionniareDetails";
import { setData } from "src/Utils/localStorageUtil";

export default function QuestionniareLandingPage() {
  useEffect(() => {
    setData(0, "stepperValue");
  }, []);

  return (
    <div>
      <QuestionnairesDetails />
    </div>
  );
}
