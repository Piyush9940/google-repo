import speedModel from "../models/dashboard.model.js";
// Desc: Get speed limit
export const speed = async (req, res) => {
  const speedLimit = async (req, res) => { 
    try {
        const speedLimit = await speed.find();
        return res.status(200).json(speedLimit);
    } catch (error) {
        console.error("Error in speedLimit controller:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}
// Desc: Record speed

  const speedRecord = async (req, res) => {
    const { CurrentSpeed, speedLimit, speedStatus } = req.body;

    try {
        if (!CurrentSpeed || !speedLimit || !speedStatus) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newSpeed = new speed({
            CurrentSpeed,
        });
        if(speedLimit>=CurrentSpeed){
            newSpeed.speedStatus="Normal";}
        else{
            newSpeed.speedStatus="OverSpeed";
        }

        await newSpeed.save();

        return res.status(201).json({
            _id: newSpeed._id,
            CurrentSpeed: newSpeed.CurrentSpeed,
            speedLimit: newSpeed.speedLimit,
            speedStatus: newSpeed.speedStatus,
        });

    } catch (error) {
        console.error("Error in speedRecord controller:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}
}