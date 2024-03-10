import request from 'supertest';
import app from '../../app/app2';

describe('User Management API', () => {
    let accessToken: string;

    beforeEach(async () => {
        // ล้างข้อมูลผู้ใช้ทั้งหมด
        await request(app).post('/reset');

        // ลงทะเบียนผู้ใช้สำหรับการทดสอบ
        const registerRes = await request(app)
            .post('/register')
            .send({ username: 'testuser', password: 'testpass' });

        // ตรวจสอบการลงทะเบียนสำเร็จ
        expect(registerRes.statusCode).toEqual(201);

        // เข้าสู่ระบบเพื่อรับ accessToken
        const loginRes = await request(app)
            .post('/login')
            .send({ username: 'testuser', password: 'testpass' });

        accessToken = loginRes.body.accessToken; // บันทึก accessToken สำหรับใช้ในการทดสอบ
    });

    // ทดสอบการลงทะเบียนผู้ใช้ใหม่
    test('should register a new user', async () => {
        const res = await request(app)
            .post('/register')
            .send({ username: 'newuser', password: 'newpass' });
        expect(res.statusCode).toEqual(201);
        expect(res.text).toEqual('User registered successfully');
    });

    // ทดสอบการเข้าสู่ระบบและรับ token
    test('should login the user and return a token', async () => {
        const res = await request(app)
            .post('/login')
            .send({ username: 'testuser', password: 'testpass' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('accessToken');
    });

    // ทดสอบการเข้าสู่ระบบด้วยชื่อผู้ใช้ที่ไม่มีอยู่จริง
    test('should return 401 for a non-existing user login attempt', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                username: 'nonExistingUser', // ใช้ชื่อผู้ใช้ที่ไม่มีอยู่จริง
                password: 'anyPassword',
            });
        expect(res.statusCode).toEqual(401);
        expect(res.text).toEqual('Cannot find user or password is incorrect');
    });

    // ทดสอบการเข้าสู่ระบบด้วยรหัสผ่านที่ไม่ถูกต้อง
    test('should return 401 for an incorrect password login attempt', async () => {
        // ตั้งสมมติฐานว่า 'testuser' คือชื่อผู้ใช้ที่ถูกลงทะเบียนไว้แล้ว
        const res = await request(app)
            .post('/login')
            .send({
                username: 'testuser', // ใช้ชื่อผู้ใช้ที่มีอยู่จริง
                password: 'incorrectPassword', // ใช้รหัสผ่านที่ไม่ถูกต้อง
            });
        expect(res.statusCode).toEqual(401);
        expect(res.text).toEqual('Cannot find user or password is incorrect');
    });

    // ทดสอบการดูข้อมูลโปรไฟล์
    test('should return the user profile', async () => {
        const res = await request(app)
            .get('/myProfile')
            .set('Authorization', `Bearer ${accessToken}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('username', 'testuser');
    });

    // ทดสอบการดูข้อมูลโปรไฟล์ ที่ไม่มีอยู่จริง
    test('should return the user profile (Not Found)', async () => {
        await request(app).post('/reset'); // ล้างข้อมูลผู้ใช้ทั้งหมด
        const res = await request(app)
            .get('/myProfile')
            .set('Authorization', `Bearer ${accessToken}`);
        expect(res.statusCode).toEqual(404);
        expect(res.text).toEqual('User not found');
    });

    // ทดสอบการแก้ไขข้อมูลโปรไฟล์
    test('should update the user profile', async () => {
        const res = await request(app)
            .put('/myProfile')
            .send({ username: 'updatedTestuser' })
            .set('Authorization', `Bearer ${accessToken}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('username', 'updatedTestuser');
    });

    // ทดสอบการแก้ไขข้อมูลโปรไฟล์ ที่ไม่มีอยู่จริง
    test('should update the user profile (Not Found)', async () => {
        await request(app).post('/reset'); // ล้างข้อมูลผู้ใช้ทั้งหมด
        const res = await request(app)
            .put('/myProfile')
            .send({ username: 'updatedTestuser' })
            .set('Authorization', `Bearer ${accessToken}`);
        expect(res.statusCode).toEqual(404);
        expect(res.text).toEqual('User not found');
    });

    // ทดสอบการลบโปรไฟล์ผู้ใช้
    test('should delete the user profile', async () => {
        const res = await request(app)
            .delete('/myProfile')
            .set('Authorization', `Bearer ${accessToken}`);
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('User deleted successfully');
    });

    // ทดสอบการลบโปรไฟล์ผู้ใช้ ที่ไม่มีอยู่จริง
    test('should delete the user profile (Not Found)', async () => {
        await request(app).post('/reset'); // ล้างข้อมูลผู้ใช้ทั้งหมด
        const res = await request(app)
            .delete('/myProfile')
            .set('Authorization', `Bearer ${accessToken}`);
        expect(res.statusCode).toEqual(404);
        expect(res.text).toEqual('User not found');
    });
});

describe('Token Authentication', () => {
    it('should return 401 if token is missing', async () => {
        const res = await request(app).get('/myProfile');
        expect(res.statusCode).toEqual(401);
    });

    it('should return 403 if token is invalid', async () => {
        const res = await request(app)
            .get('/myProfile')
            .set('Authorization', 'Bearer invalidToken'); // ส่ง token ที่ไม่ถูกต้อง
        expect(res.statusCode).toEqual(403);
    });
});