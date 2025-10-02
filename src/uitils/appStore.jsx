import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import feedSlice from "./feedSlice";
import connectionsSlice from "./connectionsSlice";
import requestsSlice from "./requestSlice"

const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: feedSlice,
    connection: connectionsSlice,
    request: requestsSlice
  }
})

export default appStore;