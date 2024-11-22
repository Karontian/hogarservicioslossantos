import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;
    background-color: #6b8e23;


  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }

  /* Add color to text elements inside NotHidden */
  span {
    color: white; /* Change this to your desired color */
    cursor: pointer; /* Optional: Change cursor to pointer */
    transition: all 0.3s ease-in-out; /* Optional: Add transition */

    &:hover,
    &:active,
    &:focus {
      color: brown;
      text-decoration: underline; /* Use solid underline */
    }
  }

  button {
    color: white; /* Change this to your desired color */
    background-color: brown; /* Change this to your desired background color */
    border: none; /* Optional: Remove border */
    padding: 10px 20px; /* Optional: Add padding */
    border-radius: 5px; /* Optional: Add border radius */
    cursor: pointer; /* Optional: Change cursor to pointer */
    transition: background-color 0.3s ease; /* Optional: Add transition for hover effect */
    outline: none; /* Remove default outline */

    &:hover {
      background-color: darkred; /* Change this to your desired hover background color */
      border: 1px solid black; /* Optional: Remove border */
    }

    &:focus {
      outline: none; /* Remove outline on focus */
    }
  }
`;


export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: brown; /* Change this to your desired color */
  cursor: pointer; /* Change cursor to pointer */
  transition: all 0.3s ease-in-out; /* Add transition */

  &:hover,
  &:active,
  &:focus {
    color: green; /* Change this to your desired hover color */
    text-decoration: underline; /* Use solid underline */
  }
    /* Add color to text elements inside NotHidden */
  a {
    color: #6b8e23; /* Change this to your desired color */
    cursor: pointer; /* Optional: Change cursor to pointer */
    transition: all 0.3s ease-in-out; /* Optional: Add transition */

    &:hover,
    &:active,
    &:focus {
      color: brown;
      text-decoration: underline; /* Use solid underline */
    }
  }
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;
