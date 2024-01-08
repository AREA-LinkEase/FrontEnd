import Grid from "@mui/material/Grid";
import VariableTable from "../VariableTable";
import {useEffect, useState} from "react";

export default function Variables({info, automate}) {
    let [variables, setVariables] = useState([])

    useEffect(() => {
      let results = [];
      for (const [i, name] of Object.keys(info.variables).entries()) {
        results.push(
          {
            title: name,
            content: automate.variables[name],
            id: i
          }
        )
      }
      setVariables(results)
    }, []);
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <VariableTable data={variables} automate={automate} />
            </Grid>
        </Grid>
    )
}
