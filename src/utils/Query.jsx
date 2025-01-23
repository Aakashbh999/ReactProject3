import { getPublicRequest, getPrivateRequest } from "./axios";

export const getPublicData = async (url, params = {}) => {
  try {
    const response = await getPublicRequest.get(url, { params });
    return response.data;
  } catch (error) {
    console.log("Error has been occur!");
    throw error;
  }
};
export const postPublicData = async (url, params = {}) => {
  try {
    const response = await getPublicRequest.post(url, { params });
    return response.data;
  } catch (error) {
    console.log("Error has been occur!");
    throw error;
  }
};
export const putPublicData = async (url, params = {}) => {
  try {
    const response = await getPublicRequest.put(url, { params });
    return response.data;
  } catch (error) {
    console.log("Error has been occur!");
    throw error;
  }
};
export const getPrivatesData = async (url, params = {}) => {
  try {
    const response = await getPrivateRequest.get(url, { params });
    return response.data;
  } catch (error) {
    console.log("Error has been occur!");
    throw error;
  }
};
export const postPrivatesData = async (url, params = {}) => {
  try {
    const response = await getPrivateRequest.post(url, { params });
    return response.data;
  } catch (error) {
    console.log("Error has been occur!");
    throw error;
  }
};
export const putPrivatesData = async (url, params = {}) => {
  try {
    const response = await getPrivateRequest.put(url, { params });
    return response.data;
  } catch (error) {
    console.log("Error has been occur!");
    throw error;
  }
};
export const deleteData = async (url, params = {}) => {
  try {
    const response = await getPrivateRequest.delete(url, { params });
    return response.data;
  } catch (error) {
    console.log("Error has been occur!");
    throw error;
  }
};
