import Grid from "@mui/material/Grid";
import { useState } from "react";
import WorkflowComponent from "../../workflow/Workflow";
import toast from "react-hot-toast";
import {useRouter} from "next/router";

export default function Workflow({info, automate}) {
    const [value] = useState({
      "nodes": info.workflow.nodes || [],
      "edges": info.workflow.edges || []
    });
    const router = useRouter();

    const onChange = async (workflow) => {
      try {
        let result = await automate.editWorkflow(workflow)

        if (typeof result === "number")
          toast.error("An error has occurred")
        else {
          toast.success("The workflow has edited successfully")
          router.reload()
        }
      } catch (e) {
        console.log(e)
        toast.error("An error has occurred")
      }
    }

    return (
        <Grid container spacing={6}>
            <Grid item xs={12} height={"65vh"}>
                <WorkflowComponent value={value} onChange={onChange} />
            </Grid>
        </Grid>
    )
}
