const Data = {
  menuItems: [
    {
      name: "Home",
      path: "banner",
      offset: "-50"
    },
    {
      name: "Features",
      path: "features",
      offset: "-50"
    },
    {
      name: "About Us",
      path: "about",
      offset: "-50"
    },
    {
      name: "Team",
      path: "team",
      offset: "-50"
    },
    {
      name: "Contact",
      path: "contact",
      offset: "-50"
    },
    {
      name: "Login",
      path: "login",
      offset: "-50",
      subItems: [
        {
          name: "User",
          path: "/login"
        },
        {
          name: "Smart Police",
          path: "/login-admin"
        }
      ]
    }
  ]
};
export default Data;
