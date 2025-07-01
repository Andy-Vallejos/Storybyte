import { Outlet } from "react-router-dom"
import { TopBar, NavMobile } from "/src/components"
import "./Layout.css"


export function Layout() {
    return (
        <div className="layout">
            <TopBar />
            <div className="layout__content">
                <Outlet />
                <NavMobile />
            </div>
        </div>
    )
}