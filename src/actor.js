const machina = require('machina');

export default new machina.Fsm({
  initialize() {
    this.mind = {
      interest: 0,
    };
  },
  namespace: 'dialog-actor',
  initialState: 'unintroduced',
  states: {
    unintroduced: {
      talkTo() {
        this.deferUntilTransition();
        this.transition('introduced');
      },
    },
    introduced: {
      _onEnter() {
        this.emit('retort', 'Nice to meet you');
      },
      talkTo() {
        this.mind.interest += 0.35;
        if (this.mind.interest > 1) {
          this.transition('interested');
        } else {
          this.emit('retort', 'Go on');
        }
      },
    },
    interested: {
      _onEnter() {
        this.emit('retort', 'This sounds interesting');
      },
      talkTo() {
        this.emit('sold', { price: 100 });
      },
    },
  },
  talkTo() {
    this.handle('talkTo');
  },
});
