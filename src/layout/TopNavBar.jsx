import {
  TNavContainer,
  SearchInput,
  TNBLogo,
  TNBLogoShort,
} from "../StyledComponents/TopNavBarSC";
import { useNavigate } from "react-router-dom";

const TopNavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <TNavContainer>
        <TNBLogo
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Memestagram
        </TNBLogo>
        <TNBLogoShort>M</TNBLogoShort>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <SearchInput type="search" placeholder="search..." />
        </form>
      </TNavContainer>
    </>
  );
};

export default TopNavBar;
