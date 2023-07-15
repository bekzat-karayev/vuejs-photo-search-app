import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://api.unsplash.com/',
  });

axiosClient.defaults.headers.common['Authorization'] = 'Client-ID r5sNVfjaXoFUMNfPC4HD0GdnGuphYPPUXuhvD7korKQ';

export default axiosClient;