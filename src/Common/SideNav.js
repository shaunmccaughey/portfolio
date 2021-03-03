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
            icon={<i class="fas fa-home"></i>}
            tolink="/"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            className="person"
            item="About"
            icon={<i class="far fa-meh-blank"></i>}
            tolink="/about"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item="Project"
            icon={<i class="fas fa-laptop"></i>}
            tolink="/project"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item="Skills"
            icon={<i class="fas fa-school"></i>}
            tolink="/skills"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
          <NavItem
            item="Contact"
            icon={<i class="far fa-address-card"></i>}
            tolink="/contact"
            handleNavItemOnClick={this.handleNavItemOnClick}
          />
        </ul>
      </nav>
    );
  }
}

export default SideNav;
