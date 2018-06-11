import styled from "styled-components";

const Button = styled.button`
  font-family: inherit;

  height: 48px;
  font-size: 16px;
  padding: 0 28px;

  cursor: pointer;
  border: unset;
  outline: unset;

  border-radius: 5px;

  transition: background-color 0.16s ease, color 0.16s ease,
    box-shadow 0.3s ease;

  color: white;
  background-color: hsl(210, 6%, 12%);

  &:hover {
    background-color: hsl(210, 6%, 22%);
  }

  &:active {
    background-color: hsl(210, 6%, 32%);
    transform: translateY(1px);
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px hsla(223, 0%, 53%, 0.3);
  }
`;

const Content = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0;
  width: 100%;

  opacity: ${props => (props.active ? "1" : "0")};
  transform: ${props => (props.active ? "unset" : "translateY(15px)")};

  transition: opacity 0.3s ease, transform 0.3s ease;
`;

export { Button, Content };
