import React from "react";
import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

//TEMPORARY
const session = true;
const isAdmin = true;

function Links() {
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}

      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: "Login", path: "/login" }} />}
          <button>Logout</button>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
}

export default Links;
