import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomizerVisibility } from 'src/store/apps/customizer';

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'


import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button, ButtonBase, CardActions, FormControl, FormControlLabel, FormLabel, Input, InputAdornment, Select, Switch } from '@mui/material'
import Icon from 'src/@core/components/icon'
import CardImgTop from 'src/views/ui/cards/basic/CardImgTop'
import authConfig from 'src/configs/auth'
import axios from 'axios';
import MuiDrawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import PerfectScrollbar from 'react-perfect-scrollbar'

const fetchServices = () => {
  return async (dispatch) => {
    const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
    if (storedToken) {
      try {
        const response = await axios.get('http://135.181.165.228:8080/services/@me', {
          headers: {
            Authorization: storedToken,
          },
        });
        console.log(response);
        dispatch({ type: 'FETCH_SERVICES_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_SERVICES_FAILURE', payload: error.message });
      }
    }
  };
};

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: 400,
  zIndex: theme.zIndex.modal,
  '& .MuiFormControlLabel-root': {
    marginRight: '0.6875rem'
  },
  '& .MuiDrawer-paper': {
    border: 0,
    width: 400,
    zIndex: theme.zIndex.modal,
    boxShadow: theme.shadows[9]
  }
}))

const CustomizerSpacing = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 6)
}))

const inputStyle = {
  display: 'flex',
  padding: '7px 14px',
  alignItems: 'center',
  gap: '12px',
  flex: '1 0 0',
  borderRadius: '6px',
  border: '1px solid var(--Light-Solid-Color-Extra-Divider, #DBDADE)',
  background: 'var(--Light-Solid-Color-Extra-Card-Background, #FFF)',
  color: 'var(--Light-Typography-Color-Placeholder-Text, #4B465C)',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: 'Public Sans',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '24px',
};

const Services = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
  const [name, setName] = useState(''); // État pour le nom
  const [clientId, setClientId] = useState(''); // État pour le Client ID
  const [clientSecret, setClientSecret] = useState(''); // État pour le Secret Client
  const [authUrl, setAuthUrl] = useState(''); // État pour l'Auth URL
  const [tokenUrl, setTokenUrl] = useState(''); // État pour le Token URL
  const [scope, setScope] = useState(''); // État pour le scope
  const [isPrivate, setIsPrivate] = useState(false); // État pour le private

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleCreateButton = () => {
    setIsCreateMenuOpen(false);
    dispatch(setCustomizerVisibility(true));
  }

  const handleCloseMenu = () => {
    setIsCreateMenuOpen(false);
    dispatch(setCustomizerVisibility(true));
  }

  const handleOpenMenu = () => {
    setIsCreateMenuOpen(true);
    dispatch(setCustomizerVisibility(false));
  }

  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item>
              <Typography variant='h4' sx={{ mb: 6 }}>
                Services
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                color='primary'
                startIcon={<Icon icon='tabler:plus' fontSize={20} />}
                onClick={handleOpenMenu}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        }
      />
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {services.map((service) => (
            <Grid item key={service.id}>
              <CardImgTop
                imgSrc="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-4-1.png"
                text={service.name}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Drawer open={isCreateMenuOpen} hideBackdrop anchor='right' variant='persistent'>
        <Box
          className='customizer-header'
          sx={{
            position: 'relative',
            p: theme => theme.spacing(3.5, 5),
            borderBottom: theme => `1px solid ${theme.palette.divider}`
          }}
        >
          <Typography variant='h4' sx={{ fontWeight: 600 }}>
            Create Service
          </Typography>
          <IconButton
            onClick={handleCloseMenu}
            sx={{
              right: 20,
              top: '50%',
              position: 'absolute',
              color: 'text.secondary',
              transform: 'translateY(-50%)'
            }}
          >
            <Icon icon='tabler:x' fontSize={20} />
          </IconButton>
        </Box>
        <PerfectScrollbar options={{ wheelPropagation: false }}>
          <CustomizerSpacing className='customizer-body'>
            <Typography
              component='p'
              variant='caption'
              sx={{ mb: 5, color: 'text.disabled', textTransform: 'uppercase' }}
            >
              Settings
            </Typography>
            <Box sx={{ mb: 5 }}>
              <Typography sx={{ pb: 2 }}>Name</Typography>
              <Input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={inputStyle}
              />
            </Box>
            <Box sx={{ mb: 5 }}>
              <Typography sx={{ pb: 2 }}>Client ID</Typography>
              <Input
                placeholder="ID"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                sx={inputStyle}
              />
            </Box>
            <Box sx={{ mb: 5 }}>
              <Typography sx={{ pb: 2 }}>Client Secret</Typography>
              <Input
                placeholder="**********"
                type="password"
                value={clientSecret}
                onChange={(e) => setClientSecret(e.target.value)}
                sx={inputStyle}
              />
            </Box>
            <Box sx={{ mb: 5 }}>
              <Typography sx={{ pb: 2 }}>Scope</Typography>
              <Select
                sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flex: '1 0 0',
                color: scope === '' ? '#d5d4d9' : '#6f6b7d'
              }}
                displayEmpty={true}
                renderValue={(scope) => (scope?.length ? Array.isArray(scope) ? scope.join(', ') : scope : 'Scope')}
                labelId="scope-select-label"
                id="scope-select-id"
                value={scope}
                onChange={(e) => setScope(e.target.value)}
              >
                <MenuItem value={""}>~~~</MenuItem>
                <MenuItem value={"Ten"}>Ten</MenuItem>
                <MenuItem value={"Twenty"}>Twenty</MenuItem>
                <MenuItem value={"Thirty"}>Thirty</MenuItem>
              </Select>
            </Box>
            <Box sx={{ mb: 5 }}>
              <Typography sx={{ pb: 2 }}>Auth URL</Typography>
              <Input
                placeholder="https://..."
                value={authUrl}
                onChange={(e) => setAuthUrl(e.target.value)}
                sx={inputStyle}
              />
            </Box>
            <Box sx={{ mb: 5 }}>
              <Typography sx={{ pb: 2 }}>Token URL</Typography>
              <Input
                placeholder="https://..."
                value={tokenUrl}
                onChange={(e) => setTokenUrl(e.target.value)}
                sx={inputStyle}
              />
            </Box>
            <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
            <FormControlLabel
              control={
                <Switch
                  checked={isPrivate}
                  onChange={() => setIsPrivate(!isPrivate)}
                />
              }
              label="Private"
              labelPlacement="end"
            />
          </Box>
          <Box sx={{ textAlign: 'center'}}>
            <Button
              variant='contained'
              color='primary'
              onClick={handleCreateButton}
            >
              Create
            </Button>
          </Box>
          </CustomizerSpacing>
        </PerfectScrollbar>
      </Drawer>
    </Grid>
  );
};

export default Services;
