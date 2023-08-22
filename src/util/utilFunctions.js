export const getRandomDateAndTime = () => {
  let day = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
  let month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  let year = Math.floor(Math.random() * (23 - 0 + 1)) + 0;
  if (year < 10) {
    year = `0${year}`;
  }

  let date = `${day}/${month}/${year}`;

  let hour = Math.floor(Math.random() * (23 - 0 + 1)) + 0;
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = Math.floor(Math.random() * (59 - 0 + 1)) + 0;
  if (minute < 10) {
    minute = `0${minute}`;
  }

  let time = `${hour}:${minute}`;
  return `${date} at ${time}`;
};

export const getCurrentUser = () =>
  JSON.parse(localStorage.getItem("currentUser"));
