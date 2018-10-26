import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
  font-weight: lighter;
`;

const Name = styled.span`
  font-weight: bolder;
`;

const Foo = ({ name }) => (
  <H1>
    Hello,&nbsp;
    <Name>{name}</Name>
  </H1>
);

Foo.propTypes = {
  name: PropTypes.string,
};

Foo.defaultProps = {
  name: 'King Arthur',
};

export default Foo;
