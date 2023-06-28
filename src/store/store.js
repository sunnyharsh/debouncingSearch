import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// Saga import here
// import saga from "./sagas";

//Reducers import here
import homeReducer from "./features/homeSlice";
import resturantDetailReducer from "./features/resturantDetailSlice";

//Saga import here
import sagas from "./sagas";

//create saga
let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    home: homeReducer,
    resturantDetail: resturantDetailReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
