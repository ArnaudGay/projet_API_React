import React, { useState } from "react";
import Table from "./Table";
import SearchOmdbApi from "./SearchOmdbApi";

export default function Display() {
  const [dataToPass] = useState({
    Title: "Polisse",
    Year: "2011",
    Rated: "Not Rated",
    Released: "19 Oct 2011",
    Runtime: "127 min",
    Genre: "Crime, Drama",
    Director: "Maïwenn",
    Writer: "Maïwenn, Emmanuelle Bercot",
    Actors: "Karin Viard, JoeyStarr, Marina Foïs",
    Plot: "A journalist covering police assigned to a juvenile division enters into an affair with one of her subjects.",
    Language: "French, Italian, Romanian, Arabic",
    Country: "France",
    Awards: "7 wins & 22 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjQzNzUwNTA3OF5BMl5BanBnXkFtZTcwNDYzNjk2Nw@@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.3/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "86%",
      },
      {
        Source: "Metacritic",
        Value: "74/100",
      },
    ],
    Metascore: "74",
    imdbRating: "7.3",
    imdbVotes: "15,216",
    imdbID: "tt1661420",
    Type: "movie",
    DVD: "13 Mar 2017",
    BoxOffice: "$211,440",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  });
  const [dataApi, setDataApi] = useState();
  const [isWin, setIsWin] = useState(false);
  var isValid = true;

  function compareArray(props1, props2) {
    const array1 = props1.split(", ");
    const array2 = props2.split(", ");
    const commonValue = [];
    for (const value of array2) {
      if (!array1.includes(value)) {
        isValid = isValid && false;
      } else {
        commonValue.push(value);
      }
    }
    return isValid;
  }

  function checkDiff(dataToPass, dataApi) {
    if (dataToPass.Title === dataApi.Title) {
      isValid = isValid && true;
    } else {
      isValid = isValid && false;
    }
    if (dataToPass.Director === dataApi.Director) {
      isValid = isValid && true;
    } else {
      isValid = isValid && false;
    }
    if (dataToPass.Year === dataApi.Year) {
      isValid = isValid && true;
    } else {
      isValid = isValid && false;
    }
    if (dataToPass.Runtime === dataApi.Runtime) {
      isValid = isValid && true;
    } else {
      isValid = isValid && false;
    }
    if (compareArray(dataToPass.Actors, dataApi.Actors)) {
      isValid = isValid && true;
    } else {
      isValid = isValid && false;
    }
    if (compareArray(dataToPass.Language, dataApi.Language)) {
      isValid = isValid && true;
    } else {
      isValid = isValid && false;
    }
    console.log(isValid);
    if (isValid) {
      setIsWin(true);
    }
  }

  return (
    <div className="Display">
      <h1>Guess the movie</h1>
      <Table tableContent={dataToPass} />
      <SearchOmdbApi transferData={setDataApi} />
      <button
        onClick={() => {
          checkDiff(dataToPass, dataApi);
        }}
      >
        Check
      </button>

      {isWin && (
        <div>
          <div>Well play! You succes this game!</div>
          <button onClick={() => {setIsWin(false), }}>Retry</button>
        </div>
      )}
    </div>
  );
}
