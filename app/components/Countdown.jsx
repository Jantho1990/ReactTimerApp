const React = require('react'),
      Clock = require('Clock'),
      CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      coundownStatus: 'stopped'
    }
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':

          break;
      }
    }
  },
  startTimer: function(){
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      console.log(newCount);
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if(newCount <= 0){this.stopTimer();}

    }, 1000);
  },
  stopTimer: function(){
    clearInterval(this.timer);
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
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
