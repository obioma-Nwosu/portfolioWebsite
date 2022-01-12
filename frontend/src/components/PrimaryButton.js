import React from 'react'
import styled from 'styled-components'

function PrimaryButton({title}) {
  return (
    <PrimaryButtonStyled>
      {title}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: .5rem 1.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all .4s ease-in-out;
  &:hover::after{
    content: "";
    position: absolute;
    width: 100%;
    height: .1rem;
    left: 0;
    bottom: 0;
    background-color: var(--white-color);
  } 
`;
export default PrimaryButton
