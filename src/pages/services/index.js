import Grid from "@mui/material/Grid";
import PageHeader from "../../@core/components/page-header";
import Typography from "@mui/material/Typography";
import ServicesTable from "../../views/services/ServicesTable";

export default function services() {
    return (
        <>
            <Grid container spacing={6}>
                <PageHeader
                    title={
                        <Typography variant='h4'>
                            Services
                        </Typography>
                    }
                    subtitle={
                        <Typography sx={{ color: 'text.secondary' }}>
                            Petite description pour expliquer cette page.
                        </Typography>
                    }
                />
                <Grid item xs={12}>
                    <ServicesTable />
                </Grid>
            </Grid>
        </>
    )
}
