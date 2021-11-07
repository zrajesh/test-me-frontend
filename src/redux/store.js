
import {createStore} from "redux";
// Import root-reducer
import rootReducer from "./root-reducer";

const store = createStore(rootReducer);

export default store;
