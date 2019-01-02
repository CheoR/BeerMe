import React from 'react';

import { mount, shallow, render } from '../../enzyme';

import Users from '../Users';



describe('<Users />', () => {

  it('populates user state on call to componentDidMount', async () => {

    window.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({
          status: 200,
          ok: true,
          json: () => new Promise((resolve, reject) => {
            resolve([
              { id: 1, username: 'user1'}, { id: 2, username: 'user2' }, { id: 3, username: 'user3' }
            ]) // resolve
          }) // json
        }); // resolve
      }); // new Promise
    }); // window.fetch


    const wrapper = await shallow(<Users />);
    await wrapper.update();  // force re-rendering
    await wrapper.instance().componentDidMount();

    await expect(wrapper.state().users.length).toBeGreaterThanOrEqual(1);

  });


  it('throws an error on call to componentDidMount', async () => {

    window.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
          reject(new Error('Not Found')); // reject
        }); // new Promise
    }); // window.fetch


    const wrapper = await shallow(<Users />);
    await wrapper.update();  // force re-rendering
    await wrapper.instance().componentDidMount();

    expect(wrapper.state().errorStatus).not.toBe('');
  });
}); // describe Users