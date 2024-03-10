module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true, 						// show test details
	collectCoverage: true, 				// ใช้เพื่อกำหนดว่า Jest ควรคำนวณความครอบคลุมของโค้ดหรือไม่เมื่อทำการทดสอบ
    collectCoverageFrom: [
		"<rootDir>/src/**/*.ts", 		// ทำการ Test Coverage : ไฟล์ TypeScript ทั้งหมดในโฟลเดอร์ src
    	"!<rootDir>/src/**/*.test.ts", 	// ยกเว้นไฟล์ TypeScript ประเภท test ทั้งหมด
    ],
	testMatch: [
		'<rootDir>/src/test/unit-test/**/*.test.ts'
	],									// ทำการรันเฉพาะไฟล์ Test ที่อยู่ในโฟลเดอร์ test/unit-test
};