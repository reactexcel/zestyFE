/////////////////////////////*****GET DATA*****///////////////////////////////////

export const isAccessToken = () => {
  if (localStorage.getItem("accessToken")) return true;
  return false;
};

//Get Data
export const getData = (data) => {
  if (localStorage.getItem(`${data}`)) {
    return JSON.parse(localStorage.getItem(`${data}`));
  }
};

/////////////////////////////*****SET DATA*****///////////////////////////////////

export const setAccessToken = (response) => {
  localStorage.setItem("accessToken", JSON.stringify(response.data.token));
};

export const setUserId = (response) => {
  localStorage.setItem("userid", JSON.stringify(response.data.id));
};

export const setData = async (data, type) => {
  await localStorage.setItem(`${type}`, JSON.stringify(data));
};

export const removeData = async (key) => {
  await localStorage.removeItem(key);
};

//Remove all day data
export const allDayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const removeAllDaysData = () => {
  allDayList.map((val) => {
    localStorage.removeItem(`${val}`);
  });
};

/////////////////////////***Clear All Data ***///////////////////

export const clearLocalStorage = () => {
  localStorage.clear();
};
