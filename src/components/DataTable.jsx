import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'product', headerName: 'Product', width: 200 },
  { field: 'cost', headerName: 'Cost', type: 'number', width: 90,},
  { field: 'category', headerName: 'Category', width: 150 }, 
  { field: 'stock', headerName: 'Stock', type: 'number', width: 90,},
  { field: 'img', headerName: 'Image URL', width: 250 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({rows, setSelect, setOpen}) {

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        onRowSelectionModelChange={(selectionModel) => {
          const idsArray = Array.from(selectionModel.ids);
          setSelect(idsArray);
          setOpen(true)

        }}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
