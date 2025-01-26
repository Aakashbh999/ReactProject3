import { toast } from "react-toastify";
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
export const postPublicData = async (url, values) => {
  try {
    const response = await getPublicRequest.post(url, values);
    toast.success(response.data.msg);
    return response.data;
  } catch (error) {
    console.log("Error has been occur!");
    toast.error(error.response.data.msg);
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
export const putPrivatesData = async (url, value) => {
  try {
    const response = await getPrivateRequest.put(url, value);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    console.log("Error has been occur!");
    toast.error(error.response.data.extraDetails);

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
