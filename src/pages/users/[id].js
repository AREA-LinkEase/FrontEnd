import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import PageHeader from "../../@core/components/page-header";
import {useRouter} from "next/router";

export default function profile() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Grid container spacing={6}>
            <PageHeader
                title={
                    <Typography variant='h4'>
                        User Profile
                    </Typography>
                }
            />
            <Grid item xs={12}>
                <Card sx={{ position: 'relative' }}>
                    <CardMedia sx={{ height: '12.625rem' }} image='/images/cards/background-user.png' />
                    <Avatar
                        alt='Robert Meyer'
                        src='/images/avatars/1.png'
                        sx={{
                            width: 75,
                            height: 75,
                            left: '1.313rem',
                            top: '10.28125rem',
                            position: 'absolute',
                            border: theme => `0.25rem solid ${theme.palette.common.white}`
                        }}
                    />
                    <CardContent>
                        <Box
                            sx={{
                                mt: 5.75,
                                mb: 8.75,
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h5'>Robert Meyer</Typography>
                            </Box>
                            <Button variant='contained'>Add to your friend</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
