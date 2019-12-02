import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react'

const Navbar = () => {
  return ( 
  <List>
    <List.Item>
      <Link to ="/">
      <a>Homepage</a>
      </Link>
    </List.Item>
    <List.Item>
      <Link to = "/about">
        <a>
          About
        </a>
      </Link>
    </List.Item>
  </List>
  );
}

export default Navbar;
