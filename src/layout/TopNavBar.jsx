import {
  TNavContainer,
  SearchInput,
  TNBLogo,
  TNBLogoShort,
} from "../StyledComponents/TopNavBarSC";

const TopNavBar = () => {
  return (
    <>
      <TNavContainer>
        <TNBLogo>Memestagram</TNBLogo>
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
