import express from "express";
import { getData,sendData,hellofunction } from "../Controllers/usercontroller.js";
const router = express.Router();

router.get("/get-face-data",getData);
router.post("/store-face-data",sendData);
router.get("/hello",hellofunction);
export default router