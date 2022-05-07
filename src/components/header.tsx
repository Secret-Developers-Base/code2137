import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header>
      <Link to="/">code 2137</Link>
      <nav>
        <ul>
          <li>
            <Link to="career">Kariera</Link>
          </li>
          <li>
            <Link to="services">Usługi</Link>
          </li>
          <li>
            <Link to="about">O nas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;