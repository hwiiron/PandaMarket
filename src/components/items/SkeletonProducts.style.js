import styled from "styled-components";

const StyledSkeletonProducts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: 23px;

  .skeleton-img {
    border-radius: 16px;
    width: ${(props) => {
      switch (props.type) {
        case "BEST":
          return "282px";
        case "ALL":
          return "221px";
      }
    }};

    height: ${(props) => {
      switch (props.type) {
        case "BEST":
          return "282px";
        case "ALL":
          return "221px";
      }
    }};
  }

  .skeleton-title {
    border-radius: 4px;
    width: 200px;
    height: 19px;
    margin-top: 16px;
  }

  .skeleton-price {
    border-radius: 4px;
    width: 120px;
    height: 22px;
    margin-top: 6px;
  }

  .skeleton-likes {
    border-radius: 4px;
    width: 50px;
    height: 16px;
    margin-top: 6px;
  }

  .skeleton-img,
  .skeleton-title,
  .skeleton-price,
  .skeleton-likes {
    background: #f0f0f0;
    animation: pulse 2s infinite ease-in-out;
  }

  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }

    50% {
      background-color: #f5f5f5;
    }

    100% {
      background-color: #e0e0e0;
    }
  }
`;

export default StyledSkeletonProducts;
