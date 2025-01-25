const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Qkkx4KdLRsFeXSdEgvpU3qC25XlTgRiu1GFquhHcqf8aihbkjGbYlp0vUxniUcRpFfRYNVVJfYJXAtYXhb0Ldm200cH9ltjnb");

// Initialize Firebase Admin
admin.initializeApp();

// API

// App config
const app = express(); // Fixed typo "cont" to "const"

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello, World!"));

app.post("/payments/create", async (request, response) => {  // Fixed typo here
    const total = request.query.total;

    console.log("Payment request received for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app); // Fixed typo "htttp" to "https"

// example endpoint
// http://127.0.0.1:5001/buy-and-go-efb48/us-central1/api
