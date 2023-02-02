"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = promise_1.default.createPool({
    host: process.env.DB_HOSTNAME || 'localhost',
    user: process.env.DB_USER || 'root',
    port: 3306,
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'books_api',
});
