"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes/routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../public/views'));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(routes_1.default);
const http = require('http');
const server = http.createServer(app);
const io = new socket_io_1.Server(server, { connectionStateRecovery: {} });
let messages = []; // Array to store messages
const users = [];
io.on('connection', (client) => {
    console.log('seja bem vindo');
    client.on('message', (data) => {
        io.emit("response", "ok");
    });
});
server.listen(3000, () => {
    console.log('connectado');
});
