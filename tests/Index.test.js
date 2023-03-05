import request from "supertest";
import app from "../src/app.js";
import {createBlog} from "./blog.mocks/createBlog.js";
import {signUpdata} from "./user.mocks/userSignup.js";
import {invalidUsercredentilas, validUserCredentials} from "./user.mocks/userLogin.js";

describe('My brand Api Test', () =>{

    test('Signup with fully Data', async() => {
        const response = await request(app)
            .post('/api/v1/signup')
            .send(signUpdata);
        expect(response.statusCode).toBe(201);
    })
    test('Login with valid credentials', async() => {
        const response = await request(app)
            .post('/api/v1/login')
            .send(validUserCredentials);
        expect(response.statusCode).toBe(200);
    })

    test('Login with invalid credentials' ,async () => {
        const response=await request(app)
            .post('/api/v1/login')
            .send(invalidUsercredentilas);
        expect(response.statusCode).toBe(400);
    })
    test('Add new Blog for unauthorized user', async() => {
        const response = await request(app)
            .post('/api/v1/blogs')
            .send(createBlog);
        expect(response.statusCode).toBe(401);
    })
    test('Add new Blog for unauthorized user', async() => {
        const response = await request(app)
            .post('/api/v1/blogs')
            .send(createBlog);
        expect(response.statusCode).toBe(401);
    })



})