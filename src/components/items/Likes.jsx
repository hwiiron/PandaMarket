import React from "react";
import StyledLikes from "./Likes.style";

const Likes = ({ product }) => {
  return <StyledLikes>{product.favoriteCount}</StyledLikes>;
};

export default Likes;
