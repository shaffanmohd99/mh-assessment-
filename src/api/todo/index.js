import axios from "@/lib/axios";

export const getTodo = async (id) => {
  const response = await axios.get(`/users/${id}/todos`);
  return response;
};
export const editTodo = async (id, data) => {
  const response = await axios.patch(`/todos/${id}`, data);
  return response;
};
export const deleteTodo = async (id) => {
  const response = await axios.delete(`/todos/${id}`);
  return response;
};
export const addTodo = async (data) => {
  const response = await axios.post(`/todos`, data);
  return response;
};
