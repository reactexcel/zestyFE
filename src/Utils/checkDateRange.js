export const checkDateRange = (startdate, enddate) => {
  let response = false;

  let todayDate = new Date();
  if (todayDate < new Date(enddate) && todayDate > new Date(startdate)) {
    response = true;
  }
  return response;
};

export const formatDate = (date) => {
  let formatdated = date.split("T");
  formatdated = formatdated[0].split("-");
  return `${formatdated[2]}/${formatdated[1]}/${formatdated[0]}`;
};
