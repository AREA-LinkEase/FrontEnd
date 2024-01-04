import Grid from "@mui/material/Grid";
import LogsTable from "../LogsTable";

export default function Logs() {
    return (
        <Grid container spacing={6}>
                <Grid item xs={12}>
                    <LogsTable />
                </Grid>
        </Grid>
    )
}
