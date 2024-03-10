import request from 'supertest';
import app from '../../app/app'; // นำเข้า app จากไฟล์ app.ts

let productId: number; // ใช้เก็บ ID ของผลิตภัณฑ์ที่ทดสอบ

// กลุ่มการทดสอบสำหรับการจัดการผลิตภัณฑ์
describe('Product Management', () => {
  it('should add a new product', async () => {
    // // กำหนดข้อมูลผลิตภัณฑ์ใหม่
    // const newProduct = { name: 'Product 1', description: 'Product 1 description', price: 100 };

    // // เพิ่มข้อมูลผลิตภัณฑ์ใหม่
    // const xxxxx = await xxxxx(xxxxx)
    //   .xxxxxx('xxxxx')
    //   .xxxxx(xxxxx);

    // // ตรวจสอบผลลัพธ์การเพิ่มข้อมูลผลิตภัณฑ์ใหม่ : โดยตรวจสอบจาก response.status เป็น 201 หรือไม่
    // xxxxx(xxxxx).xxxxx(xxxxx);

    // // ตรวจสอบผลลัพธ์ : ใน response.body ที่ได้มานั้น มี property 'id' หรือไม่
    // xxxxx(xxxxx).xxxxx('xxxxx');

    // // บันทึก ID ผลิตภัณฑ์เพื่อใช้ในการทดสอบต่อไป
    // xxxxx = xxxxx.xxxxx.xxxxx;
  });

  it('should return a product', async () => {
    // // นำ ID ที่ได้บันทึกไว้ (จากการทดสอบ 'should add a new product') มาใช้ในการค้นหาผลิตภัณฑ์
    // const xxxxxx = await xxxxx(xxxxx)
    //   .xxxxx(`xxxxx`);

    // // ตรวจสอบผลลัพธ์การค้นหาข้อมูลผลิตภัณฑ์ : โดยตรวจสอบจาก response.status เป็น 200 หรือไม่
    // xxxxx(xxxxx).xxxxx(xxxxx);

    // // ตรวจสอบผลลัพธ์ : ใน response.body ที่ได้มานั้น มี property 'id' ตรงกับ productId ที่ใช้ในการค้นหาผลิตภัณฑ์ หรือไม่
    // xxxxx(xxxxx).xxxxx('xxxxx', xxxxx);
  });

  it('should update the product', async () => {
    // // กำหนดข้อมูลผลิตภัณฑ์ที่จะอัปเดต
    // xxxxx

    // // อัปเดตข้อมูลผลิตภัณฑ์
    // xxxxx

    // // ตรวจสอบผลลัพธ์การอัปเดตข้อมูลผลิตภัณฑ์ : โดยตรวจสอบจาก response.status เป็น 200 หรือไม่
    // xxxxx
  });

  it('should delete the product', async () => {
    // // ลบข้อมูลผลิตภัณฑ์
    // xxxxx

    // // ตรวจสอบผลลัพธ์การลบข้อมูลผลิตภัณฑ์ : โดยตรวจสอบจาก response.status เป็น 204 หรือไม่
    // xxxxx
  });
});

describe('GET /products/:id with non-existing id', () => {
    it('should return 404 for a non-existing product', async () => {
        // // ค้นหาผลิตภัณฑ์ที่ไม่มีอยู่ในระบบ เช่น 9999
        // const xxxxx = await xxxxx(xxxxxx).xxxxxx('xxxxx');

        // // ตรวจสอบผลลัพธ์การค้นหาผลิตภัณฑ์ : โดยตรวจสอบจาก response.status เป็น 404 หรือไม่
        // xxxxxx(xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบผลลัพธ์ : ใน response.text ที่ได้มานั้น ต้องเป็น 'Product not found'
        // xxxxx(xxxxxx).xxxxx('xxxxx');
    });
});

describe('PUT /products/:id with non-existing id', () => {
    it('should return 404 when trying to update a non-existing product', async () => {
        // // กำหนดข้อมูลผลิตภัณฑ์ที่จะอัปเดต
        // xxxxx

        // // อัปเดตผลิตภัณฑ์ที่ไม่มีอยู่ในระบบ
        // xxxxx

        // // ตรวจสอบผลลัพธ์การอัปเดตผลิตภัณฑ์ : โดยตรวจสอบจาก response.status เป็น 404 หรือไม่
        // xxxxx

        // // ตรวจสอบผลลัพธ์ : ใน response.text ที่ได้มานั้น ต้องเป็น 'Product not found'
        // xxxxx
    });
});

describe('DELETE /products/:id with non-existing id', () => {
    it('should return 404 when trying to delete a non-existing product', async () => {
        // // ลบผลิตภัณฑ์ที่ไม่มีอยู่ในระบบ เช่น 9999
        // xxxxx

        // // ตรวจสอบผลลัพธ์การลบผลิตภัณฑ์ : โดยตรวจสอบจาก response.status เป็น 404 หรือไม่
        // xxxxx

        // // ตรวจสอบผลลัพธ์ : ใน response.text ที่ได้มานั้น ต้องเป็น 'Product not found'
        // xxxxx
    });
});