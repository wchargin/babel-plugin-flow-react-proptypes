const babel = require('babel-core');
const content = `
var React = require('react');

type FooProps = {
  singleNumber: number,
  manyNumbers: {[name: string]: number},
}

export default class Foo extends React.Component {
  props: FooProps
}
`;

it('objectof', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['es2015', 'stage-1', 'react'],
    plugins: ['syntax-flow', require('../')],
  }).code;
  expect(res).toMatchSnapshot();
});
