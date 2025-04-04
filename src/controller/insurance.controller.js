import insuranceModel from "../models/insurance.model.js";

// Desc: Get all insurance details
export const getInsuranceDetails = async (req, res) => {
    try {
        const insuranceDetails = await insuranceModel.find();
        return res.status(200).json(insuranceDetails);
    } catch (error) {
        console.error("Error in getInsuranceDetails controller:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Desc: Add insurance details
export const addInsuranceDetails = async (req, res) => {
    const { 
        insuranceType, 
        insuranceCompany, 
        policyNumber, 
        coverageAmount, 
        premiumAmount, 
        insuranceMarks, 
        insuranceStartDate, 
        insuranceEndDate 
    } = req.body;

    try {
        // Validate required fields
        if (!insuranceType || !insuranceCompany || !policyNumber || !coverageAmount || !premiumAmount) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Validate numerical fields
        if (isNaN(coverageAmount) || isNaN(premiumAmount) || isNaN(policyNumber)) {
            return res.status(400).json({ message: "Coverage, Premium amounts, and Policy number must be numbers" });
        }

        if (coverageAmount <= 0 || premiumAmount <= 0) {
            return res.status(400).json({ message: "Coverage and Premium amounts must be greater than zero" });
        }

        // Validate string lengths
        if (insuranceType.length < 3 || insuranceType.length > 50) {
            return res.status(400).json({ message: "Insurance type must be between 3 and 50 characters" });
        }

        if (String(policyNumber).length < 5) {
            return res.status(400).json({ message: "Policy number must be at least 5 digits" });
        }

        // Validate insurance marks
        if (insuranceMarks !== undefined) {
            if (insuranceMarks <= 5) {
                return res.status(400).json({ message: "Least trustworthy" });
            } else if (insuranceMarks > 5 && insuranceMarks <= 8) {
                return res.status(400).json({ message: "Average trustworthy" });
            } else if (insuranceMarks > 8) {
                return res.status(400).json({ message: "Most trustworthy" });
            }
        }

        // Validate dates
        const now = Date.now();
        if (insuranceStartDate && insuranceEndDate) {
            const startDate = new Date(insuranceStartDate);
            const endDate = new Date(insuranceEndDate);

            if (startDate > endDate) {
                return res.status(400).json({ message: "Insurance start date cannot be after end date" });
            }

            if (now > endDate) {
                return res.status(400).json({ message: "Insurance has expired" });
            }

            if (now < startDate) {
                return res.status(400).json({ message: "Insurance has not started yet" });
            }
        }

        // Create new insurance record
        const newInsurance = new insuranceModel({
            insuranceType,
            insuranceCompany,
            policyNumber,
            coverageAmount,
            premiumAmount,
            insuranceStartDate,
            insuranceEndDate
        });

        await newInsurance.save();

        return res.status(201).json(newInsurance);

    } catch (error) {
        console.error("Error in addInsuranceDetails controller:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};
