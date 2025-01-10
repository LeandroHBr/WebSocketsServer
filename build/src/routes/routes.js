"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controlers/controller");
const router = (0, express_1.Router)();
router.post("/", controller_1.SingIn);
router.get("/", (req, res) => {
    res.render("index");
});
router.get("/lobby", controller_1.User_verify, controller_1.teste);
exports.default = router;
