const React = require('react');
const Baz = require('./baz');

function Bar(props) {
  let baz;
  if (props.baz) {
    baz = <Baz {...props.baz} />
  }
  return (
    <div>
      Bar
      {baz}
    </div>
  );
}

module.exports = Bar;
