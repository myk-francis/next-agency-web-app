"use client";
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
  const [open, setOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Login", path: "/login" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prevValue) => !prevValue)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Links;
