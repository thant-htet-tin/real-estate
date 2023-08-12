import express from "express";
import {
  createResidency,
  getAllResidencies,
  getResidencyById,
} from "../controllers/residencyController.js";

const router = express.Router();

router.get("/", getAllResidencies);
router.get("/:id", getResidencyById);
router.post("/create", createResidency);


export { router as residencyRoute };