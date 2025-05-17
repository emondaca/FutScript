import bcript from "bcryptjs";


import { userModel } from "../models/user.model.js"


const obtenerEquipos = async (req, res) => {
    const equipos = await userModel.getTeams();
    res.json(equipos);
};

const agregarEquipo = async (req, res) => {
    const equipo = req.body;
    await userModel.addTeam(equipo);
    res.send({ message: "Equipo agregado con éxito" });
};

export const equipos = { 
    obtenerEquipos, 
    agregarEquipo 
};