import React from 'react'
import Button from '@atlaskit/button'
import styled, { css } from "styled-components"
import CheckIcon from '@atlaskit/icon/glyph/check'
const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;
  &,
  &:hover {
    ${(p) =>
        p.isCompleted &&
        css`
        text-decoration: line-through;
      `}
  }
  &:hover {
    .check-icon {
      display: inline-block;
    }
  }
  .check-icon {
    display: none;
    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;
function Todo({ item, onCheckButtonClick }) {

    return (
        <ButtonStyled
            isCompleted={item.isCompleted} shouldFitContainer iconAfter={!item.isCompleted && (<span className='check-icon' onClick={() => onCheckButtonClick(item.id)}>
                <CheckIcon primaryColor='#4fff4f'></CheckIcon></span>)}>
            {item.name}</ButtonStyled>

    );
}

export default Todo;