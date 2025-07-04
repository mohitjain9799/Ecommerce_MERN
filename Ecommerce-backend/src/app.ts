import express from "express";
import { connectDB, connectRedis } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import { config } from "dotenv";
import morgan from "morgan";
import Stripe from "stripe";
import Razorpay from "razorpay"
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";



// Importing Routes
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import orderRoute from "./routes/order.js";
import paymentRoute from "./routes/payment.js";
import dashboardRoute from "./routes/stats.js";

config({
  path: "./.env",
});


//console.log(process.env)

const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || "";
const stripeKey = process.env.STRIPE_KEY || "";
const razorpayKey = process.env.RAZORPAY_KEY_ID || "";
const razorpaySecretKey = process.env.RAZORPAY_SECRET_KEY || "";
const redisURI = process.env.REDIS_URL || "";
const clientURL = process.env.CLIENT_URL || "";
const firebaseURL = process.env.FIREBASE_URL || "";
export const redisTTL = process.env.REDIS_TTL || 60 * 60 * 4;

connectDB(mongoURI);
import { createClient } from 'redis';

/*const client = Redis.createClient({
    password: 'Jz4pQqxcGOBCSPm9Hjvrw1lNwhIrwH1T',
    socket: {
        host: 'redis-16433.c9.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 16433
    }
});

client
  .connect()
  .then(() => {
    console.log("Connected to Redis");
  })
  .catch((err) => {
    console.error("Failed to connect to Redis:", err);
  });*/



export const redis = connectRedis(redisURI);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export const stripe = new Stripe(stripeKey);


export const pay = new Razorpay({ key_id: 'razorpayKey', key_secret: 'razorpaySecretKey' })


const app = express();

app.use(express.json());
app.use(morgan("dev"));
// CORS configuration for production (Vercel + Firebase)
const corsOptions = {
  origin: function (origin: string | undefined, callback: Function) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      clientURL,
      firebaseURL
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1 || !clientURL) {
      console.log('CORS allowed origin:', origin);
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});

// Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", dashboardRoute);

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});