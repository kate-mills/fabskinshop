import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../../../context/context'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Submenu = () => {
  const {
    isSubmenuOpen,
    closeSubmenu,
    page: { page, links },
    location,
  } = useGlobalContext()
  const container = useRef(null)

  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [page, location, links])

  return (
   <SubmenuWrapper
      className={`${isSubmenuOpen ? `submenu show` : `submenu hide`}`}
      ref={container}>
      <section>
        <div className={`submenu-center columns`}>
          {links.map((link, index) => {
            const {path , page } = link
            return (
              <Link
                key={index}
                to={path}
                className={`sublink`}
                onClick={closeSubmenu}>
                {page}
              </Link>
            )
          })}
        </div>
      </section>
    </SubmenuWrapper>
  )
}

const SubmenuWrapper = styled.aside`
  & {
    background: var(--grey);
    position: absolute;
    transform: translateX(-50%) translateY(3%);
    z-index: 1;
  }
  &.submenu.hide { display: none; }
  &.submenu.show { display: unset; }
  & .sublink:first-of-type{
    margin-top: 1rem;
  }
  & .sublink{
    display: block;
    padding: 1rem;
    text-align: center;
  }
  & .sublink:hover{
    color: var(--primaryColor);
  }
`
export default Submenu
