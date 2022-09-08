import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  GET_ARTICLE,
  GET_ARTICLE_FAILED,
  GET_ARTICLE_SUCCEEDED
} from "../constants/action-types";
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function removeArticle(payload) {
  return { type: REMOVE_ARTICLE, payload };
}

export function getArticle(payload) {
  return { type: GET_ARTICLE, payload };
}
