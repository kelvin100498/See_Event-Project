const initialState = {
  startingSoon: [],
  designEvents: [],
  exploreEvent: [],
  detailEvent: {},
  comment: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STARTING_SOON':
      return {
        ...state,
        startingSoon: action.payload,
      };

    case 'SET_DESIGN_EVENTS':
      return {
        ...state,
        designEvents: action.payload,
      };
    case 'SET_DETAIL_EVENT':
      return {
        ...state,
        detailEvent: action.payload,
      };
    case 'SET_COMMENT':
      return {
        ...state,
        comment: action.payload,
      };
    case 'SET_EXPLORE_EVENT':
      return {
        ...state,
        exploreEvent: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
