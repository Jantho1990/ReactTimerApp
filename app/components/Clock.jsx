var React = require('react');

var Clock = React.createClass({
  formatSeconds: (seconds) => {
    let min = Math.floor(seconds / 60),
        sec = seconds % 60;
    if(sec < 10){sec = `0${sec}`;}
    if(min < 10){min = `0${min}`;}
    return `${min}:${sec}`;
  },
  render: function(){
    return (
      <div></div>
    );
  }
});

module.exports = Clock;
