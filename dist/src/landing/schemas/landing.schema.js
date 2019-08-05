"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.LandingSchema = new mongoose.Schema({
    rut: String,
    name: String,
    email: String,
    phone: String
});
//# sourceMappingURL=landing.schema.js.map