var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function(){
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: (seconds) => {
    let min = Math.floor(seconds / 60),
        sec = seconds % 60;
    if(sec < 10){sec = `0${sec}`;}
    if(min < 10){min = `0${min}`;}
    return `${min}:${sec}`;
  },
  render: function(){
    let {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
      </div>
    );
  }
});

module.exports = Clock;
