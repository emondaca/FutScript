import { userModel } from "../models/user.model.js"

const obtenerJugadores = async (req, res) => {
    const { teamID } = req.params;
    const jugadores = await userModel.getPlayers(teamID);
    res.json(jugadores);
};

const registrarJugador = async (req, res) => {
    const { teamID } = req.params;
    const jugador = req.body;
    await userModel.addPlayer({ jugador, teamID });
    res.json({ message: "Jugador agregado con éxito" });
};


export const jugadores = {
    obtenerJugadores, 
    registrarJugador 
};