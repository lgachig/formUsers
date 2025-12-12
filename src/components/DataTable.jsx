import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'Name', headerName: 'First name', width: 200 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90,}
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({rows, setSelect}) {


  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={(selectionModel) => {
          const idsArray = Array.from(selectionModel.ids);
          setSelect(idsArray);
        }}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
