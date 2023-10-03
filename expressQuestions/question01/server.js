import mongoose from "mongoose";
import app from "./src/app.js";
import config from "./src/config/index.js";

(async () => {
  try {
    await mongoose.connect(config.MONGODB_URL);
    console.log("DB connected !");

    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(config.PORT, () => {
      console.log(`Server is up and running on PORT ${config.PORT}`);
    });
  } catch (error) {
    console.log("Error in MongoDB ${error}");
  }
})();
