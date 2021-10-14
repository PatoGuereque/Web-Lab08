import express from "express";
import { getWaitlist } from "../db";

const waitlistRoute = express();

waitlistRoute.get("/waitlisttables", (_req, res) =>
  res.status(200).json(getWaitlist())
);

export default waitlistRoute;
