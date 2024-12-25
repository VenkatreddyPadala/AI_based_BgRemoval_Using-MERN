import { Webhook } from 'svix';
import userModel from '../models/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

const clerkWebhooks = async (req, res) => {
    try {
        // Verify webhook signature
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        });

        const { data, type } = req.body;

        switch (type) {
            case "user.created": {
                const existingUser = await userModel.findOne({ clerkId: data.id });
                if (existingUser) {
                    return res.status(200).json({ success: true, message: "User already exists" });
                }
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0]?.email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url,
                };
                await userModel.create(userData);
                res.status(201).json({ success: true, message: "User created successfully" });
                break;
            }
            case "user.updated": {
                const userData = {
                    email: data.email_addresses[0]?.email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url,
                };
                await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
                res.status(200).json({ success: true, message: "User updated successfully" });
                break;
            }
            case "user.deleted": {
                await userModel.findOneAndDelete({ clerkId: data.id });
                res.status(200).json({ success: true, message: "User deleted successfully" });
                break;
            }
            default: {
                res.status(400).json({ success: false, message: "Unhandled webhook event type" });
                break;
            }
        }
    } catch (error) {
        console.error("Webhook Error:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { clerkWebhooks };
