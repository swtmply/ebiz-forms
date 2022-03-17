export type CardItemType = {
  title: string;
  count: number;
};

export type TableItemType = {
  requestType: string;
  employeeID: string;
  employeeName: string;
  department: string;
  position: string;
  dateRequested: string;
  status: string;
};

export type LayoutProps = {
  title: string;
};

export type CashAdvanceInput = {
  cashRequested: number;
  purpose: string;
  liquidationDate: Date;
};
