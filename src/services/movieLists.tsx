import { AxiosResponse } from "axios";
import AxiosConfig from "../utils/configAxios";

const API = {
  now_playing: "movie/now_playing",
  pupular: "movie/popular",
  detail: "movie/",
  top_rated: "movie/top_rated",
  search: "/search/movie",
};

export const moivesService = {
  getListMoviesNowPlaying: async () => {
    const resp = await AxiosConfig.get(API.now_playing);
    return resp;
  },
  getListMoviesTopRated: async () => {
    const resp = await AxiosConfig.get(API.top_rated);
    return resp;
  },
  getListMoviesPopular: async () => {
    const resp = await AxiosConfig.get(API.pupular);
    return resp;
  },

  searchMoiveName: async (params: any) => {
    const resp = await AxiosConfig.get(API.search, {
      params,
    });
    return resp;
  },
  getMoviesDetail: async (id: string) => {
    const resp = await AxiosConfig.get(`${API.detail}${id}`);
    return resp;
  },
};
