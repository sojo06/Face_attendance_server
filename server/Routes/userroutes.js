import express from "express";
import { getData,sendData } from "../Controllers/usercontroller.js";
const router = express.Router();

router.get("/get-face-data",getData);
router.post("/store-face-data",sendData);
export default router