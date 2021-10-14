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
  } else {
    reservations.push(table);
    return true;
  }
};

const getReservations = (): Table[] => {
  return reservations;
};

const getWaitlist = (): Table[] => {
  return waitlist;
};

export { clearData, reserveTable, getReservations, getWaitlist };
