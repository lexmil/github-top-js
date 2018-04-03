import moment from 'moment';

export const FETCH_JSON_DATA = 'FETCH_JSON_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAILED';

const initialState = {
  isFetch: false,
  data: {}
};

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_JSON_DATA:
      return {
        ...state,
        isFetch: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetch: false,
        data: action.payload
      };
    case FETCH_FAIL:
      return {
        ...state,
        isFetch: false
      };
    default:
      return state;
  }
}

function fetchJsonData() {
  return {
    type: FETCH_JSON_DATA
  }
}

function fetchReposSuccess(payload) {
  return {
    type: FETCH_SUCCESS,
    payload
  }
}

function fetchReposFail() {
  return {
    type: FETCH_FAIL
  }
}

export function fetchRepos() {
  const MONTH_AGO = moment().subtract(1, 'months').format("YYYY-MM-DD");
  const URL = `https://api.github.com/search/repositories?q=created:">${MONTH_AGO}"language:javascript&sort=stars&order=desc`;

  return (dispatch) => {
    dispatch(fetchJsonData());
    fetch(URL, { method: 'GET'})
      .then(response => response.json())
      .then(data => {
        dispatch(fetchReposSuccess(data))
      })
      .catch(() => dispatch(fetchReposFail()));
  }
}
