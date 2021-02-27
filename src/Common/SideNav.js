import { Component } from "react";
import NavItem from "./Navitem";

class SideNav extends Component {
  state = { activeNavItem: "" };

  handleNavItemOnClick = (item) => {
    if (this.state.activeNavItem.length > 0) {
      document
        .getElementById(this.state.activeNavItem)
        .classList.remove("active");
    }
    this.setState({ activeNavItem: item }, () => {
      document.getElementById(item).classList.add("active");
    });
  };

  render() {
    return (
      <nav className="sidenav">
        <ul>
          <NavItem
            item="Home"
            tolink="/"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item="About"
            tolink="/about"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item="Education"
            tolink="/education"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item="Skills"
            tolink="/skills"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item="Contact"
            tolink="/contact"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
        </ul>
      </nav>
    );
  }
}

export default SideNav;
