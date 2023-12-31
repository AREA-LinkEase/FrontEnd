import Grid from "@mui/material/Grid";
import EventsTable from "../EventsTable";

export default function Actions() {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <EventsTable defaultSelect="Action" />
            </Grid>
        </Grid>
    )
}
