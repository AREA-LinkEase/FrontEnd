import Box from "@mui/material/Box";
import Icon from "../../@core/components/icon";
import Typography from "@mui/material/Typography";
import CustomChip from "../../@core/components/mui/chip";
import IconButton from "@mui/material/IconButton";
import {forwardRef, useState} from "react";
import Tooltip from "@mui/material/Tooltip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CustomTextField from "../../@core/components/mui/text-field";
import {DataGrid} from "@mui/x-data-grid";

const defaultColumns = [
    {
        flex: 0.2,
        field: 'title',
        minWidth: 90,
        headerName: 'Title',
        renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.title}</Typography>
    },
    {
        flex: 0.15,
        minWidth: 80,
        field: 'value',
        headerName: 'Value',
        renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.value}</Typography>
    },
    {
        flex: 0.25,
        minWidth: 90,
        field: 'type',
        headerName: 'Type',
        renderCell: ({ row }) => <CustomChip rounded label={row.type} skin='light' color={row.type} />
    }
]

const LogsTable = () => {
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false)
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

    const columns = [
        ...defaultColumns,
        {
            flex: 0.1,
            minWidth: 130,
            sortable: false,
            field: 'actions',
            headerName: 'Actions',
            renderCell: ({ row }) => (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title='Delete Automate'>
                        <IconButton size='small' onClick={() => {}}>
                            <Icon icon='tabler:trash' />
                        </IconButton>
                    </Tooltip>
                </Box>
            )
        }
    ]

    return (
        <Card>
            <CardContent
                sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
            >
                <Button variant='contained' color={"error"} onClick={() => setShow(true)}>
                    Clear logs
                </Button>
                <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <CustomTextField value={value} placeholder='Search Logs' onChange={e => setValue(e.target.value)} />
                </Box>
            </CardContent>
            <DataGrid
                autoHeight
                rowHeight={54}
                rows={[
                    {
                        "id": 0,
                        "title": "test",
                        "value": "value",
                        "type": "error"
                    }
                ]}
                columns={columns}
                disableRowSelectionOnClick
                paginationModel={paginationModel}
                pageSizeOptions={[6, 10, 25, 50]}
                onPaginationModelChange={setPaginationModel}
            />
        </Card>
    )
}

export default LogsTable
