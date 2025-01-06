import { Outlet } from "react-router";
import Header from "../header/header";


export default function RootLayout() {
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}