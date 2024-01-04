import {useRouter} from "next/router";
import Grid from "@mui/material/Grid";
import PageHeader from "../../@core/components/page-header";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Icon from "../../@core/components/icon";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import {useState} from "react";
import Logs from "../../views/automates/tabs/Logs";
import Variables from "../../views/automates/tabs/Variables";
import Workflow from "../../views/automates/tabs/Workflow";
import Settings from "../../views/automates/tabs/Settings";
import TabList from "@mui/lab/TabList";
import useMediaQuery from "@mui/material/useMediaQuery";

const automate = () => {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState("workflow")

  const hideText = useMediaQuery(theme => theme.breakpoints.down('md'))

  const handleChange = (event, value) => {
    setActiveTab(value)
  }

    const tabContentList = {
        logs: <Logs />,
        settings: <Settings />,
        variables: <Variables />,
        workflow: <Workflow />
    }

  return <>
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h4'>
            Nom de l'automate #1
          </Typography>
        }
      />
      <Grid item xs={12}>
          <TabContext value={activeTab}>
              <Grid container spacing={6}>
                  <Grid item xs={12}>
                      <TabList
                          variant='scrollable'
                          scrollButtons='auto'
                          onChange={handleChange}
                          aria-label='customized tabs example'
                      >
                          <Tab
                              value='workflow'
                              label={
                                  <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                                      <Icon fontSize='1.25rem' icon='tabler:shape' />
                                      {!hideText && 'Workflow'}
                                  </Box>
                              }
                          />
                          <Tab
                              value='settings'
                              label={
                                  <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                                      <Icon fontSize='1.25rem' icon='tabler:settings' />
                                      {!hideText && 'Settings'}
                                  </Box>
                              }
                          />
                          <Tab
                              value='variables'
                              label={
                                  <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                                      <Icon fontSize='1.25rem' icon='tabler:variable' />
                                      {!hideText && 'Variables'}
                                  </Box>
                              }
                          />
                          <Tab
                              value='logs'
                              label={
                                  <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                                      <Icon fontSize='1.25rem' icon='tabler:file-text' />
                                      {!hideText && 'Logs'}
                                  </Box>
                              }
                          />
                      </TabList>
                  </Grid>
                  <Grid item xs={12}>
                      <TabPanel sx={{ p: 0 }} value={activeTab}>
                          {tabContentList[activeTab]}
                      </TabPanel>
                  </Grid>
              </Grid>
          </TabContext>
      </Grid>
    </Grid>
  </>
}

export default automate
