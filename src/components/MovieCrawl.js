import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const crawlAnimation = keyframes`
  0% {
    top: 0;
    transform: rotateX(20deg) translateZ(0);
  }
  100% { 
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
`;

const MovieCrawlStyle = styled.div`
  max-width: 400px;
  margin-top: 32px;

  .movie-info {
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    transform: perspective(400px) rotateX(25deg);
    transform-origin: 50% 100%;
    text-align: center;
    position: absolute;
    font-weight: bold;
    overflow: hidden;
    font-size: 350%;
    height: 800px;
    width: 18em;
    bottom: -50px;
    left: 15%;

    @media (max-width: 600px) {
      bottom: -150px;
      left: -25%;
    }

    &:before {
      position: absolute;
      content: " ";
      bottom: 60%;
      left: 0;
      right: 0;
      top: 0;
    }

    &__crawl {
      animation: ${crawlAnimation} 15s linear;
      position: absolute;
      top: 100%;
      color: #f1e324;
    }
  }
`;

class MovieCrawl extends React.Component {
  render() {
    const { title, opening_crawl } = this.props;
    return (
      <MovieCrawlStyle>
        <div className="movie-info">
          <div className="movie-info__crawl">
            <h1 className="movie-info__crawl__title">{title}</h1>
            <p className="movie-info__crawl__text">{opening_crawl}</p>
          </div>
        </div>
      </MovieCrawlStyle>
    );
  }
}

MovieCrawl.defaultProps = {
  title: "",
  opening_crawl: ""
};

MovieCrawl.propTypes = {
  title: PropTypes.string,
  opening_crawl: PropTypes.string
};

export default MovieCrawl;
