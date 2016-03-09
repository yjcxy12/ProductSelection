import { Router as routerFactory } from 'express';

const mockProducts = [{
    id: 1,
    name: 'Arsenal TV',
    category: 'sports',
    location: 'LONDON'
}, {
    id: 2,
    name: 'Chelsea TV',
    category: 'sports',
    location: 'LONDON'
}, {
    id: 3,
    name: 'Liverpool TV',
    category: 'sports',
    location: 'LIVERPOOL'
}, {
    id: 4,
    name: 'Sky News',
    category: 'news'
}, {
    id: 5,
    name: 'Sky Sports News',
    category: 'news'
}];
const router = routerFactory();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/locationId', (req, res) => {
    res.json(
        Math.random() < 0.5 ? 'LONDON' : 'LIVERPOOL');
});

router.get('/products', (req, res) => {
    if (!req.query.locationId) {
        res.status(404).send({
            error: 'customerId needed'
        });
    }
    res.json(mockProducts.filter((product) =>
        !product.location || product.location === req.query.locationId
    ));
});

router.post('/checkout', (req, res) => {
    res.json({
        success: true
    });
});

export default router;
