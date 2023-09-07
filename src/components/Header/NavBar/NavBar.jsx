import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'


const Header = () => {
  const navBarRef = useRef();
  const navBarTogglerRef = useRef();

  const hideNavBar = () => {
    navBarRef.current.classList.remove('show');
    navBarTogglerRef.current.classList.add('collapsed');
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex flex-lg-row-reverse">
        <button ref={navBarTogglerRef} className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-expanded="false" aria-controls="navbarNav" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>

        <div ref={navBarRef} className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/option/one' onClick={hideNavBar} className="nav-link">Opción Uno</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/option/two' onClick={hideNavBar} className="nav-link">Opción Dos</NavLink>
            </li>
            {/* {linkProds.map((prod, i) => (
                <li className="nav-item" key={i}>
                  <NavLink to={`/category/${prod}`} onClick={hideNavBar} className="nav-link">{prod}</NavLink>
                </li>
              ))} */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header