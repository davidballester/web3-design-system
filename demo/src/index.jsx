import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Foo, Bar } from 'design-system';

const Main = styled.main`
  font-family: Helvetica, Arial, sans-serif;
`;

const App = () => (
  <Main>
    <Foo />
    <Bar />
  </Main>
);

ReactDOM.render(<App />, document.getElementById('app'));
