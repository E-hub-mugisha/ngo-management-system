import axios from "axios";

const API_URL = "YOUR_GOOGLE_SCRIPT_URL";

export const getProjects = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};