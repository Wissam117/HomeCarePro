import React from 'react';

function Header() {
  return (
    <header>
      <img src="/client/public/images/logo.jpeg" alt="HomeCarePro Logo" className="logo" />
      <nav>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
