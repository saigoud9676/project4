const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {

    const userMessage = req.body.message;

    try {

        // AI integration will go here

        const reply =
            `You asked: ${userMessage}`;

        res.json({
            reply: reply
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            reply: "AI service error."
        });
    }
});

app.listen(5000, () => {
    console.log(
        "QuickAI backend running on port 5000"
    );
});