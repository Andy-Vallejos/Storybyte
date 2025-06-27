import { Outlet } from "react-router-dom"
import { TopBar, NavMobile } from "/src/components"

export default function Layout() {
    return (
        <>
            <TopBar />
            <Outlet /><br /><br /><br />
            <NavMobile />
        </>
    )
}