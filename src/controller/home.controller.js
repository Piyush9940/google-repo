import homeModel from "../models/home.model";
export const home=async (req, res) => {
    try {
        const homeData = await homeModel.find();
        return res.status(200).json(homeData);
    } catch (error) {
        console.error("Error in home controller:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}
 