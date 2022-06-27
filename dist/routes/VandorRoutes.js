"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenderRoutes = void 0;
var express_1 = __importDefault(require("express"));
var VendorController_1 = require("../controllers/VendorController");
var middleware_1 = require("../middleware");
var multer_1 = __importDefault(require("multer"));
var router = express_1.default.Router();
exports.VenderRoutes = router;
var imageStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./images");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
var images = (0, multer_1.default)({ storage: imageStorage }).array("images", 10);
router.post("/login", VendorController_1.VendorLogin);
router.use(middleware_1.Authenticate);
router.get("/profile", VendorController_1.GetVendorProfile);
router.patch("/profile", VendorController_1.UpdateVendorProfile);
router.patch("/coverimage", images, VendorController_1.UpdateVendorCoverImage);
router.patch("/service", VendorController_1.UpdateVendorService);
router.post("/food", images, VendorController_1.AddFood);
router.get("/food", VendorController_1.GetFoods);
//Offers
// router.get('/offers', GetOffers);
// router.post('/offer', AddOffer);
// router.put('/offer/:id', EditOffer)
router.get("/", function (req, res, next) {
    res.json({ message: "Hello from  Admin" });
});
//# sourceMappingURL=VandorRoutes.js.map