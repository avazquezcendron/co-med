export const SET_RIGHT_SIDEBAR_ENTITY = 'rightSidebar/setEntity';
const initial_state = {
  entity: '',
};

export const RightSidebarReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SET_RIGHT_SIDEBAR_ENTITY:
      return { ...state, entity: action.payload };

    default:
      return { ...state };
  }
};
