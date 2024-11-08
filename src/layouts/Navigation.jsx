import { NavLink, useLocation } from "react-router-dom";
import StyledNavigation from "./Navigation.style";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692ff" : undefined,
  };
}

const linkList = [
  {
    id: 0,
    name: "자유게시판",
    path: "/boards",
  },
  {
    id: 1,
    name: "중고마켓",
    path: "/items",
  },
];

const Navigation = () => {
  const location = useLocation();
  if (location.pathname === "/addItem") {
    getLinkStyle(isActive);
  }

  return (
    <StyledNavigation>
      {linkList.map((link) => {
        return (
          <li key={link.id}>
            <NavLink to={link.path} style={getLinkStyle}>
              {link.name}
            </NavLink>
          </li>
        );
      })}
    </StyledNavigation>
  );
};

export default Navigation;
