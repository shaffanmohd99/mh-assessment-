import axios from "@/lib/axios";

export const getAllPostFromOneUser = async (id) => {
  const response = await axios.get(`/users/${id}/posts`);
  return response;
};
export const getPostComment = async (id) => {
  const response = await axios.get(`/posts/${id}/comments`);
  return response;
};
