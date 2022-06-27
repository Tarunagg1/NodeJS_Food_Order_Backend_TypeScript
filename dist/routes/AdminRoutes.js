"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../controllers");
var router = express_1.default.Router();
exports.AdminRoutes = router;
router.post('/', controllers_1.CreateVandor);
router.get('/vendor', controllers_1.GetVanndors);
router.get('/vendor/:id', controllers_1.GetVandorByID);
router.get("/", function (req, res) {
    res.json({ message: "Hello from  Admin" });
});
//# sourceMappingURL=AdminRoutes.js.map