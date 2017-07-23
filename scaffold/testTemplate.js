module.exports = function (name) { return (`import React from 'react';
import { shallow } from 'enzyme';
import ${name} from './';

describe('Component: ${name}', () => {

  it('It renders without errors', () => {
    expect(
      shallow(
        <${name} text="Hello; World" />
      ).length,
    ).toEqual(1);
  });

});
`)};
