const Data = {
  menuItems: [
    {
      name: "Home",
      path: "/",
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
    },
    {
      name: "Logout",
      path: "/",
      offset: "-50"
    }
  ]
};
export default Data;
