import Grid from "@mui/material/Grid";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CustomTextField from "../../../@core/components/mui/text-field";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Icon from "../../../@core/components/icon";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";

export default function Settings() {
    const [open, setOpen] = useState(false)
    const [secondDialogOpen, setSecondDialogOpen] = useState(false)
    const [userInput, setUserInput] = useState('yes')
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({ defaultValues: { checkbox: false } })

    const handleClose = () => setOpen(false)
    const onSubmit = () => setOpen(true)
    const handleSecondDialogClose = () => setSecondDialogOpen(false)

    const handleConfirmation = value => {
        handleClose()
        setUserInput(value)
        setSecondDialogOpen(true)
    }

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title='Edit information' />
                    <CardContent>
                        <Grid container spacing={6}>
                            <Grid item xs={12}>
                                <CustomTextField fullWidth label='Name' placeholder='' />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField fullWidth label='Client_id' placeholder='' />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField fullWidth label='Client_secret' placeholder='' />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField fullWidth label='scope' placeholder='' />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField fullWidth label='Auth url' placeholder='' />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField fullWidth label='Token url' placeholder='' />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel label='Need to be private ?' control={<Checkbox defaultChecked name='basic-checked' />} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant='contained' onClick={() => {}}>
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title='Delete Service' />
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box sx={{ mb: 4 }}>
                                <FormControl>
                                    <Controller
                                        name='checkbox'
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <FormControlLabel
                                                label='I confirm delete service'
                                                sx={{ '& .MuiTypography-root': { color: errors.checkbox ? 'error.main' : 'text.secondary' } }}
                                                control={
                                                    <Checkbox
                                                        {...field}
                                                        size='small'
                                                        name='validation-basic-checkbox'
                                                        sx={errors.checkbox ? { color: 'error.main' } : null}
                                                    />
                                                }
                                            />
                                        )}
                                    />
                                    {errors.checkbox && (
                                        <FormHelperText
                                            id='validation-basic-checkbox'
                                            sx={{ mx: 0, color: 'error.main', fontSize: theme => theme.typography.body2.fontSize }}
                                        >
                                            Please confirm you want to delete the service
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Box>
                            <Button variant='contained' color='error' type='submit' disabled={errors.checkbox !== undefined}>
                                Delete Service
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
            <Dialog fullWidth maxWidth='xs' open={open} onClose={handleClose}>
                <DialogContent
                    sx={{
                        pb: theme => `${theme.spacing(6)} !important`,
                        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                        pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            textAlign: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            '& svg': { mb: 6, color: 'warning.main' }
                        }}
                    >
                        <Icon icon='tabler:alert-circle' fontSize='5.5rem' />
                        <Typography>Are you sure you would like to destroy the service ?</Typography>
                    </Box>
                </DialogContent>
                <DialogActions
                    sx={{
                        justifyContent: 'center',
                        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                        pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                    }}
                >
                    <Button variant='contained' sx={{ mr: 2 }} onClick={() => handleConfirmation('yes')}>
                        Yes
                    </Button>
                    <Button variant='tonal' color='secondary' onClick={() => handleConfirmation('cancel')}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog fullWidth maxWidth='xs' open={secondDialogOpen} onClose={handleSecondDialogClose}>
                <DialogContent
                    sx={{
                        pb: theme => `${theme.spacing(6)} !important`,
                        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                        pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            '& svg': {
                                mb: 8,
                                color: userInput === 'yes' ? 'success.main' : 'error.main'
                            }
                        }}
                    >
                        <Icon fontSize='5.5rem' icon={userInput === 'yes' ? 'tabler:circle-check' : 'tabler:circle-x'} />
                        <Typography variant='h4' sx={{ mb: 5 }}>
                            {userInput === 'yes' ? 'Deleted!' : 'Cancelled'}
                        </Typography>
                    </Box>
                </DialogContent>
                <DialogActions
                    sx={{
                        justifyContent: 'center',
                        px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                        pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
                    }}
                >
                    <Button variant='contained' color='success' onClick={handleSecondDialogClose}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}
