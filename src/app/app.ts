import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json()); // ใช้งาน bodyParser เพื่อแปลง body ของ request เป็น JSON

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

const products: Product[] = []; // สร้างอาร์เรย์สำหรับเก็บข้อมูลผลิตภัณฑ์

// Endpoint สำหรับดึงข้อมูลผลิตภัณฑ์โดยใช้ ID
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found'); // ถ้าไม่พบผลิตภัณฑ์ ส่งสถานะ 404
    }
});

// Endpoint สำหรับเพิ่มผลิตภัณฑ์ใหม่
app.post('/products', (req, res) => {
    const product: Product = {
        id: products.length + 1, // กำหนด ID โดยอัตโนมัติ
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    };
    products.push(product);
    res.status(201).send(product); // ส่งผลลัพธ์กลับไปพร้อมสถานะ 201
});

// Endpoint สำหรับอัปเดตข้อมูลผลิตภัณฑ์
app.put('/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        const product = products[index];
        product.name = req.body.name;
        product.description = req.body.description;
        product.price = req.body.price;
        res.json(product);
    } else {
        res.status(404).send('Product not found'); // ถ้าไม่พบผลิตภัณฑ์ ส่งสถานะ 404
    }
});

// Endpoint สำหรับลบผลิตภัณฑ์
app.delete('/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        products.splice(index, 1);
        res.status(204).send(); // ส่งสถานะ 204 เมื่อลบผลิตภัณฑ์สำเร็จ
    } else {
        res.status(404).send('Product not found'); // ถ้าไม่พบผลิตภัณฑ์ ส่งสถานะ 404
    }
});

export default app; // ส่งออก app เพื่อใช้ในการทดสอบ