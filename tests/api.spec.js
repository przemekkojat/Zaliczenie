import { test, expect } from '@playwright/test';


test('Test API - POST', async ({ request }) => {

    const response = await request.post('/api/index.php?endpoint=products', {
        data: {
            "name": "Zaliczenie",
            "price": 123,
            "currency": "EUR"
        }
    });

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();

    console.log(await response.text())
    expect(await response.text()).toContain('"created (mock)\",\"product\":{\"name\":\"Zaliczenie\"')

});

test('Test API - GET single item', async ({ request }) => {

    const response = await request.get('/api/index.php?endpoint=products&id=3');

    expect(response.status()).toBe(200);

    expect(await response.text()).toContain('{"id":3,"name":"Peleryna Maskująca","price":349,"currency":"PLN","display_price":"349.00 zł"}')
});