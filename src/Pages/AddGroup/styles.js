import styled from 'styled-components';

export const Button = styled.button`
  opacity: ${(props) => (props.loading ? '0.2' : '1')};
  opacity: ${(props) => (props.active ? '1' : '0.2')};
`;
