import axiosInstance from "app/axios/AxiosInstance";


// Create
export const createData = async (data) => {
  try {
    const response = await axiosInstance.post("/data", data);
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};

// Read
export const getData = async () => {
  try {
    const response = await axiosInstance.get("/data");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Update
export const updateData = async (id, newData) => {
  try {
    const response = await axiosInstance.put(`/data/${id}`, newData);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

// Delete
export const deleteData = async (id) => {
  try {
    const response = await axiosInstance.delete(`/data/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
