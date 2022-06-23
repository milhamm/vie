const BOTTOM_NAV_ROUTES = [
  {
    href: "/",
    name: "Home",
    icon: "dashboard",
    show: () => true,
  },
  {
    href: "/lab",
    name: "Lab",
    icon: "forum",
    show: (role) => role === "ADMIN",
  },
  {
    href: "/team",
    name: "Team",
    icon: "team",
    show: () => true,
  },
  {
    href: "/profile",
    name: "Profile",
    icon: "profile",
    show: () => true,
  },
];

export { BOTTOM_NAV_ROUTES };
