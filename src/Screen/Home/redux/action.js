export const getStartingSoon = () => {
  return {
    type: 'GET_STARTING_SOON',
  };
};

export const setStartingSoon = payload => ({
  type: 'SET_STARTING_SOON',
  payload,
});

export const getDesignEvents = () => {
  return {
    type: 'GET_DESIGN_EVENTS',
  };
};

export const setDesignEvents = payload => ({
  type: 'SET_DESIGN_EVENTS',
  payload,
});

export const setDetailEvent = payload => ({
  type: 'SET_DETAIL_EVENT',
  payload,
});

export const getComment = () => {
  return {
    type: 'GET_COMMENT',
  };
};

export const setComment = payload => ({
  type: 'SET_COMMENT',
  payload,
});

export const getCategoryByType = catType => {
  return {
    type: 'GET_CATEGORY_BY_TYPE',
    catType,
  };
};
export const setExploreEvent = payload => {
  return {
    type: 'SET_EXPLORE_EVENT',
    payload,
  };
};
