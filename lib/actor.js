'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var machina = require('machina');

exports.default = new machina.Fsm({
  initialize: function initialize() {
    this.mind = {
      interest: 0
    };
  },

  namespace: 'dialog-actor',
  initialState: 'unintroduced',
  states: {
    unintroduced: {
      talkTo: function talkTo() {
        this.deferUntilTransition();
        this.transition('introduced');
      }
    },
    introduced: {
      _onEnter: function _onEnter() {
        this.emit('retort', 'Nice to meet you');
      },
      talkTo: function talkTo() {
        this.mind.interest += 0.35;
        if (this.mind.interest > 1) {
          this.transition('interested');
        } else {
          this.emit('retort', 'Go on');
        }
      }
    },
    interested: {
      _onEnter: function _onEnter() {
        this.emit('retort', 'This sounds interesting');
      },
      talkTo: function talkTo() {
        this.emit('sold', { price: 100 });
      }
    }
  },
  talkTo: function talkTo() {
    this.handle('talkTo');
  }
});