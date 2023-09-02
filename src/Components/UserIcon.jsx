import styled from "styled-components";
import PropTypes from "prop-types";

const UserIconContainer = styled.div`
  position: relative;
  width: ${(props) => props.width}px;
`;

const UserImage = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-size: cover;
  border-radius: 50%;
  border: ${(props) => (props.isStory ? "2px solid red" : "none")};
  cursor: ${(props) => props.cursor};
  margin-right: ${(props) => props.mr}rem;
`;

const StatusDot = styled.span`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #0ce466;
  border: 1.5px solid white;
  margin-right: ${(props) => props.mr / 2}rem;
`;

const UserIcon = ({
  isOnline,
  height,
  width,
  mr,
  isStory,
  src,
  cursor,
  onClick,
}) => {
  let status;
  if (isOnline) {
    status = <StatusDot mr={mr} />;
  } else {
    status = "";
  }

  return (
    <>
      <UserIconContainer>
        <UserImage
          height={height}
          width={width}
          mr={mr}
          src={`${src?.length ? src : "https://random.imagecdn.app/100/100"}`}
          isStory={isStory}
          cursor={cursor}
          onClick={onClick}
        />
        {status}
      </UserIconContainer>
    </>
  );
};

UserIcon.propTypes = {
  isOnline: PropTypes.any,
  src: PropTypes.any,
  height: PropTypes.any,
  width: PropTypes.any,
  mr: PropTypes.any,
  isStory: PropTypes.any,
  cursor: PropTypes.any,
  onClick: PropTypes.any,
};

export default UserIcon;
