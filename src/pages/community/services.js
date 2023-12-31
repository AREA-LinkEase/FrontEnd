import {styled} from "@mui/material/styles";
import CustomTextField from "../../@core/components/mui/text-field";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import {Icon} from "@iconify/react";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";

const CustomTextFieldStyled = styled(CustomTextField)(({ theme }) => ({
    '& .MuiInputBase-root.MuiFilledInput-root': {
        width: '100%',
        backgroundColor: `${theme.palette.background.paper} !important`
    },
    [theme.breakpoints.up('sm')]: {
        width: '55%'
    }
}))

export default function automates() {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Card>
                    <CardContent sx={{ pt: 24, textAlign: 'center', pb: theme => `${theme.spacing(24)} !important` }}>
                        <Typography sx={{ mb: 4, fontWeight: 500, fontSize: '1.625rem', lineHeight: 1.385 }}>
                            Search Services in our community !
                        </Typography>

                        <CustomTextFieldStyled
                            size='medium'
                            placeholder='Search a service....'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <Icon fontSize='1.25rem' icon='tabler:search' />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Card>
                    <CardHeader
                        title={
                            <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 2 } }}>
                                <Icon fontSize={20} icon='tabler:link' />
                                <Typography fontSize={20}>Service's name</Typography>
                            </Box>
                        }
                        action={
                            <Avatar
                                variant='rounded'
                                src="https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs=w240-h480-rw"
                                sx={{
                                    width: 55,
                                    height: 55,
                                }}
                            />
                        }
                    />
                    <CardContent>
                        <Grid item xs={12} sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                            <AvatarGroup className='pull-up' max={4}>
                                <Avatar />
                                <Avatar />
                                <Avatar />
                                <Avatar />
                                <Avatar />
                            </AvatarGroup>
                            <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1.25 } }}>
                                <Icon icon='tabler:eye' />
                                <Typography>80</Typography>
                            </Box>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
