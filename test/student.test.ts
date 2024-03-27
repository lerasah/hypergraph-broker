import request from "supertest";
import app from "../app";
// import { Student } from "../models/Student";

// describe("Add Student", () => {
//     const tenYearsAgo = new Date();
//     tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

// 	const student = {
//         "firstName":"john",
//         "familyName":"doe",
//         "dob": tenYearsAgo.toISOString().substring(0,10),
//         "email":"jd@example.com"
//     };

// 	test("Should have key record and msg when added", async () => {
// 		const mockCreateStudent = jest.fn((): any => student);
// 		jest
// 			.spyOn(Student, "create")
// 			.mockImplementation(() => mockCreateStudent());

// 		const res = await request(app).post("/api/v1/students/add").send(student);

// 		expect(mockCreateStudent).toHaveBeenCalledTimes(1);
//         expect(res.status).toEqual(201);
// 		expect(res.body).toHaveProperty("msg");
// 		expect(res.body).toHaveProperty("record");
// 	});

// 	test("Should handle exception", async () => {
// 		const mockCreateStudent = jest.fn((): any => {
// 			throw "error";
// 		});
// 		jest
// 			.spyOn(Student, "create")
// 			.mockImplementation(() => mockCreateStudent());

// 		const res = await request(app).post("/api/v1/students/add").send(student);

// 		expect(mockCreateStudent).toHaveBeenCalledTimes(1);
// 		expect(res.body).toEqual({
// 			msg: "Failed to add record"
// 		})
//         expect(res.status).toEqual(500);
// 	});

// 	test("Should handle request param", async () => {
// 		const res = await request(app).post("/api/v1/students/add").send({});
//         expect(res.body).toEqual([                                                                                                             
// 			{                                                                                                           
// 			  type: 'field',                                                                                            
// 			  msg: 'Invalid value',                                                                                     
// 			  path: 'firstName',                                                                                        
// 			  location: 'body'
// 			},
// 			{
// 			  type: 'field',
// 			  msg: 'Invalid value',
// 			  path: 'familyName',
// 			  location: 'body'
// 			},
// 			{
// 			  type: 'field',
// 			  msg: 'Invalid value',
// 			  path: 'email',
// 			  location: 'body'
// 			},
// 			{
// 			  type: 'field',
// 			  msg: 'Invalid value',
// 			  path: 'dob',
// 			  location: 'body'
// 			}
// 		  ]);
//         expect(res.status).toEqual(400);
// 	});

//     test("Should handle birthdays less than 10y", async () => {
//         const today = new Date();

// 		const res = await request(app).post("/api/v1/students/add").send({
//             "firstName":"john",
//             "familyName":"doe",
//             "dob": today.toISOString().substring(0,10),
//             "email":"jd@example.com"
//         });

// 		expect(res.body[0].msg).toEqual("Student should be at least 10 years old");
//         expect(res.body[0].path).toEqual('dob');
//         expect(res.status).toEqual(400);
// 	});
// });
