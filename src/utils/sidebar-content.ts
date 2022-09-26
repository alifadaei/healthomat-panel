import { IconList } from "../Components/UI/Icon/Icon";
export const sidebarContentPatient = [
  { name: "sidebar.dashboard", icon: IconList.Dashboard, path: "/dashboard" },
  { name: "sidebar.profile", icon: IconList.Person, path: "/profile" },
  {
    name: "sidebar.appointments",
    icon: IconList.Calendar,
    path: "/my-appointments",
  },
  { name: "sidebar.babies", icon: IconList.Baby, path: "my-babies" },
  { name: "sidebar.reminder", icon: IconList.Clock },
  { name: "sidebar.cities", icon: IconList.PinOutline },
  { name: "sidebar.lab_results", icon: IconList.ClipBoard },
  { name: "sidebar.health_calculator", icon: IconList.Heart },
];

export const bottom_icons = [
  { name: "sidebar.exit", icon: IconList.Exit, path: "/logout" },
  { name: "sidebar.settings", icon: IconList.Settings, path: "/profile" },
  { name: "sidebar.profile", icon: IconList.Person, path: "/profile" },
];
