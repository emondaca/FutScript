import request from 'supertest';
import server from "../index.js";


describe("Pruebas de operaciones CRUD de FutScript", () => {
    it("Obtención de status y formato correcto a consutla GET/equipos", async () => {
        const response = await request(server).get("/equipos").setEncoding();
        const status = response.statusCode;
        console.log(response);
        expect(status).toBe(200);
        expect(typeof(response)).toBe("object");
    });

    it("Al enviar credenciales correctas como login se obtiene una respuesta tipo Object", async () => {
        const administrador = {}
        const response = await request(server).post("login").send(administrador);
        console.log(response);
        expect(typeof(response).toBe("object"));
    });

    it("Al enviar credenciales incorrectas como login se obtiene un status code 400", async () => {
        const administrador = {"username": "eduardo", "password": "1234"};
        const response = await request(server).post(logIn).send(administrador);
        const status = response.statusCode;
        console.log(status);
        expect(status).toBe(400);
    });

    it("Creacion de nuevo jugador en ruta POST /equipos/:teamID/jugadores se obtiene status code 201"), async () => {
        const administrador = {"username": "eduardo", "password": "1234"};
        const response1 = await request(server).post(logIn).send(administrador);
        token = response1.token;
        const response = (await request(server).post("equipos/2/jugadores")).send({Authorization: `Bearer ${token}`, name: "Alexis Sánchez"});
        const status = response.statusCode;
        expect(status).toBe(201);
    }    
});