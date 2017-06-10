const React     = require('react'),
      ReactDOM  = require('react-dom'),
      expect    = require('expect'),
      $         = require('jquery'),
      TestUtils = require('react-addons-test-utils');

const Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render Pause when started', () => {
      let controls = TestUtils.renderIntoDocument(<Controls status='started' onStatusChange={() => {}}/>);
      let $el = $(ReactDOM.findDOMNode(controls));
      let $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });
    it('should render Start when paused', () => {
      let controls = TestUtils.renderIntoDocument(<Controls status='paused' onStatusChange={() => {}}/>);
      let $el = $(ReactDOM.findDOMNode(controls));
      let $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});
