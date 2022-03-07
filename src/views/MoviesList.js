import Movie from "./Movie";
import PageWrapper from "./PageWrapper";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

function MoviesList() {

  const [actualPage, setActualPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const TOTAL_PER_PAGE = 5;

  useEffect(() => {
    searchMovies();
  }, [])

  const searchMovies = async () => {
    let url = "https://cors-anywhere.herokuapp.com/https://api.jsonbin.io/b/622499d306182767436e3813/1"

    let response = await fetch(url, {
      "method": 'GET',
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "Origin": 'https://api.jsonbin.io/b/622499d306182767436e3813/1'
      }
    });
    let json = await response.json();
    setMovies(json);
  }

  const getTotalPages = () => {
    let totalMovies = movies.length;
    return Math.ceil(totalMovies / TOTAL_PER_PAGE);
  }

  let moviesPerPage = movies.slice((actualPage - 1) * TOTAL_PER_PAGE, actualPage * 5)

  return (
    <PageWrapper>

      {moviesPerPage.map((movie) => (
        <Movie
          title={movie.title}
          rating={movie.rating}
          director={movie.director}
          stars={movie.stars}
          release={movie.release}
          runtime={movie.runtime}
          img={movie.img}
          plot={movie.plot}
          >
        </Movie>
      ))}
      <Pagination page={actualPage} total={getTotalPages()} onChange={(page) => {
        setActualPage(page)
      }}>
 
      </Pagination>
    </PageWrapper>
  );
}

export default MoviesList;
