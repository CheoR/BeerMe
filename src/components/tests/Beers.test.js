import React from 'react';

import { mount, shallow, render } from '../../enzyme';

import Beers from '../Beers';

// const beerList = [
//     {
//       "id": 0,
//       "name": "atreamayne0",
//       "reviews": [
//         {
//           "username": "zwick0",
//           "rating": 4,
//           "comment": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
//         },
//         {
//           "username": "dlawles1",
//           "rating": 1,
//           "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien."
//         },
//         {
//           "username": "divanishin2",
//           "rating": 5,
//           "comment": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
//         },
//         {
//           "username": "njenking3",
//           "rating": 1,
//           "comment": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
//         },
//         {
//           "username": "aganter4",
//           "rating": 5,
//           "comment": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo."
//         },
//         {
//           "username": "moconnor5",
//           "rating": 5,
//           "comment": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius."
//         },
//         {
//           "username": "ahowen6",
//           "rating": 3,
//           "comment": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat."
//         },
//         {
//           "username": "khoyt7",
//           "rating": 4,
//           "comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
//         },
//         {
//           "username": "mklewer8",
//           "rating": 2,
//           "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc."
//         },
//         {
//           "username": "kheinle9",
//           "rating": 2,
//           "comment": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus."
//         },
//         {
//           "username": "ahembera",
//           "rating": 3,
//           "comment": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum."
//         },
//         {
//           "username": "tlabeuilb",
//           "rating": 5,
//           "comment": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi."
//         },
//         {
//           "username": "mmaultbyc",
//           "rating": 2,
//           "comment": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst."
//         },
//         {
//           "username": "mpidgeond",
//           "rating": 1,
//           "comment": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
//         },
//         {
//           "username": "dtirkine",
//           "rating": 3,
//           "comment": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
//         },
//         {
//           "username": "jmaccaughanf",
//           "rating": 2,
//           "comment": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi."
//         },
//         {
//           "username": "astubbing",
//           "rating": 1,
//           "comment": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
//         },
//         {
//           "username": "brillatth",
//           "rating": 5,
//           "comment": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
//         },
//         {
//           "username": "nloghani",
//           "rating": 1,
//           "comment": "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante."
//         },
//         {
//           "username": "edewdneyj",
//           "rating": 3,
//           "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl."
//         },
//         {
//           "username": "gmerrywetherk",
//           "rating": 4,
//           "comment": "Duis aliquam convallis nunc."
//         },
//         {
//           "username": "kdevaneyl",
//           "rating": 2,
//           "comment": "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla."
//         },
//         {
//           "username": "khiersm",
//           "rating": 1,
//           "comment": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam."
//         },
//         {
//           "username": "atyndalln",
//           "rating": 3,
//           "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue."
//         },
//         {
//           "username": "gsarjento",
//           "rating": 3,
//           "comment": "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante."
//         },
//         {
//           "username": "kyanshonokp",
//           "rating": 4,
//           "comment": "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est."
//         },
//         {
//           "username": "gquilkinq",
//           "rating": 4,
//           "comment": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna."
//         },
//         {
//           "username": "mcormoder",
//           "rating": 2,
//           "comment": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl."
//         },
//         {
//           "username": "enewgroshs",
//           "rating": 5,
//           "comment": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam."
//         }
//       ]
//     },
//     {
//       "id": 1,
//       "name": "ayaxley1",
//       "reviews": [
//         {
//           "username": "ggold0",
//           "rating": 4,
//           "comment": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum."
//         },
//         {
//           "username": "bgallienne1",
//           "rating": 4,
//           "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend."
//         },
//         {
//           "username": "wporter2",
//           "rating": 2,
//           "comment": "Duis aliquam convallis nunc."
//         },
//         {
//           "username": "gmaccracken3",
//           "rating": 3,
//           "comment": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat."
//         },
//         {
//           "username": "aarboin4",
//           "rating": 3,
//           "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet."
//         },
//         {
//           "username": "aerbain5",
//           "rating": 1,
//           "comment": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue."
//         },
//         {
//           "username": "btrail6",
//           "rating": 2,
//           "comment": "Donec ut mauris eget massa tempor convallis."
//         },
//         {
//           "username": "tcaldera7",
//           "rating": 1,
//           "comment": null
//         },
//         {
//           "username": "ynorvill8",
//           "rating": 4,
//           "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."
//         },
//         {
//           "username": "omahaddie9",
//           "rating": 5,
//           "comment": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
//         },
//         {
//           "username": "tpenberthya",
//           "rating": 5,
//           "comment": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem."
//         },
//         {
//           "username": "rfossb",
//           "rating": 5,
//           "comment": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor."
//         },
//         {
//           "username": "bsmalecombec",
//           "rating": 3,
//           "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui."
//         },
//         {
//           "username": "agookeyd",
//           "rating": 2,
//           "comment": "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
//         },
//         {
//           "username": "lproudlere",
//           "rating": 4,
//           "comment": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst."
//         },
//         {
//           "username": "abrocklebankf",
//           "rating": 1,
//           "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
//         },
//         {
//           "username": "athurstanceg",
//           "rating": 1,
//           "comment": "Duis at velit eu est congue elementum."
//         }
//       ]
//     }
// ]; // beers


describe('<Beers />', () => {

  it('populates beer state on call to componentDidMount', async () => {

    window.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({
          status: 200,
          ok: true,
          json: () => new Promise((resolve, reject) => {
            resolve([
              { id: 1, name: 'beer1'}, { id: 2, name: 'beer2' }, { id: 3, name: 'beer3' }
            ]) // resolve
          }) // json
        }); // resolve
      }); // new Promise
    }); // window.fetch


    const wrapper = await shallow(<Beers />);
    await wrapper.update();  // force re-rendering
    await wrapper.instance().componentDidMount();

    await expect(wrapper.state().beers.length).toBeGreaterThanOrEqual(1);

  });


  it('throws an error on call to componentDidMount', async () => {

    window.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
          reject(new Error('Not Found')); // reject
        }); // new Promise
    }); // window.fetch


    const wrapper = await shallow(<Beers />);
    await wrapper.update();  // force re-rendering
    await wrapper.instance().componentDidMount();

    expect(wrapper.state().errorStatus).not.toBe('');
  });
}); // describe Beers