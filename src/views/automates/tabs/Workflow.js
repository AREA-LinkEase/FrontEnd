import Grid from "@mui/material/Grid";
import { useState } from "react";
import ReactFlowComponent from "src/@core/components/reactflow";

export default function Workflow() {
    const [value, setValue] = useState({});
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <ReactFlowComponent value={value} onChange={setValue}/>
            </Grid>
        </Grid>
    )
}
