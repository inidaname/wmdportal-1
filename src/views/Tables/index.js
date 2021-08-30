import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Box from '@material-ui/core/Box'

const columns = [
  { field: 'id', headerName: 'S/N', width: 120 },
  {
    field: 'instrument',
    headerName: 'INSTRUMENT',
    width: 180,
    editable: true,
  },
  {
    field: 'modelname',
    headerName: 'MODEL NAME',
    width: 150,
    editable: true,
  },
  {
    field: 'modelnumber',
    headerName: 'MODEL N0.',
    type: 'number',
    width: 120,
    editable: true,
  },
  {
    field: 'serialnumber',
    headerName: 'SERIAL N0.',
    editable: true,
    width: 150
  },
    {
        field: 'tagno',
        headerName: 'TAG. N0.',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 120
    },
        {
            field: 'state',
            headerName: 'STATE',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
            {
                field: 'sector',
                headerName: 'SECTOR',
                description: 'This column has a value getter and is not sortable.',
                sortable: false,
                width: 120,
            },
                {
                    field: 'pac',
                    headerName: 'PAC',
                    description: 'This column has a value getter and is not sortable.',
                    sortable: false,
                    width: 100,
                },
                    {
                        field: 'ivc',
                        headerName: 'IVC',
                        description: 'This column has a value getter and is not sortable.',
                        sortable: false,
                        width: 80
  },
];

const rows = [
  
];

export default function DataTable() {
  return (
    <Box   mt={{sm: '5%', xs: '1%', md: '5%'}} style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}