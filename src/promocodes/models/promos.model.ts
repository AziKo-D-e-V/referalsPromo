import { Schema, model } from "mongoose";



export const PromoSchema = new Schema({
    promo : {
        type : String,
        required : true
    },
    companyId : {
        type : Schema.Types.ObjectId,
        ref : 'markets' 
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'users' 
    }
})


export const  PromoModule = model("PromoCodes", PromoSchema)