import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
class Leftside extends Component {
  render() {
    return (
      <>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className={`nav-item`}>
              <NavLink
                className="nav-link"
                to="/dashboard"
                activeClassName="active"
              >
                <i className="mdi mdi-home menu-icon" />
                <span className="menu-title">Dashboard</span>
              </NavLink>
            </li>
            <li className={`nav-item`}>
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#ui-basic"
                aria-controls="ui-basic"
              >
                <i className="mdi mdi-apps menu-icon" />
                <span className="menu-title">Masters</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/countries"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Countries
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/states"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      States
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/cities"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Cities
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/sectors"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Sectors
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/post-categories"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Post Categories
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/salary-ranges"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Salary Ranges
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/institutes"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Institutes
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/boards"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Boards
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/functional-areas"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Functional Area
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/qualification-groups"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Qualification Groups
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/streams"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Streams
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/educations"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Educations
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/specializations"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Specializations
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/certifications"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Certifications
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/education-medium"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Education Medium
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/disabilities"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Disabilities
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/disability-sub"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Disability Sub Category
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/entrance-exam"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Entrance Exams
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/experience"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Experience
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/language"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Languages
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/caste-category"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Caste Categories
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/sub-caste-category"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Sub Caste Category
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/mills"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Mills
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/mother-tongue"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Mother Tongue
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/qualifying-subject"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Qualifying Test Subject
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/religion"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Religions
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/skill-programs"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Skill Programs
                    </NavLink>
                  </li>
                  <li className={`nav-item`}>
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/masters/skills"
                    >
                      <i className="mdi mdi-arrow-right-bold" />
                      Skills
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default withRouter(Leftside);
