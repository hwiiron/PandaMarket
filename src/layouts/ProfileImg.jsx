import StyledProfileImg from "./ProfileImg.style";
import img from "../assets/profileImg.svg";

const ProfileImg = () => {
  return (
    <StyledProfileImg>
      <img src={img} alt="프로필 이미지" />
    </StyledProfileImg>
  );
};

export default ProfileImg;
