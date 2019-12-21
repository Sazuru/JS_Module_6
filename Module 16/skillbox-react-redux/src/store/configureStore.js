import { createStore } from "redux";
import comments from "../reducers";

export const store = createStore(comments);
