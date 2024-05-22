import axios from "@/lib/axios";

export const getAllUser = async (take, page) => {
  const response = await axios.get(`/users?page=1&per_page=25`);
  return response;
};
// export const postBank = async (data) => {
//   const response = await axios.post(`/client/banks`, data);
//   return getData(response);
// };
// export const patchBank = async (id, data) => {
//   const response = await axios.patch(`/client/banks/${id}`, data);
//   return getData(response);
// };
// export const deleteBank = async (id) => {
//   const response = await axios.delete(`/client/banks/${id}`);
//   return getData(response);
// };
