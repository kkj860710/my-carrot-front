import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import menuReducer from "./slices/menuSlice";  // 예제 reducer

export const makeStore = () =>
    configureStore({
        reducer: {
            menu: menuReducer,
        },
    });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// Next.js에서 Redux를 SSR과 함께 사용하기 위해 `wrapper` 생성
export const wrapper = createWrapper<AppStore>(makeStore);
