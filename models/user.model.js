import "dotenv/config"

import format from "pg-format";

import { pool } from "../db/connection.js";


const getTeams = async () => {
    const {rows} = await pool.query("SELECT * FROM equipos");
    return rows;
}

const getPlayers = async (teamID) => {
    const {rows} = await pool.query(`SELECT jugadores.name as name, posiciones.name as posicion
        FROM jugadores INNER JOIN posiciones ON jugadores.position = posiciones.id 
        INNER JOIN equipos ON jugadores.id_equipo = equipos.id WHERE 
        jugadores.id_equipo = ${teamID}`);
    return rows;
}

const addTeam = async (equipo) => {
    const registrar = "INSERT INTO equipos VALUES (DEFAULT, $1)";
    const values = [equipo.name];
    const resp = await pool.query(registrar, values);
    return resp;
}

const addPlayer = async ({ jugador, teamID }) => {
    const registrar = "INSERT INTO jugadores VALUES (DEFAULT, $1, $2, $3)"
    const values = [teamID, jugador.name, jugador.position];
    const resp = await pool.query(registrar, values);
    return resp;
};

export const userModel = { 
    getTeams, 
    addTeam, 
    getPlayers, 
    addPlayer 
};

