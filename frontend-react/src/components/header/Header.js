import React from 'react';
import { FaHome, FaRegEdit } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="/">
        <FaHome alt="MDN logo" size={30} />
      </a>
      <a href="/addClientes/_add">
        <FaRegEdit size={30} />
      </a>
    </Nav>
  );
}
