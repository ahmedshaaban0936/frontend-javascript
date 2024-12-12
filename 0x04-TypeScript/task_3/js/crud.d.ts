// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Define the type declarations for the crud.js module
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
