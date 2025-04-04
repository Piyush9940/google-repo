import mongoose from "mongoose";
const insuranceSchema = new mongoose.Schema(
{
    insuranceType: {
        type: String,
        required: true,
    },
    insuranceAmount: {
        type: Number,
        required: true,
    },
    insuranceStatus: {
        type: String,
        required: true,
        default: "Active",
    },
    insuranceStartDate: {
        type: Date,
        required: true,
    },
    insuranceEndDate: {
        type: Date,
        required: true,
    },
    insuranceMarks: {
        type: Number,
        required: true,
    },
},
{ timestamps: true }
);
const insuranceModel = mongoose.model("Insurance", insuranceSchema);
// insuranceModel.createIndexes({ insuranceType: 1, insuranceCompany: 1 }, { unique: true });
export default insuranceModel;