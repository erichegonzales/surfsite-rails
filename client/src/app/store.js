import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter_example/counterSlice";
import renderReducer from "../features/counter_example/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    render: renderReducer,
  },
});
