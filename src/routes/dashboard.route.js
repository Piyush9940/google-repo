// Desc: Dashboard routes
import { speed  } from "../controller/speed.controller.js";
import { getInsuranceDetails,addInsuranceDetails } from "../controller/insurance.controller.js";


// Import necessary modules and controllers

import express from "express";
const router = express.Router;
// Routes


router.post("/speed", speed);
router.post("/insurance",getInsuranceDetails);
router.post("/insurance/add",addInsuranceDetails);


 
 
// Export the router
const dashboard = router;
export default dashboard;
// Compare this snippet from backend/src/models/dashboard.model.js:


