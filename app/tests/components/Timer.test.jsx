const React     = require('react'),
      ReactDOM  = require('react-dom'),
      expect    = require('expect'),
      $         = require('jquery'),
      TestUtils = require('react-addons-test-utils');

const Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('Timer Execution', () => {
    it('should set state to started and count up', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer/>);

      expect(timer.state.count).toBe(0);

      timer.handleStatusChange('started');
      expect(timer.state.timerStatus).toBe('started');
      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });
    it('should pause timer on paused status', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');


      setTimeout(() => {
        timer.stopTimer('paused');
        expect(timer.state.count).toBe(1);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });
    it('should stop timer on stopped status', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(() => {
        timer.stopTimer();
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });

});
