// frontend/src/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchUsers = () => axios.get(`${API_URL}/users`);
export const createUser = (userData) =>
  axios.post(`${API_URL}/users`, userData);
export const fetchRoles = () => axios.get(`${API_URL}/roles`);
export const createRole = (roleData) =>
  axios.post(`${API_URL}/roles`, roleData);
