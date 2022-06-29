import express, { Request, Response, NextFunction } from "express";
import {
  AddFood,
  AddOffer,
  EditOffer,
  GetFoods,
  GetOffers,
  GetOrderDetails,
  GetVendorProfile,
  ProcessOrder,
  UpdateVendorCoverImage,
  UpdateVendorProfile,
  UpdateVendorService,
  VendorLogin,
} from "../controllers/VendorController";
import { Authenticate } from "../middleware";
import multer from "multer";
import { GetOrders } from "../controllers/CustomerController";

const router = express.Router();

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const images = multer({ storage: imageStorage }).array("images", 10);

router.post("/login", VendorLogin);

router.use(Authenticate);

router.get("/profile", GetVendorProfile);
router.patch("/profile", UpdateVendorProfile);
router.patch("/coverimage", images, UpdateVendorCoverImage);
router.patch("/service", UpdateVendorService);

router.post("/food", images, AddFood);
router.get("/food", GetFoods);

//Offers
router.get('/offers', GetOffers);
router.post('/offer', AddOffer);
router.put('/offer/:id', EditOffer);



router.get('/orders', GetOrders);
router.put('/order/:id/process', ProcessOrder);
router.get('/order/:id', GetOrderDetails)



router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello from  Admin" });
});

export { router as VenderRoutes };
