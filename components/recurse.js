const React = require('react');
const Foo = require('./foo');

function Recurse(props) {
  let child = false;
  if (props.times > 0) {
    child = <Recurse times={props.times - 1} foo={props.foo}/>;
  }
  let foo;
  if (props.foo) {
    foo = <Foo bar={props.foo.bar} />;
  }
  return (
    <div>
      {foo}
      Recurse: {props.times}<br/>
      {child}
    </div>
  );
}

module.exports = Recurse;
