const React = require('react'),
      Clock = require('Clock'),
      CountdownForm = require('CountdownForm'),
      Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
          this.stopTimer();
          break;
        case 'paused':
          this.stopTimer('paused');
          break;
      }
    }
  },
  componentWillUnmount: function(){
    this.stopTimer();
  },
  startTimer: function(){
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if(newCount <= 0){this.stopTimer();}

    }, 1000);
  },
  stopTimer: function(state = 'stopped'){
    clearInterval(this.timer);
    this.timer = undefined;
    this.setState({countdownStatus: state});
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function(newStatus){
    this.setState({countdownStatus: newStatus});
  },
  render: function(){
    let {count, countdownStatus} = this.state;
    let renderControlArea = () => {
      if(countdownStatus !== 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      }else{
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };
    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    )
  }
});

module.exports = Countdown;
