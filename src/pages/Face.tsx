import React from "react";
import { Link } from "react-router-dom";

let dummy = [
  { link: "/main", context: "Read ME" },
  { link: "/info", context: "Info" },
  { link: "/overview", context: "Projects" },
];

// CSS 객체 정의
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    height: "100vh",
    justifyContent: "center",
  },
  link: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "gray",
    textDecoration: "none",
    transition: "color 0.3s, transform 0.3s",
  },
  linkHover: {
    color: "white",
    transform: "scale(1.05)",
  },
};

const Face = () => {
  return (
    <div style={styles.container}>
      {dummy.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          style={styles.link}
          onMouseEnter={(e) =>
            (e.target.style = { ...styles.link, ...styles.linkHover })
          }
          onMouseLeave={(e) => (e.target.style = styles.link)}
        >
          {item.context}
        </Link>
      ))}
    </div>
  );
};

export default Face;
