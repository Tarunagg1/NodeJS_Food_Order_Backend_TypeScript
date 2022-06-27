import express, { Request, Response, NextFunction } from "express";
import { CreateVandor, GetVandorByID, GetVanndors } from "../controllers";

const router = express.Router();

router.post('/',CreateVandor);
router.get('/vendor',GetVanndors);
router.get('/vendor/:id',GetVandorByID);


router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from  Admin" });
});

export { router as AdminRoutes };
