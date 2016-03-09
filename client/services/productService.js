import superagent from 'superagent';

const origin = location.origin;

export function getLocationId(customerId) {
    return new Promise((resolve, reject) => {
        superagent
            .get(`${origin}/locationId`)
            .query({
                customerId
            }).end((err, res) => {
                if (err !== null) return reject(err);
                return resolve(res.body);
            });
        // setTimeout(() => {
        //     resolve('LIVERPOOL');
        // }, 1000);
    });
}

export function getProductList(locationId) {
    return new Promise((resolve, reject) => {
        superagent
            .get(`${origin}/products`)
            .query({
                locationId
            }).end((err, res) => {
                if (err !== null) return reject(err);
                return resolve(res.body);
            });
        // setTimeout(() => {
        //     const mock = [{
        //         id: 1,
        //         name: 'Arsenal TV',
        //         category: 'sports',
        //         location: 'LONDON'
        //     }, {
        //         id: 2,
        //         name: 'Chelsea TV',
        //         category: 'sports',
        //         location: 'LONDON'
        //     }, {
        //         id: 3,
        //         name: 'Liverpool TV',
        //         category: 'sports',
        //         location: 'LIVERPOOL'
        //     }, {
        //         id: 4,
        //         name: 'Sky News',
        //         category: 'news'
        //     }, {
        //         id: 5,
        //         name: 'Sky Sports News',
        //         category: 'news'
        //     }];
        //     resolve(mock.filter((product) =>
        //         !product.location || product.location === locationId
        //     ));
        // }, 1100);
    });
}

export function doCheckout(customerId, productIdList) {
    return new Promise((resolve, reject) => {
        superagent
            .post(`${origin}/checkout`)
            .send({
                customerId,
                productIdList
            }).end((err, res) => {
                if (err !== null) return reject(err);
                return resolve(res.body);
            });
        // setTimeout(() => {
        //     resolve({
        //         ok: true
        //     });
        // }, 500);
    });
}
