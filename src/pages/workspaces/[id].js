import {useRouter} from "next/router";
import PageHeader from "../../@core/components/page-header";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CustomAvatar from "../../@core/components/mui/avatar";
import Icon from "../../@core/components/icon";
import Card from "@mui/material/Card";
import AutomateTable from "../../views/workspaces/workspace/AutomateTable";
import UserTable from "../../views/workspaces/workspace/UserTable";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import {forwardRef, useState} from "react";
import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";
import CustomTextField from "../../@core/components/mui/text-field";
import Checkbox from "@mui/material/Checkbox";

const CustomCloseButton = styled(IconButton)(({ theme }) => ({
  top: 0,
  right: 0,
  color: 'grey.500',
  position: 'absolute',
  boxShadow: theme.shadows[2],
  transform: 'translate(10px, -10px)',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `${theme.palette.background.paper} !important`,
  transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
  '&:hover': {
    transform: 'translate(7px, -5px)'
  }
}))

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

const workspace = () => {
  const router = useRouter();
  const { id } = router.query;
  const [showEdit, setShowEdit] = useState(false)

  return <>
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h4'>
            Nom du workspace #1
          </Typography>
        }
        subtitle={
          <Typography sx={{ color: 'text.secondary' }}>
            Description du workspace
          </Typography>
        }
      />
      <Grid item xs={12}>
        <Button variant='contained' onClick={() => setShowEdit(true)}>Edit Workspace</Button>
      </Grid>
      <Grid item container xs={12} spacing={6}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ gap: 3, display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography sx={{ mb: 1, color: 'text.secondary' }}>Automates</Typography>
                <Box sx={{ mb: 1, columnGap: 1.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Typography variant='h4'>15</Typography>
                </Box>
                <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                  Total
                </Typography>
              </Box>
              <CustomAvatar skin='light' variant='rounded' color='primary' sx={{ width: 38, height: 38 }}>
                <Icon icon="tabler:toggle-left" fontSize={24} />
              </CustomAvatar>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ gap: 3, display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography sx={{ mb: 1, color: 'text.secondary' }}>Users</Typography>
                <Box sx={{ mb: 1, columnGap: 1.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Typography variant='h4'>15</Typography>
                </Box>
                <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                  Total
                </Typography>
              </Box>
              <CustomAvatar skin='light' variant='rounded' color='warning' sx={{ width: 38, height: 38 }}>
                <Icon icon="tabler:user" fontSize={24} />
              </CustomAvatar>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <AutomateTable />
      </Grid>
      <Grid item xs={12}>
        <UserTable />
      </Grid>
    </Grid>
    <Dialog
      fullWidth
      open={showEdit}
      maxWidth='md'
      scroll='body'
      onClose={() => setShowEdit(false)}
      TransitionComponent={Transition}
      onBackdropClick={() => setShowEdit(false)}
      sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
    >
      <DialogContent
        sx={{
          pb: theme => `${theme.spacing(8)} !important`,
          px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
          pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
        }}
      >
        <CustomCloseButton onClick={() => setShowEdit(false)}>
          <Icon icon='tabler:x' fontSize='1.25rem' />
        </CustomCloseButton>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant='h3' sx={{ mb: 3 }}>
            Edit Workspace
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Name's edition</Typography>
        </Box>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CustomTextField sx={{ mb: 6 }} fullWidth label='Name' placeholder='' />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              rows={4}
              multiline
              fullWidth
              label='Description'
              id='textarea-outlined-static'
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel label='Need to be private ?' control={<Checkbox defaultChecked name='basic-checked' />} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: 'center',
          px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
          pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
        }}
      >
        <Button variant='contained' sx={{ mr: 1 }} onClick={() => setShowEdit(false)}>
          Update
        </Button>
        <Button variant='tonal' color='secondary' onClick={() => setShowEdit(false)}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  </>
}

export default workspace
