import axios from "axios";



const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

axiosInstance.interceptors.response.use(
  (response) => {



    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {

    }
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    );
  }
);

axiosInstance.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => Promise.reject(error)
)

export default axiosInstance;
