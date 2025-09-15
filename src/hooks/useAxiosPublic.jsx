import axios from "axios";

const axiosPublic = axios.create({
  baseURL: " https://serverw1.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

// https://serverw1.vercel.app
