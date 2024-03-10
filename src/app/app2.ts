import express, { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';

interface User {
    username: string;
    password: string;
}
interface JwtPayload {
    username: string;
}
interface CustomRequest extends Request {
    user?: JwtPayload;
}

const app = express(); // สร้าง instance ของ express app
app.use(bodyParser.json()); // ใช้งาน bodyParser เพื่อแปลง body ของ request เป็น JSON

let users: User[] = []; // จำลองว่า นี่คือ Database ของผู้ใช้งาน
const JWT_SECRET = 'your_secret_key_here';

// Middleware สำหรับตรวจสอบ JWT
const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user as JwtPayload;
        next();
    });
};

// ลงทะเบียนผู้ใช้งาน
app.post('/register', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };
    users.push(user);
    res.status(201).send('User registered successfully');
});

// เข้าสู่ระบบ
app.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Cannot find user or password is incorrect');
    }
    const accessToken = jwt.sign({ username: user.username }, JWT_SECRET);
    res.json({ accessToken });
});

// ดูข้อมูลโปรไฟล์
app.get('/myProfile', authenticateToken, (req: CustomRequest, res: Response) => {
    const user = users.find(user => user.username === req.user!.username);
    if (!user) return res.status(404).send('User not found');
    res.json({ username: user.username });
});

// แก้ไขข้อมูลโปรไฟล์
app.put('/myProfile', authenticateToken, (req: CustomRequest, res: Response) => {
    const user = users.find(user => user.username === req.user!.username);
    if (!user) return res.status(404).send('User not found');
    user.username = req.body.username;
    res.json({ username: user.username });
});

// ลบข้อมูลโปรไฟล์
app.delete('/myProfile', authenticateToken, (req: CustomRequest, res: Response) => {
    const index = users.findIndex(user => user.username === req.user!.username);
    if (index === -1) return res.status(404).send('User not found');
    users.splice(index, 1);
    res.send('User deleted successfully');
});

// ล้างข้อมูลผู้ใช้ทั้งหมด
app.post('/reset', (req: Request, res: Response) => {
    users = [];
    res.send('Test state reset successfully');
});

export default app;
