import React from "react";
import { Link as OnepageLink } from "react-scroll";
import Link from 'next/link';

const ScrollspyMenu = ({ menuItems, ...props }) => {
  const addAllClasses = [""];
  if (props.className) {
    addAllClasses.push(props.className);
  }
  return (
    <ul className={addAllClasses.join(" ")}>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={
            menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item"
          }
        >
          <Link
            href={menu.path}
          >
            <a>{menu.name}</a>
          </Link>
          {menu.subItems !== undefined && (
            <ul key={index} className="dropdown">
              {menu.subItems.map((subItem, i) => (
                  <li key={i}>
                    <Link href={subItem.path}>
                      <a>{subItem.name}</a>
                    </Link>
                  </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ScrollspyMenu;
