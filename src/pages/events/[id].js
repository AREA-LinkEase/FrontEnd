import {useRouter} from "next/router";
import {forwardRef, useState} from "react";
import PageHeader from "../../@core/components/page-header";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import Icon from "../../@core/components/icon";
import Box from "@mui/material/Box";
import CustomTextField from "../../@core/components/mui/text-field";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";

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

export default function event() {
    const router = useRouter();
    const {id} = router.query;
    const [showEdit, setShowEdit] = useState(false)

    return <>
        <Grid container spacing={6}>
            <PageHeader
                title={
                    <Typography variant='h4'>
                        Nom de l'event
                    </Typography>
                }
            />
            <Grid item xs={12}>
                <Button variant='contained' onClick={() => setShowEdit(true)}>Edit Event</Button>
            </Grid>
        </Grid>
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
                        Edit Event
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Name's edition</Typography>
                </Box>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <CustomTextField sx={{ mb: 6 }} fullWidth label='Name' placeholder='' />
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
    </>
}
