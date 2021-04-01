//Navbar.js
import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ApartmentFilterForm from './ApartmentsFilterForm.jsx';

import './navbar.scss';
const Navbar=() => {
  return (
    <nav>
      <ul>
        <li><Link to={`/`}>Home</Link></li>
        <li>
          <Popover>
            <PopoverTrigger>
              <Button>Search</Button>
            </PopoverTrigger>
            <PopoverContent>
              <ApartmentFilterForm />
            </PopoverContent>
          </Popover>
        </li>
      </ul>
    </nav>
  )
};
export default Navbar;
