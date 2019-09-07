import React from 'react'
import renderer from 'react-test-renderer'

import Counter from '../components/Counter.js'
import { exportAllDeclaration, isTSAnyKeyword } from '@babel/types';

describe('<Counter />', () => {
  it('is alive at start', () => {
    let component = shallow(<Counter />);
    expect(component.exists()).toBeTruthy();
  });

  it('+1s on a click up', () => {
    let component = mount(<Counter />);
    let buttonUp = component.find('#clickup');
    buttonUp.simulate('click');
    expect(component.state('counter')).toBe(1);
  });

  it('-1s on a click down', () => {
    let component = mount(<Counter />);
    let buttondown = component.find('#clickdown');
    buttondown.simulate('click');
    expect(component.state('counter')).toBe(-1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})