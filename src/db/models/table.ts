/**
 * Our table interface
 * This interface represents a table reservation that can
 * be assigned or that can be stored in the waiting list
 */
export interface Table {
  /**
   * The name of the person that is reserving the table
   */
  name: string;

  /**
   * The email of the person that is reserving the table
   */
  email: string;

  /**
   * The phone number of the person that is reserving the table
   */
  phone: string;
}
