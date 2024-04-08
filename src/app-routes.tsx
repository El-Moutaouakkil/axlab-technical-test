import { withNavigationWatcher } from "./contexts/navigation";
import { HomePage, ProfilePage } from "./pages";

const routes = [

    {
        path: "/flights",
        element: ProfilePage,
    },
    {
        path: "/home",
        element: HomePage,
    },
];

export default routes.map((route) => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path),
    };
});
