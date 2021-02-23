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
      name: "B-Reporter",
      path: "news",
      subItems: [
        {
          name: "Blog Grid",
          path: "/blog-grid"
        },
        {
          name: "Blog List",
          path: "/blog-list"
        },
		{
          name: "Blog Full",
          path: "/blog-full"
        },
        {
          name: "Blog Single",
          path: "/blog-single"
        }
      ]
    },
    {
      name: "Contact",
      path: "contact",
      offset: "-50"
    }
  ]
};
export default Data;
