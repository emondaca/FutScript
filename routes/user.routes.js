import { Router } from "express";

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { reportarConsulta } from "../middlewares/reports.middleware.js";

import { jugadores } from '../controllers/jugadores.js'
import { equipos }  from '../controllers/equipos.js'
import { logIn } from '../controllers/login.js'

const router = Router();

router.post("/login", logIn.login)

router.get("/equipos", reportarConsulta, authMiddleware, equipos.obtenerEquipos)
router.post("/equipos", reportarConsulta, authMiddleware, equipos.agregarEquipo)

router.get("/equipos/:teamID/jugadores", reportarConsulta, authMiddleware, jugadores.obtenerJugadores)
router.post("/equipos/:teamID/jugadores", reportarConsulta, authMiddleware, jugadores.registrarJugador)

export default router;