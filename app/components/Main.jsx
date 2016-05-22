var React = require('react');
var Navigation = require('Navigation');

var Main = (props) =>
  <div>
    <Navigation/>
    <div>
      <div>
        <p>Main.jsx rendered</p>
        {props.children}
      </div>
    </div>
  </div>;

module.exports = Main;
