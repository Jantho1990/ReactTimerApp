const React = require('react'),
      Clock = require('Clock'),
      Controls = require('Controls');

var Timer = React.createClass({
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
      }
    }
  },
  componentWillUnmount: function(){
    this.stopTimer();
  },
  startTimer: function(){
    this.timer = setInterval(() => {
      let count = this.state.count + 1;
      this.setState({count});
    }, 1000);
  },
  stopTimer: function(countdownStatus = 'stopped'){
    clearInterval(this.timer);
    if(countdownStatus === 'stopped'){
      this.timer = undefined;
    }
    this.setState({countdownStatus});
  },
  handleStatusChange: function(countdownStatus){
    this.setState({countdownStatus});
  },
  render: function(){
    let{count, countdownStatus} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports = Timer;
