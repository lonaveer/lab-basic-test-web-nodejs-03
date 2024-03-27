import request from 'supertest';
import app from '../../app/app'; // นำเข้า app จากไฟล์ app.ts

let productId: number; // ใช้เก็บ ID ของผลิตภัณฑ์ที่ทดสอบ

// กลุ่มการทดสอบสำหรับการจัดการผลิตภัณฑ์
describe('Product Management', () => {
  it('should add a new product', async () => {
    // // กำหนดข้อมูลผลิตภัณฑ์ใหม่
    // const newProduct = { name: 'Product 1', description: 'Product 1 description', price: 100 };

    // // เพิ่มข้อมูลผลิตภัณฑ์ใหม่
    // const response = await xxxxx(xxxxx)
    //   .post('/products')
    //   .send(newProduct);

    // // ตรวจสอบผลลัพธ์การเพิ่มข้อมูลผลิตภัณฑ์ใหม่ : โดยตรวจสอบจาก response.status เป็น 201 หรือไม่
    // expect(xxxxx).xxxxx(201);

    // // ตรวจสอบผลลัพธ์ : ใน response.body ที่ได้มานั้น มี property 'id' หรือไม่
    // expect(xxxxx).toHaveProperty('xxxxx');

    // // บันทึก ID ผลิตภัณฑ์เพื่อใช้ในการทดสอบต่อไป
    // productId = response.body.id;
  });

  it('should get a product', async () => {
    // // นำ ID ที่ได้บันทึกไว้ (จากการทดสอบ 'should add a new product') มาใช้ในการค้นหาผลิตภัณฑ์
    // const response = await xxxxx(xxxxx)
    //   .get(`/products/${productId}`);

    // // ตรวจสอบผลลัพธ์การค้นหาข้อมูลผลิตภัณฑ์ : โดยตรวจสอบจาก response.status เป็น 200 หรือไม่
    // expect(xxxxx).xxxxx(200);

    // // ตรวจสอบผลลัพธ์ : ใน response.body ที่ได้มานั้น มี property 'id' ตรงกับ productId ที่ใช้ในการค้นหาผลิตภัณฑ์ หรือไม่
    // expect(xxxxx).toHaveProperty('id', productId);
  });

  it('should update the product', async () => {
    // // กำหนดข้อมูลผลิตภัณฑ์ที่จะอัปเดต
    // const updatedProduct = { name: 'Updated Product', description: 'Updated description', price: 150 }

    // // อัปเดตข้อมูลผลิตภัณฑ์
    // const response = await xxxxx(xxxxx)
      // .put(`/products/${productId}`)
      // .send(updatedProduct);

    // // ตรวจสอบผลลัพธ์การอัปเดตข้อมูลผลิตภัณฑ์ : โดยตรวจสอบจาก response.status เป็น 200 หรือไม่
    // expect(xxxxx).xxxxx(xxxxx);
  });

  it('should delete the product', async () => {
    // // ลบข้อมูลผลิตภัณฑ์
    // const response = await xxxxx(xxxxx)
      // .delete(`/products/${productId}`);

    // // ตรวจสอบผลลัพธ์การลบข้อมูลผลิตภัณฑ์ : โดยตรวจสอบจาก response.status เป็น 204 หรือไม่
    // expect(xxxxx).xxxxx(xxxxx);
  });
});

describe('GET /products/:id with non-existing id', () => {
  it('should return 404 for a non-existing product', async () => {
    // // ค้นหาผลิตภัณฑ์ที่ไม่มีอยู่ในระบบ เช่น 9999
    // const response = await xxxxx(xxxxx)
    //   .get('/products/9999');

    // // ตรวจสอบผลลัพธ์การค้นหาผลิตภัณฑ์ : โดยตรวจสอบจาก response.status เป็น 404 หรือไม่
    // expect(xxxxx).xxxxx(xxxxx);

    // // ตรวจสอบผลลัพธ์ : ใน response.text ที่ได้มานั้น ต้องเป็น 'Product not found'
    // expect(xxxxx).xxxxx(xxxxxx);
  });
});

describe('PUT /products/:id with non-existing id', () => {
  it('should return 404 when trying to update a non-existing product', async () => {
    // // กำหนดข้อมูลผลิตภัณฑ์ที่จะอัปเดต
    // const productUpdate = { name: 'New Name', description: 'New Description', price: 100 };

    // // อัปเดตผลิตภัณฑ์ที่ไม่มีอยู่ในระบบ
    // const response = await xxxxx(xxxxx)
      // .put('/products/9999')
      // .send(productUpdate);

    // // ตรวจสอบผลลัพธ์การอัปเดตผลิตภัณฑ์ : โดยตรวจสอบจาก response.status เป็น 404 หรือไม่
    // expect(xxxxx).xxxxx(xxxxx);

    // // ตรวจสอบผลลัพธ์ : ใน response.text ที่ได้มานั้น ต้องเป็น 'Product not found'
    // expect(xxxxx).xxxxxx(xxxxx);
  });
});

describe('DELETE /products/:id with non-existing id', () => {
  it('should return 404 when trying to delete a non-existing product', async () => {
    // // ลบผลิตภัณฑ์ที่ไม่มีอยู่ในระบบ เช่น 9999
    // const response = await xxxxx(xxxxx)
    //   .delete('/products/9999');

    // // ตรวจสอบผลลัพธ์การลบผลิตภัณฑ์ : โดยตรวจสอบจาก response.status เป็น 404 หรือไม่
    // expect(xxxxx).xxxxx(xxxxx);

    // // ตรวจสอบผลลัพธ์ : ใน response.text ที่ได้มานั้น ต้องเป็น 'Product not found'
    // expect(xxxxx).xxxxx(xxxxx);
  });
});