import Box from "@mui/material/Box";
import CustomAvatar from "../../@core/components/mui/avatar";
import Icon from "../../@core/components/icon";
import Typography from "@mui/material/Typography";
import CustomChip from "../../@core/components/mui/chip";
import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import {forwardRef, useState} from "react";
import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import OptionsMenu from "../../@core/components/option-menu";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CustomTextField from "../../@core/components/mui/text-field";
import {DataGrid} from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DialogActions from "@mui/material/DialogActions";

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
    }
]

const CustomCloseButton = styled(IconButton)(({ theme }) => ({
    top: 0,
    right: 0,
    color: 'grey.500',
    position: 'absolute',
    boxShadow: theme.shadows[2],
    transform: 'translate(10px, -10px)',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: `${theme.palette.background.paper} !important`,
    transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
    '&:hover': {
        transform: 'translate(7px, -5px)'
    }
}))

const Transition = forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />
})

const VariableTable = () => {
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
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
                    <Tooltip title='Edit'>
                        <IconButton size='small' onClick={() => setShowEdit(true)}>
                            <Icon icon='tabler:pencil' />
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
                <Button variant='contained' startIcon={<Icon icon='tabler:plus' />} onClick={() => setShow(true)}>
                    Create Variable
                </Button>
                <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <CustomTextField value={value} placeholder='Search Variable' onChange={e => setValue(e.target.value)} />
                </Box>
            </CardContent>
            <DataGrid
                autoHeight
                rowHeight={54}
                rows={[
                    {
                        "id": 0,
                        "title": "test",
                        "value": "valueVariable"
                    }
                ]}
                columns={columns}
                disableRowSelectionOnClick
                paginationModel={paginationModel}
                pageSizeOptions={[6, 10, 25, 50]}
                onPaginationModelChange={setPaginationModel}
            />
            <Dialog
                fullWidth
                open={show}
                maxWidth='md'
                scroll='body'
                onClose={() => setShow(false)}
                TransitionComponent={Transition}
                onBackdropClick={() => setShow(false)}
                sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
            >
                <DialogContent
                    sx={{
                        pb: theme => `${theme.spacing(8)} !important`,
                        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                        pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                    }}
                >
                    <CustomCloseButton onClick={() => setShow(false)}>
                        <Icon icon='tabler:x' fontSize='1.25rem' />
                    </CustomCloseButton>
                    <Box sx={{ mb: 8, textAlign: 'center' }}>
                        <Typography variant='h3' sx={{ mb: 3 }}>
                            Create New Variable
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Explication d'une variable</Typography>
                    </Box>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <CustomTextField fullWidth label='Title' placeholder='' />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField
                                rows={4}
                                multiline
                                fullWidth
                                label='Value'
                                id='textarea-outlined-static'
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions
                    sx={{
                        justifyContent: 'center',
                        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                        pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                    }}
                >
                    <Button variant='contained' sx={{ mr: 1 }} onClick={() => setShow(false)}>
                        Submit
                    </Button>
                    <Button variant='tonal' color='secondary' onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                fullWidth
                open={showEdit}
                maxWidth='md'
                scroll='body'
                onClose={() => setShowEdit(false)}
                TransitionComponent={Transition}
                onBackdropClick={() => setShowEdit(false)}
                sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
            >
                <DialogContent
                    sx={{
                        pb: theme => `${theme.spacing(8)} !important`,
                        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                        pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                    }}
                >
                    <CustomCloseButton onClick={() => setShowEdit(false)}>
                        <Icon icon='tabler:x' fontSize='1.25rem' />
                    </CustomCloseButton>
                    <Box sx={{ mb: 8, textAlign: 'center' }}>
                        <Typography variant='h3' sx={{ mb: 3 }}>
                            Edit Variable
                        </Typography>
                    </Box>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <CustomTextField fullWidth label='Title' placeholder='' />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField
                                rows={4}
                                multiline
                                fullWidth
                                label='Value'
                                id='textarea-outlined-static'
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions
                    sx={{
                        justifyContent: 'center',
                        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                        pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                    }}
                >
                    <Button variant='contained' sx={{ mr: 1 }} onClick={() => setShowEdit(false)}>
                        Update
                    </Button>
                    <Button variant='tonal' color='secondary' onClick={() => setShowEdit(false)}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    )
}

export default VariableTable
