import React, { useEffect, Fragment } from "react";
import { Navbar, NavbarContainer } from "./HeaderStyle";
import NavbarRightRow from "./NavbarRightRow";
import NavbarLeftRow from "./NavbarLeftRow";
import Submenu from "./Submenu";
import { useHeaderContext } from "./context";
import SearchBar from "./SearchBar";

const Header = () => {
  const {
    openSubmenu,
    navbarSubmenuControl,
    setNavbarSubmenuControl,
    searchBarControl,
  } = useHeaderContext();

  const displaySubmenu = (props) => {
    const { id, e } = props;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 13;

    setNavbarSubmenuControl(
      navbarSubmenuControl.map((item) => {
        return id === item.id
          ? { ...item, control: !item.control }
          : { ...item, control: false };
      })
    );

    openSubmenu({ center, bottom });
  };

  useEffect(() => {}, [setNavbarSubmenuControl]);

  return (
    <Fragment>
      <Navbar className="navbar">
        <NavbarContainer className="navbar__container">
          <NavbarLeftRow />
          <NavbarRightRow displaySubmenu={displaySubmenu} />
        </NavbarContainer>
      </Navbar>
      <Submenu />
      {searchBarControl && <SearchBar />}
    </Fragment>
  );
};

export default Header;