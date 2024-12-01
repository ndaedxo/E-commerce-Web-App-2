import React from 'react';

const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = ({ children, ...props }) => {
  return (
    <div className="relative w-full overflow-auto">
      <table className="w-full caption-bottom text-sm" {...props}>
        {children}
      </table>
    </div>
  );
};

const TableHeader: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ children, ...props }) => {
  return <thead {...props}>{children}</thead>;
};

const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ children, ...props }) => {
  return <tbody {...props}>{children}</tbody>;
};

const TableFooter: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ children, ...props }) => {
  return <tfoot className="bg-primary font-medium text-primary-foreground" {...props}>{children}</tfoot>;
};

const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ children, ...props }) => {
  return <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" {...props}>{children}</tr>;
};

const TableHead: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = ({ children, ...props }) => {
  return <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0" {...props}>{children}</th>;
};

const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = ({ children, ...props }) => {
  return <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" {...props}>{children}</td>;
};

const TableCaption: React.FC<React.HTMLAttributes<HTMLTableCaptionElement>> = ({ children, ...props }) => {
  return <caption className="mt-4 text-sm text-muted-foreground" {...props}>{children}</caption>;
};

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };