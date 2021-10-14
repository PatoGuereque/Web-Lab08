import express from "express";
import morgan from "morgan";
import tableRoute from "./routes/tables";
import waitlistRoute from "./routes/waitlist";
import path from "path";

const app = express();

/**
 * Middlewares
 */
app.use(morgan("combined"));
app.use(express.json());

/**
 * Routes
 */
app.use("/api", tableRoute);
app.use("/api", waitlistRoute);

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
