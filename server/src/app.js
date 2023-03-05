import express from "express";
import PokemonRouter from "./routes/pokemon.router.js";
import session from "./config/session.js";
import passport from "passport";
import multer from "multer";
import passportConfig from "./config/passport.js";
import * as TrainerService from "./services/trainer.service.js"
import cors from 'cors'
import { configAuthRouter } from "./routes/auth.router.js";
import multerConfig from "./config/multer.config.js";
import corsMiddleware from "./middleware/cors.middleware.js";
import BoxRouter from "./routes/box.router.js";
const app = express();

// * Data on wire
app.set("trust proxy", 1);
app.use(cors({origin: "http://localhost:3000", 
credentials: true, 
methods: "GET, POST, PUT, DELETE"}));
app.use(corsMiddleware); 

// configuro el servidor
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuro las rutas estatica
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
//--------------------------------------------
// configuro sesion
app.use(session);


// passportConfig -> passport + strategy
passportConfig(passport, TrainerService)
// passport.authenticate()
app.use(passport.initialize());
app.use(passport.session());
//--------------------------------------------
// configuro multer

const upload = multer({ storage: multerConfig });

const authRouter = express.Router();

configAuthRouter(authRouter, upload, passport);

app.use("/api/auth", authRouter);

app.use("/api/pokemon", PokemonRouter);
app.use("/api/box", BoxRouter)

export default app;
