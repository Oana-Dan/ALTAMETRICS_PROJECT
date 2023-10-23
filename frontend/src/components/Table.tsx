import * as React from 'react';
import { DataGrid, GridColDef, GridRowParams, MuiEvent } from '@mui/x-data-grid';

type TableProps = {
    columns: GridColDef[],
    rows: [],
    openDialog: (params: GridRowParams, event: MuiEvent) => void
}

const Table: React.FC<TableProps> = (tableProps: TableProps) => {
  return (
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tableProps.rows}
        columns={tableProps.columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowClick= {tableProps.openDialog}
      />
    </div>
  );
}

export default Table;


