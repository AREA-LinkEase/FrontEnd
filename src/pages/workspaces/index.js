import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PageHeader from "../../@core/components/page-header";
import WorkspacesTable from "../../views/workspaces/WorkspacesTable";
import {useState} from "react";
import DrawerCreator from "../../views/workspaces/DrawerCreator";

const Workspaces = () => {
  const [isOpen, setOpen] = useState(false)

  const handleDrawer = () => setOpen(!isOpen)

  return (
    <>
      <Grid container spacing={6}>
        <PageHeader
          title={
            <Typography variant='h4'>
              Workspaces
            </Typography>
          }
          subtitle={
            <Typography sx={{ color: 'text.secondary' }}>
              Petite description pour expliquer cette page.
            </Typography>
          }
        />
        <Grid item xs={12}>
          <WorkspacesTable handleDrawer={handleDrawer} />
        </Grid>
      </Grid>
      <DrawerCreator isOpen={isOpen} handleDrawer={handleDrawer} />
    </>
  )
}

export default Workspaces
