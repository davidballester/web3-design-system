import React from 'react';
import renderer from 'react-test-renderer';
import Bar from './bar';

describe('Bar component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Bar operandA={10} operandB={20} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
