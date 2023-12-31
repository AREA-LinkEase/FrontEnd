import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CustomChip from "../../@core/components/mui/chip";
import {styled, useTheme} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import {forwardRef, useState} from "react";
import Fade from "@mui/material/Fade";
import OptionsMenu from "../../@core/components/option-menu";
import Icon from "../../@core/components/icon";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CustomTextField from "../../@core/components/mui/text-field";
import {DataGrid} from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import DialogActions from "@mui/material/DialogActions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import toast from "react-hot-toast";
import Tooltip from "@mui/material/Tooltip";

const data = [
    {
        avatar: '1.png',
        value: 'Can Edit',
        name: 'Lester Palmer',
        email: 'pe@vogeiz.net'
    },
    {
        avatar: '2.png',
        value: 'owner',
        name: 'Mittie Blair',
        email: 'peromak@zukedohik.gov'
    },
    {
        avatar: '3.png',
        value: 'Can Comment',
        name: 'Marvin Wheeler',
        email: 'rumet@jujpejah.net'
    },
    {
        avatar: '4.png',
        value: 'Can View',
        name: 'Nannie Ford',
        email: 'negza@nuv.io'
    },
    {
        avatar: '5.png',
        value: 'Can Edit',
        name: 'Julian Murphy',
        email: 'lunebame@umdomgu.net'
    },
    {
        avatar: '6.png',
        value: 'Can View',
        name: 'Sophie Gilbert',
        email: 'ha@sugit.gov'
    },
    {
        avatar: '7.png',
        value: 'Can Comment',
        name: 'Chris Watkins',
        email: 'zokap@mak.org'
    },
    {
        avatar: '8.png',
        value: 'Can Edit',
        name: 'Adelaide Nichols',
        email: 'ujinomu@jigo.com'
    }
]

const defaultColumns = [
    {
        flex: 0.2,
        field: 'user',
        minWidth: 135,
        headerName: 'User',
        renderCell: ({ row }) => <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={row.avatar} alt={row.username} sx={{ mr: 4, width: 30, height: 30 }} />
            <Typography sx={{ color: 'text.secondary' }}>{row.username}</Typography>
        </Box>
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

const UserTable = () => {
    const [value, setValue] = useState('')
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })
    const [showEdit, setShowEdit] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    const [selectedValue, setSelectedValue] = useState('read')
    const theme = useTheme()

    const handleChange = event => {
        setSelectedValue(event.target.value)
    }

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
                </Box>
            )
        }
    ]

    return (
        <Card>
            <CardContent
                sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
            >
                <Button variant='contained' startIcon={<Icon icon='tabler:plus' />} onClick={() => setShowAdd(true)}>
                    Add New User
                </Button>
                <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                    <CustomTextField value={value} placeholder='Search User' onChange={e => setValue(e.target.value)} />
                </Box>
            </CardContent>
            <DataGrid
                autoHeight
                rowHeight={54}
                rows={[
                    {
                        "id": 0,
                        "username": "moustafa"
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
                open={showAdd}
                maxWidth='md'
                scroll='body'
                onClose={() => setShowAdd(false)}
                TransitionComponent={Transition}
                onBackdropClick={() => setShowAdd(false)}
                sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
            >
                <DialogContent
                    sx={{
                        pb: theme => `${theme.spacing(8)} !important`,
                        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                        pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                    }}
                >
                    <CustomCloseButton onClick={() => setShowAdd(false)}>
                        <Icon icon='tabler:x' fontSize='1.25rem' />
                    </CustomCloseButton>
                    <Box sx={{ mb: 8, textAlign: 'center' }}>
                        <Typography variant='h3' sx={{ mb: 3 }}>
                            Add New User
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Add new user to the service</Typography>
                    </Box>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <CustomTextField sx={{ mb: 6 }} fullWidth label='Search User' placeholder='' />
                            <Typography variant='h4'>{`${data.length} Members`}</Typography>
                            <List
                                dense
                                sx={{
                                    mb: 3,
                                    '& .MuiListItemText-primary': {
                                        ...theme.typography.body1,
                                        fontWeight: 500,
                                        color: 'text.secondary'
                                    },
                                    '& .MuiListItemText-secondary': {
                                        ...theme.typography.body1,
                                        fontWeight: 500,
                                        color: 'text.disabled'
                                    }
                                }}
                            >
                                {data.map(member => {
                                    return (
                                        <ListItem key={member.name} sx={{ px: 0, py: 2, display: 'flex', flexWrap: 'wrap' }}>
                                            <ListItemAvatar>
                                                <Avatar src={`/images/avatars/${member.avatar}`} alt={member.name} sx={{ height: 38, width: 38 }} />
                                            </ListItemAvatar>
                                            <ListItemText sx={{ m: 0 }} primary={member.name} secondary={member.email} />
                                            <ListItemSecondaryAction sx={{ right: 0 }}>
                                                <Button variant='contained' onClick={() => {
                                                    setShowAdd(false)
                                                    toast.success('User Added !')
                                                }}>Add</Button>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </Card>
    )
}

export default UserTable
