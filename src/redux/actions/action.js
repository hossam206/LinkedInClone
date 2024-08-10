export const SET_USER = "SET_USER";
export const SET_LOADING = "SET_LOADING";
export const GET_ARTICLES = "GET_ARTICLES";
export const SET_PROGRESS = "SET_PROGRESS";
export const setuser = (payload) => {
  return {
    type: SET_USER,
    user: payload,
  };
};

export const SetLoading = (status) => {
  return {
    type: SET_LOADING,
    status: status,
  };
};
export const GetArticles = (payload) => {
  return {
    type: GET_ARTICLES,
    payload: payload,
  };
};

export const SetProgress = (progress) => {
  return {
    type: SET_PROGRESS,
    payload: progress,
  };
};
