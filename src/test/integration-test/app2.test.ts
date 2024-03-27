import request from 'supertest';
import app from '../../app/app2';

describe('User Management API', () => {
    let accessToken: string;

    beforeEach(async () => {
        // // ล้างข้อมูลผู้ใช้ทั้งหมด
        // await request(app).post('/reset');

        // // ลงทะเบียนผู้ใช้สำหรับการทดสอบ
        // const registerRes = await xxxxx(xxxxx)
        //     .post('/register')
        //     .send({ username: 'testuser', password: 'testpass' });

        // // ตรวจสอบการลงทะเบียนสำเร็จ
        // expect(registerRes.statusCode).xxxxx(201);

        // // เข้าสู่ระบบเพื่อรับ accessToken
        // const loginRes = await xxxxx(xxxxx)
        //     .post('/login')
        //     .send({ username: 'testuser', password: 'testpass' });

        // // บันทึก accessToken สำหรับใช้ในการทดสอบ
        // accessToken = loginRes.body.accessToken;
    });

    // ทดสอบการลงทะเบียนผู้ใช้ใหม่
    test('should register a new user', async () => {
        // // Call API เพื่อลงทะเบียนผู้ใช้ใหม่
        // const res = await xxxxx(xxxxx)
        //     .post('/register')
        //     .send({ username: 'newuser', password: 'newpass' });

        // // ตรวจสอบการลงทะเบียนผู้ใช้ใหม่ : ว่าขึ้น statusCode 201 หรือไม่
        // expect(res.xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการลงทะเบียนผู้ใช้ใหม่ : ว่าขึ้น text 'User registered successfully' หรือไม่
        // expect(res.text).xxxxx('User registered successfully');
    });

    // ทดสอบการเข้าสู่ระบบและรับ token
    test('should login the user and return a token', async () => {
        // // Call API เพื่อเข้าสู่ระบบ
        // const res = await xxxxx(xxxxx)
        //     .post('/login')
        //     .send({ username: 'testuser', password: 'testpass' });

        // // ตรวจสอบการเข้าสู่ระบบ : ว่าขึ้น statusCode 200 หรือไม่
        // xxxxx(res.xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการเข้าสู่ระบบ : ใน res.body ที่ได้มานั้น ต้องเป็น property 'accessToken'
        // xxxxx(xxxxx).toHaveProperty('xxxxx');
    });

    // ทดสอบการเข้าสู่ระบบด้วยชื่อผู้ใช้ที่ไม่มีอยู่จริง
    test('should return 401 for a non-existing user login attempt', async () => {
        // // Call API เพื่อเข้าสู่ระบบ
        // const res = await xxxxx(xxxxx)
        //     .post('/login')
        //     .send({
        //         username: 'nonExistingUser', // ใช้ชื่อผู้ใช้ที่ไม่มีอยู่จริง
        //         password: 'anyPassword',
        //     });

        // // ตรวจสอบการเข้าสู่ระบบ : ว่าขึ้น statusCode 401 หรือไม่
        // expect(res.xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการเข้าสู่ระบบ : ใน res.text ที่ได้มานั้น ต้องเป็น 'Cannot find user or password is incorrect'
        // expect(res.text).xxxxx('Cannot find user or password is incorrect');
    });

    // ทดสอบการเข้าสู่ระบบด้วยรหัสผ่านที่ไม่ถูกต้อง
    test('should return 401 for an incorrect password login attempt', async () => {
        // // Call API เพื่อเข้าสู่ระบบ
        // const res = await xxxxxx(xxxxxx)
        //     .post('/login')
        //     .send({
        //         username: 'testuser', // ใช้ชื่อผู้ใช้ที่มีอยู่จริง
        //         password: 'incorrectPassword', // ใช้รหัสผ่านที่ไม่ถูกต้อง
        //     });

        // // ตรวจสอบการเข้าสู่ระบบ : ว่าขึ้น statusCode 401 หรือไม่
        // expect(res.xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการเข้าสู่ระบบ : ใน res.text ที่ได้มานั้น ต้องเป็น 'Cannot find user or password is incorrect'
        // expect(res.text).xxxxx('Cannot find user or password is incorrect');
    });

    // ทดสอบการดูข้อมูลโปรไฟล์
    test('should return the user profile', async () => {
        // // Call API เพื่อดูข้อมูลโปรไฟล์
        // const res = await xxxxx(xxxxx)
        //     .get('/myProfile')
        //     .set('Authorization', `Bearer ${accessToken}`);

        // // ตรวจสอบการดูข้อมูลโปรไฟล์ : ว่าขึ้น statusCode 200 หรือไม่
        // expect(xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการดูข้อมูลโปรไฟล์ : ใน res.body ที่ได้มานั้น ต้องเป็น property 'username'
        // expect(xxxxx).xxxxx('username', 'testuser');
    });

    // ทดสอบการดูข้อมูลโปรไฟล์ ที่ไม่มีอยู่จริง
    test('should return the user profile (Not Found)', async () => {
        // // ล้างข้อมูลผู้ใช้ทั้งหมด
        // await request(app).post('/reset');

        // // Call API เพื่อดูข้อมูลโปรไฟล์
        // const res = await xxxxx(xxxxx)
        //     .get('/myProfile')
        //     .set('Authorization', `Bearer ${accessToken}`);

        // // ตรวจสอบการดูข้อมูลโปรไฟล์ : ว่าขึ้น statusCode 404 หรือไม่
        // expect(res.xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการดูข้อมูลโปรไฟล์ : ใน res.text ที่ได้มานั้น ต้องเป็น 'User not found'
        // expect(res.text).xxxxx('User not found');
    });

    // ทดสอบการแก้ไขข้อมูลโปรไฟล์
    test('should update the user profile', async () => {
        // // Call API เพื่อแก้ไขข้อมูลโปรไฟล์
        // const res = await xxxxx(xxxxx)
        //     .put('/myProfile')
        //     .send({ username: 'updatedTestuser' })
        //     .set('Authorization', `Bearer ${accessToken}`);

        // // ตรวจสอบการแก้ไขข้อมูลโปรไฟล์ : ว่าขึ้น statusCode 200 หรือไม่
        // expect(xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการแก้ไขข้อมูลโปรไฟล์ : ใน res.body ที่ได้มานั้น ต้องเป็น property 'username'
        // expect(xxxxx).xxxxx('username', 'updatedTestuser');
    });

    // ทดสอบการแก้ไขข้อมูลโปรไฟล์ ที่ไม่มีอยู่จริง
    test('should update the user profile (Not Found)', async () => {
        // // ล้างข้อมูลผู้ใช้ทั้งหมด
        // await xxxxx(xxxxx).xxxxx('xxxxx');

        // // Call API เพื่อแก้ไขข้อมูลโปรไฟล์
        // const res = await xxxxx(xxxxx)
        //     .put('/myProfile')
        //     .send({ username: 'updatedTestuser' })
        //     .set('Authorization', `Bearer ${accessToken}`);

        // // ตรวจสอบการแก้ไขข้อมูลโปรไฟล์ : ว่าขึ้น statusCode 404 หรือไม่
        // expect(res.xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการแก้ไขข้อมูลโปรไฟล์ : ใน res.text ที่ได้มานั้น ต้องเป็น 'User not found'
        // expect(res.text).xxxxx('xxxxx');
    });

    // ทดสอบการลบโปรไฟล์ผู้ใช้
    test('should delete the user profile', async () => {
        // // // Call API เพื่อลบโปรไฟล์
        // const res = await xxxxx(xxxxx)
        //     .delete('/myProfile')
        //     .set('Authorization', `Bearer ${accessToken}`);

        // // ตรวจสอบการลบโปรไฟล์ : ว่าขึ้น statusCode 200 หรือไม่
        // expect(res.xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการลบโปรไฟล์ : ใน res.text ที่ได้มานั้น ต้องเป็น 'User deleted successfully'
        // expect(res.text).xxxxx('xxxxx');
    });

    // ทดสอบการลบโปรไฟล์ผู้ใช้ ที่ไม่มีอยู่จริง
    test('should delete the user profile (Not Found)', async () => {
        // // ล้างข้อมูลผู้ใช้ทั้งหมด
        // xxxxxx

        // // Call API เพื่อลบโปรไฟล์
        // const res = await xxxxx(xxxxx)
        //     .delete('/myProfile')
        //     .set('Authorization', `Bearer ${accessToken}`);

        // // ตรวจสอบการลบโปรไฟล์ : ว่าขึ้น statusCode 404 หรือไม่
        // expect(res.xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการลบโปรไฟล์ : ใน res.text ที่ได้มานั้น ต้องเป็น 'User not found'
        // expect(res.text).xxxxx('xxxxx');
    });
});

describe('Token Authentication', () => {
    it('should return 401 if token is missing', async () => {
        // // Call API เพื่อดูข้อมูลโปรไฟล์
        // const res = await xxxxx(xxxxx)
        //     .get('/myProfile');

        // // ตรวจสอบการดูข้อมูลโปรไฟล์ : ว่าขึ้น statusCode 401 หรือไม่
        // expect(res.xxxxx).xxxxx(xxxxx);
    });

    it('should return 403 if token is invalid', async () => {
        // // Call API เพื่อดูข้อมูลโปรไฟล์
        // const res = await xxxxx(xxxxx)
        //     .get('/myProfile')
        //     .set('Authorization', 'Bearer invalidToken'); // ส่ง token ที่ไม่ถูกต้อง

        // ตรวจสอบการดูข้อมูลโปรไฟล์ : ว่าขึ้น statusCode 403 หรือไม่
        // expect(res.xxxxx).xxxxx(xxxxx);
    });
});