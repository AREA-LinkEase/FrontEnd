import Grid from "@mui/material/Grid";
import UserTable from "../UserTable";

export default function Users() {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <UserTable />
            </Grid>
        </Grid>
    )
}
