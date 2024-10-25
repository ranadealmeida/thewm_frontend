import axios from 'axios';

const API_URL = '/api/items/';

export const fetchWardrobeItems = () => axios.get(API_URL);
export const addItem = (itemData) => axios.post(API_URL, itemData);
export const updateItem = (id, itemData) => axios.put(`${API_URL}${id}/`, itemData);
export const deleteItem = (id) => axios.delete(`${API_URL}${id}/`);