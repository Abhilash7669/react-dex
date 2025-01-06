import { NavLink } from "react-router";
import classes from "./route-active-links.module.css";

export default function RouteActiveLinks({ children, to }) {

    return(
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? classes.primary_active_link : classes.primary_inactive_link}
        >
            {children}
        </NavLink>
    )

}