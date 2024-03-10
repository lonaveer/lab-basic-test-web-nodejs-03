import request from 'supertest';
import app from '../../app/app2';

describe('User Management API', () => {
    let accessToken: string;

    beforeEach(async () => {
        // // ล้างข้อมูลผู้ใช้ทั้งหมด
        // await request(app).post('/reset');

        // // ลงทะเบียนผู้ใช้สำหรับการทดสอบ
        // const registerRes = await request(app)
        //     .xxxxx('xxxxx')
        //     .xxxxx({ username: 'testuser', password: 'testpass' });

        // // ตรวจสอบการลงทะเบียนสำเร็จ
        // expect(xxxxx).toEqual(xxxxx);

        // // เข้าสู่ระบบเพื่อรับ accessToken
        // const loginRes = await request(app)
        //     .xxxxx('xxxxx')
        //     .xxxxx({ username: 'testuser', password: 'testpass' });

        // // บันทึก accessToken สำหรับใช้ในการทดสอบ
        // accessToken = loginRes.body.accessToken;
    });

    // ทดสอบการลงทะเบียนผู้ใช้ใหม่
    test('should register a new user', async () => {
        // // Call API เพื่อลงทะเบียนผู้ใช้ใหม่
        // const res = await request(app)
        //     .xxxxx('xxxxx')
        //     .xxxxx({ username: 'newuser', password: 'newpass' });

        // // ตรวจสอบการลงทะเบียนผู้ใช้ใหม่ : ว่าขึ้น statusCode 200 หรือไม่
        // xxxxx(xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการลงทะเบียนผู้ใช้ใหม่ : ว่าขึ้น text 'User registered successfully' หรือไม่
        // xxxxx(xxxxx).xxxxx('xxxxx');
    });

    // ทดสอบการเข้าสู่ระบบและรับ token
    test('should login the user and return a token', async () => {
        // // Call API เพื่อเข้าสู่ระบบ
        // const res = await request(app)
        //     .xxxxx('xxxxx')
        //     .xxxxx({ xxxxx: 'xxxxx', xxxxx: 'xxxxx' });

        // // ตรวจสอบการเข้าสู่ระบบ : ว่าขึ้น statusCode 200 หรือไม่
        // xxxxx(res.xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการเข้าสู่ระบบ : ใน res.body ที่ได้มานั้น ต้องเป็น property 'accessToken'
        // xxxxx(xxxxx).toHaveProperty('xxxxx');
    });

    // ทดสอบการเข้าสู่ระบบด้วยชื่อผู้ใช้ที่ไม่มีอยู่จริง
    test('should return 401 for a non-existing user login attempt', async () => {
        // // Call API เพื่อเข้าสู่ระบบ
        // const xxxxx = await xxxxx(xxxxx)
        //     .xxxxxx('xxxxx')
        //     .xxxxx({
        //         username: 'nonExistingUser', // ใช้ชื่อผู้ใช้ที่ไม่มีอยู่จริง
        //         password: 'anyPassword',
        //     });

        // // ตรวจสอบการเข้าสู่ระบบ : ว่าขึ้น statusCode 401 หรือไม่
        // xxxxxx(xxxxx.xxxxx).xxxxx(xxxxxx);

        // // ตรวจสอบการเข้าสู่ระบบ : ใน res.text ที่ได้มานั้น ต้องเป็น 'Cannot find user or password is incorrect'
        // xxxxxx(xxxxx.xxxxxx).xxxxxx('xxxxxx');
    });

    // ทดสอบการเข้าสู่ระบบด้วยรหัสผ่านที่ไม่ถูกต้อง
    test('should return 401 for an incorrect password login attempt', async () => {
        // // Call API เพื่อเข้าสู่ระบบ
        // const xxxxxx = await xxxxxx(xxxxxx)
        //     .xxxxx('xxxxx')
        //     .xxxxx({
        //         xxxxx: 'testuser', // ใช้ชื่อผู้ใช้ที่มีอยู่จริง
        //         xxxxx: 'incorrectPassword', // ใช้รหัสผ่านที่ไม่ถูกต้อง
        //     });

        // // ตรวจสอบการเข้าสู่ระบบ : ว่าขึ้น statusCode 401 หรือไม่
        // xxxxx(xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการเข้าสู่ระบบ : ใน res.text ที่ได้มานั้น ต้องเป็น 'Cannot find user or password is incorrect'
        // xxxxx(xxxxx).xxxxx('xxxxx');
    });

    // ทดสอบการดูข้อมูลโปรไฟล์
    test('should return the user profile', async () => {
        // // Call API เพื่อดูข้อมูลโปรไฟล์
        // const xxxxxx = await xxxxx(xxxxx)
        //     .xxxxxx('xxxxxx')
        //     .set('Authorization', `Bearer ${accessToken}`);

        // // ตรวจสอบการดูข้อมูลโปรไฟล์ : ว่าขึ้น statusCode 200 หรือไม่
        // xxxxx(xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการดูข้อมูลโปรไฟล์ : ใน res.body ที่ได้มานั้น ต้องเป็น property 'username'
        // xxxxx(xxxxx).xxxxx('username', 'testuser');
    });

    // ทดสอบการดูข้อมูลโปรไฟล์ ที่ไม่มีอยู่จริง
    test('should return the user profile (Not Found)', async () => {
        // // ล้างข้อมูลผู้ใช้ทั้งหมด
        // await request(app).xxxxx('xxxxx');

        // // Call API เพื่อดูข้อมูลโปรไฟล์
        // const xxxxxx = await xxxxx(xxxxx)
        //     .xxxxxx('xxxxxx')
        //     .xxxxxx('xxxxx', `xxxxxx`);

        // // ตรวจสอบการดูข้อมูลโปรไฟล์ : ว่าขึ้น statusCode 404 หรือไม่
        // xxxxx(xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการดูข้อมูลโปรไฟล์ : ใน res.text ที่ได้มานั้น ต้องเป็น 'User not found'
        // xxxxx(xxxxx).xxxxx('xxxxx');
    });

    // ทดสอบการแก้ไขข้อมูลโปรไฟล์
    test('should update the user profile', async () => {
        // // Call API เพื่อแก้ไขข้อมูลโปรไฟล์
        // const xxxxx = await xxxxx(xxxxx)
        //     .xxxxx('xxxxx')
        //     .send({ username: 'updatedTestuser' })
        //     .set('Authorization', `Bearer ${accessToken}`);

        // // ตรวจสอบการแก้ไขข้อมูลโปรไฟล์ : ว่าขึ้น statusCode 200 หรือไม่
        // xxxxx(xxxxx).xxxxx(xxxxx);

        // // ตรวจสอบการแก้ไขข้อมูลโปรไฟล์ : ใน res.body ที่ได้มานั้น ต้องเป็น property 'username'
        // xxxxx(xxxxx).xxxxx('username', 'updatedTestuser');
    });

    // ทดสอบการแก้ไขข้อมูลโปรไฟล์ ที่ไม่มีอยู่จริง
    test('should update the user profile (Not Found)', async () => {
        // // ล้างข้อมูลผู้ใช้ทั้งหมด
        // xxxxxx

        // // Call API เพื่อแก้ไขข้อมูลโปรไฟล์
        // xxxxx

        // // ตรวจสอบการแก้ไขข้อมูลโปรไฟล์ : ว่าขึ้น statusCode 404 หรือไม่
        // xxxxx

        // // ตรวจสอบการแก้ไขข้อมูลโปรไฟล์ : ใน res.text ที่ได้มานั้น ต้องเป็น 'User not found'
        // xxxxx
    });

    // ทดสอบการลบโปรไฟล์ผู้ใช้
    test('should delete the user profile', async () => {
        // // // Call API เพื่อลบโปรไฟล์
        // const xxxxx = await xxxxx(xxxxx)
        //     .xxxxx('xxxxxx')
        //     .set('Authorization', `Bearer ${accessToken}`);

        // // ตรวจสอบการลบโปรไฟล์ : ว่าขึ้น statusCode 200 หรือไม่
        // xxxxx

        // // ตรวจสอบการลบโปรไฟล์ : ใน res.text ที่ได้มานั้น ต้องเป็น 'User deleted successfully'
        // xxxxx
    });

    // ทดสอบการลบโปรไฟล์ผู้ใช้ ที่ไม่มีอยู่จริง
    test('should delete the user profile (Not Found)', async () => {
        // // ล้างข้อมูลผู้ใช้ทั้งหมด
        // xxxxxx

        // // Call API เพื่อลบโปรไฟล์
        // xxxxx

        // // ตรวจสอบการลบโปรไฟล์ : ว่าขึ้น statusCode 404 หรือไม่
        // xxxxx

        // // ตรวจสอบการลบโปรไฟล์ : ใน res.text ที่ได้มานั้น ต้องเป็น 'User not found'
        // xxxxx
    });
});

describe('Token Authentication', () => {
    it('should return 401 if token is missing', async () => {
        // // Call API เพื่อดูข้อมูลโปรไฟล์
        // xxxxx

        // // ตรวจสอบการดูข้อมูลโปรไฟล์ : ว่าขึ้น statusCode 401 หรือไม่
        // xxxxx
    });

    it('should return 403 if token is invalid', async () => {
        // // Call API เพื่อดูข้อมูลโปรไฟล์
        // const xxxxx = await xxxxx(xxxxx)
        //     .xxxxxx('xxxxx')
        //     .set('Authorization', 'Bearer invalidToken'); // ส่ง token ที่ไม่ถูกต้อง

        // ตรวจสอบการดูข้อมูลโปรไฟล์ : ว่าขึ้น statusCode 403 หรือไม่
        // xxxxx
    });
});