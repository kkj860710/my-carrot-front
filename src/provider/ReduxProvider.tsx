 "use client"; // 클라이언트에서만 실행

import { Provider } from "react-redux";
import { makeStore } from "@/redux/store";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={makeStore()}>{children}</Provider>;
}
