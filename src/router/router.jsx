import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Root from "./Root.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
])

