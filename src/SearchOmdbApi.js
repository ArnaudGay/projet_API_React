import { useState } from "react";
const { API_KEY } = require("./config.json");

export default function SearchOmdbApi({ transferData }) {
  const [dataApi, setData] = useState();
  const [searchValue, setSearchValue] = useState("");

  function inputChange(event) {
    setSearchValue(event.target.value);
  }

  function handleLeftInput() {
    setData(() => {
      const fetchData = async () => {
        try {
          const urlSearch =
            "http://www.omdbapi.com/" + API_KEY + "s=" + searchValue;
          const responseSearch = await fetch(urlSearch);
          const resultSearch = await responseSearch.json();
          const id = resultSearch.Search[0].imdbID;
          const url = "http://www.omdbapi.com/" + API_KEY + "i=" + id;
          const response = await fetch(url);
          const result = await response.json();
          transferData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, [searchValue]);
  }

  return (
    <div>
      <form className="form" action="/search" method="get">
        <input
          className="input"
          type="text"
          name="movie"
          placeholder="Search for a movie..."
          value={searchValue}
          onChange={inputChange}
          onBlur={handleLeftInput}
        />
      </form>
    </div>
  );
}
