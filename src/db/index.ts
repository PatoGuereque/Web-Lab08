import { Table } from "./models/table";

let reservations: Table[] = [];
let waitlist: Table[] = [];

const clearData = () => {
  reservations = [];
  waitlist = [];
};

const reserveTable = (table: Table): boolean => {
  if (reservations.length === 5) {
    waitlist.push(table);
    return false;
  }
  reservations.push(table);
  return true;
};

const getReservations = (): Table[] => reservations;
const getWaitlist = (): Table[] => waitlist;

export { clearData, reserveTable, getReservations, getWaitlist };
