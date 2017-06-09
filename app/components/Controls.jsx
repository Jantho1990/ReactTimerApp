const React = require('react');

const Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render: function(){
    let {countdownStatus} = this.props;
    let renderStartStopButton = () => {
      switch(countdownStatus){
        case 'started':
          return <button className="button secondary">Pause</button>
          break;
        case 'paused':
          return <button className="button primary">Start</button>
          break;
        case 'stopped':

          break;
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
