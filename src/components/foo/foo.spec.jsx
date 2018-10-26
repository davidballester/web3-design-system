import React from 'react';
import renderer from 'react-test-renderer';
import Foo from './foo';

describe('Foo component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Foo name="Lady Guinevere" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
