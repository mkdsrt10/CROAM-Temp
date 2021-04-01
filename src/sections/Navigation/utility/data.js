const Data = {
  menuItems: [
    {
      name: "Home",
      path: "banner",
      offset: "-50"
    },
    {
      name: "About",
      path: "about",
      offset: "-50"
    },
    {
      name: "Features",
      path: "features",
      offset: "-50"
    },
    {
      name: "Testimonial",
      path: "testimonial",
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
          name: "Admin",
          path: "/login"
        }
      ]
    }
  ]
};
export default Data;
