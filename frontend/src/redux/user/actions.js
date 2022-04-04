export const USER_LOGIN_WATCHER = 'user/loginWatcher'
export const USER_LOGIN_REQUEST = 'user/loginRequest'
export const USER_LOGIN_SUCCESS = 'user/loginSuccess'
export const USER_LOGIN_FAILURE = 'user/loginFailure'

export const USER_GET_ALL_WATCHER = 'user/userGetAllWatcher'
export const USER_GET_ALL_REQUEST = 'user/userGetAllRequest'
export const USER_GET_ALL_SUCCESS = 'user/userGetAllSuccess'

export const USER_SAVE_WATCHER = 'user/userSaveWatcher'
export const USER_SAVE_REQUEST = 'user/userSaveRequest'
export const USER_SAVE_SUCCESS = 'user/userSaveSuccess'
export const USER_SAVE_FAILURE = 'user/userSaveFailure'

export const USER_LOGOUT = 'user/logout'


export const userLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  }
}
export const userLoginSuccess = (user) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: user,
  }
}

export const userLoginFailure = (error) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: error,
  }
}

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  }
}

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('loggedUser')
  dispatch(userLogout())
  // dispatch(resetPatientsList())
  document.location.href = '/user/auth'
}


export const userGetAllWatcher = (user) => {
  return {
    type: USER_GET_ALL_WATCHER,
    payload: user
  };
};

export const userGetAllRequest = () => {
  return {
    type: USER_GET_ALL_REQUEST,
  }
}
export const userGetAllSuccess = (users) => {
  return {
    type: USER_GET_ALL_SUCCESS,
    payload: users,
  }
}

export const userSavetWatcher = (user) => {
  return {
    type: USER_SAVE_WATCHER,
    payload: user
  };
};

export const userSaveRequest = () => {
  return {
    type: USER_SAVE_REQUEST,
  }
}
export const userSaveSuccess = (user) => {
  return {
    type: USER_SAVE_SUCCESS,
    payload: user,
  }
}

export const userSaveFailure = (error) => {
  return {
    type: USER_SAVE_FAILURE,
    payload: error,
  }
}