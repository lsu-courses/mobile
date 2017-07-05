import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { apiMiddleware } from "redux-api-middleware"
import reducers from "./reducers"

const enhancer = compose(applyMiddleware(thunk, apiMiddleware))

export default function configureStore(initialState = {}) {
  return createStore(reducers, initialState, enhancer)
}
