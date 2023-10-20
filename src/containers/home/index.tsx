import React, { memo, useEffect, useState } from "react";
import Card from "../../component/card";
import "./index.scss";
import { moivesService } from "../../services/movieLists";
import LoadingIcon from "../../component/loading";
import ToastError from "../../component/notification/ToastError";
import { Movie } from "../../types/movieType";

export const Home = () => {
  const [filmPlaying, setFilmPlaying] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [networkError, setNetworkError] = useState<string | null>(null);

  const getListMovies = async () => {
    try {
      setIsLoading(true);
      const resp = await moivesService.getListMoviesNowPlaying();
      setFilmPlaying(resp.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      handleNetworkError(
        "Could not connect to server. Please check your network connection."
      );
      setIsLoading(false);
    }
  };

  const getListMoviesTopRate = async () => {
    try {
      setIsLoading(true);
      const resp = await moivesService.getListMoviesTopRated();
      setFilmPlaying(resp.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      handleNetworkError(
        "Could not connect to server. Please check your network connection."
      );
      setIsLoading(false);
    }
  };
  const getListMoviesPopular = async () => {
    try {
      setIsLoading(true);
      const resp = await moivesService.getListMoviesPopular();
      setFilmPlaying(resp.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      handleNetworkError(
        "Could not connect to server. Please check your network connection."
      );
      setIsLoading(false);
    }
  };

  const searchMoive = async (params: string) => {
    try {
      setIsLoading(true);
      const resp: any = await moivesService.searchMoiveName({
        query: params,
      });
      setFilmPlaying(resp.data.results);
      setSearch("");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      handleNetworkError(
        "Could not connect to server. Please check your network connection."
      );
      setIsLoading(false);
    }
  };

  const handleNetworkError = (errorMessage: string) => {
    setNetworkError(errorMessage);
  };

  useEffect(() => {
    getListMovies();
  }, []);
  return (
    <div>
      <header className="headerHome">
        <nav>
          <div className="logo">
            <a href="/">Elotus</a>
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            ☰
          </label>
          <ul className="menu">
            <li>
              <button className="btn-play" onClick={getListMovies}>
                Now Playing
              </button>
              {networkError && <ToastError errorMessage={networkError} />}
            </li>
            <li>
              <button className="btn-top-rate" onClick={getListMoviesTopRate}>
                Top rated
              </button>
              {networkError && <ToastError errorMessage={networkError} />}
            </li>
            <li>
              <button className="btn-popular" onClick={getListMoviesPopular}>
                Popular{" "}
              </button>
              {networkError && <ToastError errorMessage={networkError} />}
            </li>
            <li>
              <input
                className="input-search"
                type="text"
                placeholder="Search moive name ... "
                onChange={(e: any) => setSearch(e.target.value)}
                value={search}
              />
            </li>
            <li>
              <button
                className="btn-search"
                onClick={() => {
                  if (search != "") {
                    searchMoive(search);
                  }
                }}
              >
                search
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        {isLoading ? (
          <LoadingIcon />
        ) : (
          <div className="blog-home">
            {filmPlaying?.map((e: Movie) => (
              <Card data={e} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Home);
