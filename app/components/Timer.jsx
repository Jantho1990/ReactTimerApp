const React = require('react'),
      Clock = require('Clock'),
      Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
      switch(this.state.timerStatus){
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
  stopTimer: function(timerStatus = 'stopped'){
    clearInterval(this.timer);
    if(timerStatus === 'stopped'){
      this.timer = undefined;
    }
    this.setState({timerStatus});
  },
  handleStatusChange: function(timerStatus){
    this.setState({timerStatus});
  },
  render: function(){
    let{count, timerStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls status={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports = Timer;
