import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  GET_ARTICLE,
  GET_ARTICLE_FAILED,
  GET_ARTICLE_SUCCEEDED
} from "../constants/action-types";
const initialState = {
  articles: [{ title: "one", id: "1" }]
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  } else if (action.type === REMOVE_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.filter(function (article) {
        return article.title !== action.payload.title;
      })
    });
  } else if (action.type === GET_ARTICLE_SUCCEEDED) {
    return Object.assign({}, state, {
      articles: action.user.map((el) => {
        return { id: el.population, title: el.name.common };
      })
    });
  }
  return state;
}
export default rootReducer;
