import Box from "@mui/material/Box";
import CustomAvatar from "../../@core/components/mui/avatar";
import Icon from "../../@core/components/icon";
import Typography from "@mui/material/Typography";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import CustomChip from "../../@core/components/mui/chip";
import {forwardRef, useState} from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import OptionsMenu from "../../@core/components/option-menu";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CustomTextField from "../../@core/components/mui/text-field";
import {DataGrid} from "@mui/x-data-grid";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import {styled} from "@mui/material/styles";
import Fade from "@mui/material/Fade";

const defaultColumns = [
    {
        flex: 0.2,
        field: 'id',
        minWidth: 90,
        headerName: 'Name',
        renderCell: ({ row }) => <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={row.image} alt={row.name} sx={{ mr: 4, width: 30, height: 30 }} />
            <Typography sx={{ color: 'text.secondary' }}>{row.name}</Typography>
        </Box>
    },
    {
        flex: 0.15,
        minWidth: 80,
        field: 'Owner',
        headerName: 'Owner',
        renderCell: ({ row }) => <>
            <Typography sx={{ color: 'text.secondary' }}>{row.owner}</Typography>
        </>
    },
    {
        flex: 0.3,
        minWidth: 125,
        field: 'Users',
        headerName: 'Users',
        renderCell: ({ row }) => <AvatarGroup className='pull-up' max={4}>
            {row.users.map((user) => {
                return <Avatar src={user.avatar} alt={user.username} />
            })}
        </AvatarGroup>
    },
    {
        flex: 0.25,
        minWidth: 90,
        field: 'Status',
        headerName: 'Status',
        renderCell: ({ row }) => <CustomChip rounded label={row.status} skin='light' color={(row.status === "enable" ? "success" : "error")} />
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

const WorkspacesTable = () => {
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
                    <Tooltip title='Delete'>
                        <IconButton size='small' onClick={() => {}}>
                            <Icon icon='tabler:trash' />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='View'>
                        <IconButton size='small' component={Link} href={"#"}>
                            <Icon icon='tabler:eye' />
                        </IconButton>
                    </Tooltip>
                    <OptionsMenu
                        iconButtonProps={{ size: 'small' }}
                        menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
                        options={[
                            {
                                text: (row.status === "enable") ? "disable" : "enable",
                                icon: <Icon icon={'tabler:' + ((row.status === "enable") ? "pause" : "play")} fontSize='1.25rem' />
                            },
                            {
                                text: 'Edit',
                                href: `#`,
                                icon: <Icon icon='tabler:pencil' fontSize='1.25rem' />
                            }
                        ]}
                    />
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
                    Create Services
                </Button>
                <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <CustomTextField value={value} placeholder='Search Service' onChange={e => setValue(e.target.value)} />
                </Box>
            </CardContent>
            <DataGrid
                autoHeight
                rowHeight={54}
                rows={[
                    {
                        "id": 0,
                        "name": "test",
                        "image": "/images/avatars/1.png",
                        "owner": "moustafa",
                        "users": [
                            {
                                "username": "moustafa",
                                "avatar": "/images/avatars/1.png"
                            }
                        ],
                        "status": "enable"
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
                            Create New Service
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Explication d'un service</Typography>
                    </Box>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <CustomTextField fullWidth label='Name' placeholder='' />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField fullWidth label='client_id' placeholder='' />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField fullWidth label='client_secret' placeholder='' />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField fullWidth label='scope' placeholder='' />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField fullWidth label='auth_url' placeholder='' />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField fullWidth label='token_url' placeholder='' />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                sx={{ '& .MuiFormControlLabel-label': { color: 'text.secondary' } }}
                                control={<Switch defaultChecked />}
                                label='this service need to be private ?'
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
        </Card>
    )
}

export default WorkspacesTable
