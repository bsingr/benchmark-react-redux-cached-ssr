const React = require('react');

function Baz(props) {
  return (
    <div>
      Baz
      <h4>foo: {props.foo}</h4>
      <h4>bar: {props.bar}</h4>
      <h4>baz: {props.baz}</h4>
    </div>
  );
}

module.exports = Baz;
