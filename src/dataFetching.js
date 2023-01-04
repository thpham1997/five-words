const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RapidAPI_Key,
    "X-RapidAPI-Host": process.env.REACT_APP_RapidAPI_Host,
  },
};

const fetchWord = (word) =>
  fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, options)
    .then((response) => response.json())
    .catch((err) => err);
const fetchRandom = () =>
  fetch(`https://wordsapiv1.p.rapidapi.com/words/?random=true`, options)
    .then((response) => response.json())
    .catch((err) => err);

export { fetchWord, fetchRandom };
