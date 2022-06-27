"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryRoute = void 0;
var express_1 = __importDefault(require("express"));
var DeliveryController_1 = require("../controllers/DeliveryController");
var middleware_1 = require("../middleware");
var router = express_1.default.Router();
exports.DeliveryRoute = router;
/* ------------------- Signup / Create Customer --------------------- */
router.post("/signup", DeliveryController_1.DeliverySignUp);
/* ------------------- Login --------------------- */
router.post("/login", DeliveryController_1.DeliveryLogin);
/* ------------------- Authentication --------------------- */
router.use(middleware_1.Authenticate);
/* ------------------- Change Service Status --------------------- */
router.put("/change-status", DeliveryController_1.UpdateDeliveryUserStatus);
/* ------------------- Profile --------------------- */
router.get("/profile", DeliveryController_1.GetDeliveryProfile);
router.patch("/profile", DeliveryController_1.EditDeliveryProfile);
//# sourceMappingURL=DeliveryRoutes.js.map