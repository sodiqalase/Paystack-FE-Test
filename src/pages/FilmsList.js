import React from "react";
import Spinner from "../components/Spinner";
import FilmsDropdown from "../components/FilmsDropdown";
import MovieCrawl from "../components/MovieCrawl";
import Error from "../components/Error";
import { FilmsListStyle } from "./FilmsListStyle";
import { CharactersTable } from "../components/Table";
import {
  getDateInMilliseconds,
  GENDER_FILTER_OPTIONS,
  BASEURL
} from "../utils";

class FilmsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      charactersList: [],
      tempCharacters: [],
      selectedFilm: {},
      loading: false,
      error: false
    };
  }
  componentDidMount() {
    this.getFilms();
  }
  getFilms = async () => {
    this.setState({
      loading: true,
      error: false
    });
    try {
      let response = await fetch(BASEURL);
      let { results } = await response.json();
      this.setState({
        films: this.getDropdownData(results),
        loading: false,
        error: false
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: true
      });
    }
  };
  onFilmSelect = async id => {
    if (id) {
      this.setState({
        loading: true,
        error: false,
        charactersList: [],
        tempCharacters: []
      });
      try {
        let response = await fetch(`${BASEURL}/${id}`);
        let { title, opening_crawl, characters } = await response.json();
        this.setState({
          selectedFilm: { title, opening_crawl, characters },
          loading: false,
          error: false
        });
        this.getCharactersData(characters);
      } catch (error) {
        this.setState({
          loading: false,
          error: true
        });
      }
    }
  };
  getDropdownData = (films = []) => {
    return films
      .sort(
        (a, b) =>
          getDateInMilliseconds(a.release_date) -
          getDateInMilliseconds(b.release_date)
      )
      .map(({ title }, i) => ({ label: title, value: i + 1 }));
  };
  getCharactersData = characters => {
    if (characters) {
      characters.forEach(async character => {
        let response = await fetch(character);
        let data = await response.json();
        this.setState(({ charactersList }) => ({
          charactersList: [...charactersList, data],
          tempCharacters: [...charactersList, data]
        }));
      });
    }
  };
  onFilter = gender => {
    const { tempCharacters } = this.state;
    if (gender && gender !== "N/A") {
      const filtered = tempCharacters.filter(
        ({ gender: characterGender }) =>
          characterGender.toLowerCase() === gender
      );
      this.setState({
        charactersList: filtered
      });
    } else {
      this.setState({
        charactersList: tempCharacters
      });
    }
  };
  render() {
    const {
      loading,
      films,
      selectedFilm,
      charactersList,
      error,
      tempCharacters
    } = this.state;
    const selectedFilmIsEmpty = Object.keys(selectedFilm).length > 0;
    return (
      <FilmsListStyle>
        <div className="logo-container">
          <img src="static/img/Star_Wars_Logo.png" alt="star-wars-logo" />
        </div>
        {films.length > 0 && (
          <FilmsDropdown
            marginTop="32px"
            options={films}
            onChange={this.onFilmSelect}
            placeholder="Choose your favorite eposide"
          />
        )}
        {selectedFilmIsEmpty && !loading && <MovieCrawl {...selectedFilm} />}
        {tempCharacters.length > 0 && !loading && (
          <div className="characters-list">
            <div className="characters-list__filter">
              <FilmsDropdown
                options={GENDER_FILTER_OPTIONS}
                onChange={this.onFilter}
                placeholder="Filter list by gender"
              />
            </div>
            <CharactersTable
              data={charactersList}
              className="characters-list__table"
            />
          </div>
        )}
        {error && (
          <div className="error-section">
            <Error />
          </div>
        )}
        {loading && (
          <div className="loading-spinner">
            <Spinner size={32} />
          </div>
        )}
      </FilmsListStyle>
    );
  }
}

export default FilmsList;
