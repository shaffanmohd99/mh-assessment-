import axios from "@/lib/axios";

export const getAllUser = async () => {
  const response = await axios.get(`/users`);
  return response;
};
export const getOneUser = async (id) => {
  const response = await axios.get(`/users/${id}`);
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
