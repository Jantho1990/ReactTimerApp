const React = require('react'),
      Clock = require('Clock'),
      CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count: 0
    }
  },
  handleSetCountdown: function(seconds){
    this.setState({count: seconds});
  },
  render: function(){
    let {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
});

module.exports = Countdown;
