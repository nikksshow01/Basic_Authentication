import { Router } from "express";
import create_User from "../controller/createuser.js";

const router = Router();

router.post("/create", create_User);

export default router;