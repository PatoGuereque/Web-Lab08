import { Table } from "./models/table";

let reservations: Table[] = [];
let waitlist: Table[] = [];

const clearData = () => {
  reservations = [];
  waitlist = [];
};

const reserveTable = (table: Table) => {
  if (reservations.length === 5) {
    waitlist.push(table);
  } else {
    reservations.push(table);
  }
};

const getReservations = (): Table[] => {
  return reservations;
};

const getWaitlist = (): Table[] => {
  return waitlist;
};

export { clearData, reserveTable, getReservations, getWaitlist };
