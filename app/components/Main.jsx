var React     = require('react'),
    Nav       = require('Nav');

var Main = (props) => (
  <div>
    <div>
      <div>
        <Nav/>
        <p>Main.jsx Rendered!</p>
        {props.children}
      </div>
    </div>
  </div>
);

module.exports = Main;
