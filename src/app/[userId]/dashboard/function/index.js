import { getAllPostFromOneUser, getPostComment } from "@/api/post";

const GetAverageCommentPerPost = async (userId) => {
  try {
    const response = await getAllPostFromOneUser(userId);
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const postListData = response.data;

    // get an array of post id
    const postListDataId = postListData?.map((item) => item.id);

    let totalComments = 0;
    let postData = [];
    for (const postId of postListDataId) {
      try {
        const response = await getPostComment(postId);
        totalComments += response.data.length;
        postData = [
          ...postData,
          { postId: postId, comment: response.data.length },
        ];
      } catch (error) {
        console.error(error);
        break;
      }
    }
    const average = totalComments / postListDataId.length;
    const data = {
      average_comment_per_post: average,
      total_comment: totalComments,
      total_post: postListDataId.length,
      postData,
    };
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default GetAverageCommentPerPost;
