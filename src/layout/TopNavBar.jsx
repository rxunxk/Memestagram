import {
  TNavContainer,
  SearchInput,
  TNBLogo,
} from "../StyledComponents/TopNavBarSC";

const TopNavBar = () => {
  return (
    <>
      <TNavContainer>
        <TNBLogo>Memestagram</TNBLogo>
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
