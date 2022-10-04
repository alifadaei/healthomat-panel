import { IconList } from "../Components/UI/Icon/Icon";
import { RouteNames } from "./Routes";
export const sidebarContentPatient = [
  { name: "sidebar.dashboard", icon: IconList.Dashboard, path: "/dashboard" },
  { name: "sidebar.profile", icon: IconList.Person, path: "/profile" },
  {
    name: "sidebar.appointments",
    icon: IconList.Calendar,
    path: "/my-appointments",
  },
  {
    name: "sidebar.babies.babies",
    icon: IconList.Baby,
    path: RouteNames.my_babies.root,
    menu: [
      { name: "sidebar.babies.babies", path: RouteNames.my_babies.root },
      { name: "sidebar.babies.new_baby", path: RouteNames.my_babies.new_baby },
    ],
  },
  { name: "sidebar.reminder", icon: IconList.Clock },
  { name: "sidebar.cities", icon: IconList.PinOutline },
  { name: "sidebar.lab_results", icon: IconList.ClipBoard },
  { name: "sidebar.health_calculator", icon: IconList.Heart },
];

export const bottom_icons = [
  { name: "sidebar.exit", icon: IconList.Exit, path: RouteNames.logout },
  {
    name: "sidebar.settings",
    icon: IconList.Settings,
    path: RouteNames.profile,
  },
  { name: "sidebar.profile", icon: IconList.Person, path: RouteNames.profile },
];
