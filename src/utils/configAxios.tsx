import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";

export const AxiosConfig = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGU0Nzc3MTA5MmVhOTMwMmVhMDU2MDgyNDBmMzVkNSIsInN1YiI6IjY1MzBjNzYzNTFhNjRlMDEwYThiNGVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GR53po4ZFVDsqjVj4Q7CXZlR7GwRbsj7MyqiW1PKB7M",
  },
});

export default AxiosConfig;
