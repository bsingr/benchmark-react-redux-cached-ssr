const React = require('react');
const {connect} = require('react-redux');
const Recurse = require('./recurse');

function App(props) {
  return (
    <div>
      <h1>Hello {props.count}</h1>
      <h2>Foo</h2>
      <Recurse times={10} {...props} />
    </div>
  );
}
const ConnectedApp = connect(state => state)(App)

module.exports = ConnectedApp;
