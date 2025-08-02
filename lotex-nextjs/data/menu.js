export const menuItems = [
  {
    label: "HOME",

    subMenu: [
      { label: "Home 1", href: "/" },
      { label: "Home 2", href: "/home-2" },
      { label: "Home 3", href: "/home-3" },
    ],
  },
  {
    label: "CONTEST",

    subMenu: [
      { label: "Contest", href: "/contest" },
      { label: "Contest Details", href: "/contest-details/1" },
    ],
  },
  {
    label: "PAGE",

    subMenu: [
      { label: "About Us", href: "/about-us" },
      { label: "Lottery Results", href: "/lottery-results" },
      { label: "Affiliate", href: "/affiliate" },
      { label: "How To Work", href: "/how-to-work" },
      { label: "Winner", href: "/winner-list" },
      { label: "Faq", href: "/faq" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    label: "BLOG",

    subMenu: [
      { label: "Blog Grid", href: "/blog-grid" },
      { label: "Blog List", href: "/blog-list" },
      { label: "Blog Single", href: "/blog-single/1" },
    ],
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

export const dashboardMenuItems = [
  {
    label: "Home",
    icon: "icon-home",
    href: "/dashboard",
    active: true,
  },
  {
    label: "Contest",
    icon: "icon-game",
    hasChildren: true,
    subMenu: [
      {
        label: "Contest",
        icon: "icon-game",
        href: "/dashboard-contest",
      },
      {
        label: "Contest Details",
        icon: "icon-game",
        href: "/contest-details/1",
      },
    ],
  },
  {
    label: "Scratch offs",
    icon: "icon-scratch-offs",
    href: "/dashboard-scratch-offs",
  },
  {
    label: "Wallet",
    icon: "icon-wallet",
    href: "/dashboard-wallet",
  },
  {
    label: "Affiliate",
    icon: "icon-affiliate",
    href: "/dashboard-affiliate",
  },
  {
    label: "My favorite",
    icon: "icon-my-favorite",
    href: "/dashboard-my-favorite",
  },
  {
    label: "Support",
    icon: "icon-faq",
    href: "/dashboard-support",
  },
  {
    label: "My account",
    icon: "icon-rev-share",
    href: "/dashboard-my-account",
  },
];
