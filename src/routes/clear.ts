import express from "express";
import { clearData } from "../db";

const clearRoute = express();

clearRoute.post("/clear", (_req, res) => {
  clearData();
  return res.status(200).json({
    success: true,
  });
});

export default clearRoute;
