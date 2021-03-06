import React from 'react'
import styled from 'styled-components'
import logo from '../../../images/logo.svg'
import { FaTimes } from 'react-icons/fa'
import {Link} from "gatsby"
import {navigationLinks} from '../../../constants/links'
import {PhoneNumber} from '../ContactInfo'
import SidebarSubmenu from './SidebarSubmenu'

const Sidebar = ({isSidebarOpen, toggleSidebar}) => {
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="logo" width="136px" height="45px"/>
          <button type="button" className="close-sidebar-btn" aria-label="Close sidebar" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
          {navigationLinks.map((link, index) => {

            return (
              <li key={index} onClick={toggleSidebar} onKeyPress={toggleSidebar}>
                {' '}
                <Link to={link.path}>
                  {link.page}
                </Link>
                <SidebarSubmenu links={link.links}/>
              </li>

            )
          })}
          <li className="tel-wrapper">
            <PhoneNumber/>
          </li>
          <li>
          </li>
        </ul>
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-sidebar-btn {
    background: transparent;
    border-color: transparent;
    color: var(--black);
    cursor: pointer;
    font-size: 2rem;
    outline: none;
    transition: var(--transition);
  }
  .close-sidebar-btn:hover {
    color: var(--darkGrey);
  }
  .logo {
    justify-self: center;
    width: 160px;
    min-height: 60px;
    margin-bottom: 0;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    margin-right: 1.5rem;
    color: var(--black);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--primaryColor);
    color: var(--white);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primaryLight);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .tel-wrapper {
    text-align: left;
    margin: 1rem 1.5rem;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`
export default Sidebar
