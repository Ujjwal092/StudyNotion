const { createClient } = require("redis");

const redisClient = createClient({
  url: process.env.REDIS_URL,
  socket: {
    tls: true,
    rejectUnauthorized: false,
  },
});

redisClient.on("error", (err) => {
  console.log("❌ Redis Error:", err);
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("✅ Redis Connected");
  } catch (error) {
    console.log("❌ Redis Connection Failed", error);
  }
};

module.exports = { redisClient, connectRedis };
