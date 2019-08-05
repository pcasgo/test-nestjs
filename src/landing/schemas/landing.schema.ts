import * as mongoose from 'mongoose';
export const LandingSchema = new mongoose.Schema({
    rut:String,
    name: String,
    email: String,    
    phone: String
}); 