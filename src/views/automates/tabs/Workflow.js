import Grid from "@mui/material/Grid";
import { useState } from "react";
import ReactFlowComponent from "src/@core/components/reactflow";
import WorkflowComponent from "../../workflow/Workflow";

export default function Workflow() {
    const [value, setValue] = useState({});
    const [newNodes, setNewNodes] = useState([
        {
            name: 'dynamicBlock1',
            id: 'okay'
        },
        {
            name: 'dynamicBlock2',
            id: 'okay1'
        }
      ]);

    return (
        <Grid container spacing={6}>
            <Grid item xs={12} height={"65vh"}>
                <WorkflowComponent />
            </Grid>
        </Grid>
    )
}
