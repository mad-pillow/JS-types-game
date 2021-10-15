import "./header.css";
import { HashRouter, NavLink } from "react-router-dom";
import { Component } from "react";
import Switch from "../../Shared/Switch/switch";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navPanelIsVisible: false,
    };

    this.defaultLang = this.props.defaultLang ? "en" : "ru";

    this.handleNavPanel = this.handleNavPanel.bind(this);
  }

  handleNavPanel() {
    this.setState({ navPanelIsVisible: !this.state.navPanelIsVisible });
  }

  render() {
    this.lang = this.props.lang ? "en" : "ru";

    return (
      <HashRouter>
        <header className="header">
          <span className="header__logo logo">
            <NavLink className="header__logo-link logo-link" exact to="/">
              JS Types Game
            </NavLink>
          </span>
          <div className="nav__btn-container" onClick={this.handleNavPanel}>
            <span className="nav__btn"></span>
          </div>
          <nav
            className={this.state.navPanelIsVisible ? "nav__container nav__container--visible" : "nav__container"}
            onClick={this.handleNavPanel}
          >
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink className="nav__link" exact to="/">
                  {this.props.content.header.nav.intro[this.lang]}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="/game">
                  {this.props.content.header.nav.game[this.lang]}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="/options">
                  {this.props.content.header.nav.options[this.lang]}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="/highscores">
                  {this.props.content.header.nav.highscores[this.lang]}
                </NavLink>
              </li>
              <li className="nav__item">
                <div className="nav__item--switch">
                  <Switch
                    handleSwitch={this.props.handleSwitch}
                    config={{
                      unit: "language",
                      option: "langEng",
                      defaultValue: this.defaultLang,
                      label: { on: "en", off: "ru" },
                    }}
                  />
                </div>
              </li>
            </ul>
          </nav>
        </header>
      </HashRouter>
    );
  }
}
