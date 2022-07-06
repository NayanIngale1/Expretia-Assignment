import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { jobReducer } from "./JobReducer/JobReducer";
import { userReducer } from "./UserReducer/userReducer";

const rootReducer = combineReducers({
 jobs:jobReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    
  )
);

// store.subscribe(() => console.log(store.getState()));
