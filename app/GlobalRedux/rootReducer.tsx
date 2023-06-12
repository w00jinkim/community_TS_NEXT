import { change, booleaner } from "./Features/counter/counterSlice";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  change,
  booleaner,
});

export default rootReducer;
