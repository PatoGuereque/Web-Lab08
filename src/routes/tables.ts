import express from "express";
import { Table } from "../db/models/table";
import { reserveTable, getReservations } from "../db";

const tableRoute = express();

tableRoute.get("/tables", (_req, res) => {
  return res.status(200).json(getReservations());
});

tableRoute.post("/tables", (req, res) => {
  const table: Table = req.body;
  return res.status(200).json({
    reserved: reserveTable(table),
  });
});

export default tableRoute;
