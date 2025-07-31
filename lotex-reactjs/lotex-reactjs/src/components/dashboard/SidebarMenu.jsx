import { dashboardMenuItems } from "@/data/menu";
import { Link, useLocation } from "react-router-dom";

import React, { useState } from "react";

export default function SidebarMenu() {
  const [childrenActiveIndex, setChildrenActiveIndex] = useState(-1);
  const { pathname } = useLocation();
  const isMenuActive = (link) => {
    return link.href?.split("/")[1] == pathname.split("/")[1];
  };

  return (
    <ul className="menu-list">
      {dashboardMenuItems.map((item, index) => (
        <li
          key={index}
          className={`menu-item ${isMenuActive(item) ? "active" : ""} ${
            item.hasChildren ? "has-children" : ""
          } ${childrenActiveIndex == index ? "active" : ""} `}
          onClick={() => {
            if (item.hasChildren) {
              setChildrenActiveIndex((pre) => (pre == index ? -1 : index));
            }
          }}
        >
          {item.hasChildren ? (
            <>
              <a href="#" className="menu-item-button">
                <div className="icon">
                  <i className={item.icon} />
                </div>
                <div className="text">{item.label}</div>
              </a>
              <ul
                className="sub-menu"
                style={childrenActiveIndex == index ? { display: "block" } : {}}
              >
                {item.subMenu?.map((sub, subIndex) => (
                  <li
                    className={`sub-menu-item  ${
                      isMenuActive(sub) ? "sub-current" : ""
                    }`}
                    key={subIndex}
                  >
                    <Link to={sub.href}>
                      <div className="icon">
                        <i className={sub.icon} />
                      </div>
                      <div className="text">{sub.label}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link to={item.href} className="menu-item-button">
              <div className="icon">
                <i className={item.icon} />
              </div>
              <div className="text">{item.label}</div>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
