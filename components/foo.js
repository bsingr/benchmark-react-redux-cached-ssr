const React = require('react');
const Bar = require('./bar');

function Foo(props) {
  let bar;
  if (props.bar) {
    bar = <Bar baz={props.bar.baz} />
  }
  return (
    <div>
      Foo
      {bar}
    </div>
  );
}

module.exports = Foo;
