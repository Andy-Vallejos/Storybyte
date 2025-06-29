import { Outlet } from "react-router-dom"
import { TopBar, NavMobile } from "/src/components"


export function Layout() {
    return (
        <div className="layout">
            <TopBar />
            <Outlet />
            <NavMobile />
        </div>
    )
}