"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teste = exports.User_verify = exports.SingIn = void 0;
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
const db_1 = require("../../db/db");
const SingIn = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    (0, auth_1.signInWithEmailAndPassword)(db_1.auth, email, password).then(data => {
        return res.redirect("/lobby");
    }).catch(e => {
        return res.send("acesso negado");
    });
};
exports.SingIn = SingIn;
const User_verify = (req, res, next) => {
    (0, auth_1.onAuthStateChanged)(db_1.auth, (user) => {
        if (user) {
            next();
        }
        else {
            res.send("teste");
        }
    });
};
exports.User_verify = User_verify;
const teste = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (db_1.auth.currentUser) {
        const docRef = (0, firestore_1.doc)(db_1.db, "reservatórios", db_1.auth.currentUser.uid);
        const docSnap = yield (0, firestore_1.getDoc)(docRef);
        if (docSnap.exists()) {
            res.render("lobby", { data: docSnap.data() });
        }
        else {
            res.send("errou");
        }
    }
});
exports.teste = teste;
