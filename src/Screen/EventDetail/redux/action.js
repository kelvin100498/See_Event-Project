export const postComment = payload => {
  return {
    type: 'POST_COMMENT',
    payload,
  };
};
