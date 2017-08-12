/* global describe, beforeEach, it , afterEach */

import assert from 'assert';
import PubNub from '../../src/node/index';

let pubnub = new PubNub({ subscribeKey: 'mySubKey', publishKey: 'myPublishKey', uuid: 'myUUID', authKey: 'myAuthKey' });

describe('#parameters validator', () => {
  it('prevent to execute publish with a wrong value', (done) => {
    pubnub.publish({ channel: ['ch1', 'ch2'], message: 'Hello World!' }, (status, response) => {
      assert.equal(status.error, true);
      assert.equal(status.type, 'validationError');
      done();
    });
  });

  it('prevent to execute publish with an invalid parameter', (done) => {
    pubnub.publish({ channels: 'ch1', message: 'Hello World!' }, (status) => {
      assert.equal(status.error, true);
      assert.equal(status.type, 'validationError');
      done();
    });
  });

  it('prevent to execute fire with a wrong value', (done) => {
    pubnub.fire({ channel: ['ch1', 'ch2'], message: 'Hello World!' }, (status) => {
      assert.equal(status.error, true);
      assert.equal(status.type, 'validationError');
      done();
    });
  });

  it('prevent to execute fire with an invalid parameter', (done) => {
    pubnub.publish({ channels: 'ch1', message: 'Hello World!' }, (status) => {
      assert.equal(status.error, true);
      assert.equal(status.type, 'validationError');
      done();
    });
  });

  it('prevent to execute hereNow with a wrong value', (done) => {
    pubnub.hereNow({ channels: ['ch1'], includeUUIDs: 'Hello World!' }, (status) => {
      assert.equal(status.error, true);
      assert.equal(status.type, 'validationError');
      done();
    });
  });

  it('prevent to execute hereNow with an invalid parameter', (done) => {
    pubnub.hereNow({ channels: 'ch1', includeUUIDs: true }, (status) => {
      assert.equal(status.error, true);
      assert.equal(status.type, 'validationError');
      done();
    });
  });

  it('prevent to execute whereNow with a wrong value', (done) => {
    pubnub.whereNow({ uuid: true }, (status) => {
      assert.equal(status.error, true);
      assert.equal(status.type, 'validationError');
      done();
    });
  });

  it('prevent to execute whereNow with an invalid parameter', (done) => {
    pubnub.whereNow({ channel: 'ch1' }, (status) => {
      assert.equal(status.error, true);
      assert.equal(status.type, 'validationError');
      done();
    });
  });

  it('prevent to execute setState with a wrong value', (done) => {
    try {
      pubnub.setState({ channels: 'ch1', state: { status: 'typing' } });
    } catch (err) {
      assert.notEqual(err, '');
      done();
    }
  });

  it('prevent to execute setState with an invalid parameter', (done) => {
    try {
      pubnub.setState({ channels: ['ch1'], status: { status: 'typing' } });
    } catch (err) {
      assert.notEqual(err, '');
      done();
    }
  });

  it('prevent to execute getState with a wrong value', (done) => {
    pubnub.getState({ channels: 'ch1' }, (status) => {
      assert.equal(status.error, true);
      assert.equal(status.type, 'validationError');
      done();
    });
  });

  it('prevent to execute getState with an invalid parameter', (done) => {
    pubnub.getState({ channel: ['ch1'] }, (status) => {
      assert.equal(status.error, true);
      assert.equal(status.type, 'validationError');
      done();
    });
  });

  it('prevent to execute grand with a wrong value', (done) => {
    pubnub.grant({ channels: 'ch1' }, (status) => {
      assert.equal(status.error, true);
      assert.equal(status.type, 'validationError');
      done();
    });
  });

  it('prevent to execute grand with an invalid parameter', (done) => {
    pubnub.grant({ channel: ['ch1'] }, (status) => {
      assert.equal(status.error, true);
      assert.equal(status.type, 'validationError');
      done();
    });
  });

  it('prevent to execute add_channels with a wrong value', (done) => {
    pubnub.channelGroups.addChannels({ channels: 'ch1', channelGroup: 'cg1' }, (status) => {
      assert.equal(status.error, true);
      assert.equal(status.type, 'validationError');
      done();
    });
  });

  it('prevent to execute add_channels with an invalid parameter', (done) => {
    pubnub.channelGroups.addChannels({ channel: ['ch1'], channelGroup: 'cg1' }, (status) => {
      assert.equal(status.error, true);
      assert.equal(status.type, 'validationError');
      done();
    });
  });
});