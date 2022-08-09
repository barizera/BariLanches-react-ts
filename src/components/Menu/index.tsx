import * as Styled from "./styles";
import Logo from "../../assets/icon/lanche.png";
import { HomeIcon, LogoutIcon, SettingsIcon } from "../../assets/icon";

interface MenuProps {
  path: "home" | "settings";
}

const Menu = ({ path }: MenuProps) => {
  return (
    <Styled.MenuAside>
      <Styled.LogoBariLanches src={Logo} alt="logoIcon" />
      <nav>
        <Styled.MenuItem active={path === "home"}>
          <Styled.MenuItemButton active={path === "home"}>
            <HomeIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
        <Styled.MenuItem active={path === "settings"}>
          <Styled.MenuItemButton active={path === "settings"}>
            <SettingsIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
      </nav>
      <Styled.MenuItem logout>
        <Styled.MenuItemButton>
          <LogoutIcon />
        </Styled.MenuItemButton>
      </Styled.MenuItem>
    </Styled.MenuAside>
  );
};

export default Menu;
