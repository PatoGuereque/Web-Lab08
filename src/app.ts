import express from "express";
import morgan from "morgan";
import path from "path";
import tableRoute from "./routes/tables";
import waitlistRoute from "./routes/waitlist";
import clearRoute from "./routes/clear";

const app = express();

/**
 * Middlewares
 */
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Routes
 */
app.use("/api", tableRoute);
app.use("/api", waitlistRoute);
app.use("/api", clearRoute);

/**
 * Static content
 */
const staticFolder = path.join(__dirname, "../static");
app.get("/", (_req, res) => {
  res.sendFile(path.join(staticFolder, "index.html"));
});

app.use(
  express.static(staticFolder, {
    extensions: ["html"],
  })
);

export { app };
