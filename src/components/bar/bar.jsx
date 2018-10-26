import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Pre = styled.code`
  border: 1px solid #ccc;
`;

const Operand = styled.span`
  font-weight: bold;
`;

const Result = styled.span`
  font-weight: bold;
  color: darkblue;
`;

const Bar = ({ operandA, operandB }) => (
  <Pre>
    <Operand>{operandA}</Operand>
    &nbsp;+&nbsp;
    <Operand>{operandB}</Operand>
    &nbsp;=&nbsp;
    <Result>{operandA + operandB}</Result>
  </Pre>
);

Bar.propTypes = {
  operandA: PropTypes.number,
  operandB: PropTypes.number,
};

Bar.defaultProps = {
  operandA: 1,
  operandB: 2,
};

export default Bar;
