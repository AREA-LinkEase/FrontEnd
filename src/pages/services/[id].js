import {useRouter} from "next/router";
import {useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Settings from "../../views/services/tabs/Settings";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Icon from "../../@core/components/icon";
import TabPanel from "@mui/lab/TabPanel";
import Triggers from "../../views/services/tabs/Triggers";
import Actions from "../../views/services/tabs/Actions";
import Users from "../../views/services/tabs/Users";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CustomAvatar from "../../@core/components/mui/avatar";
import Button from "@mui/material/Button";

export default function service() {
    const router = useRouter();
    const { id } = router.query;

    const [activeTab, setActiveTab] = useState("triggers")

    const hideText = useMediaQuery(theme => theme.breakpoints.down('md'))

    const handleChange = (event, value) => {
        setActiveTab(value)
    }

    const tabContentList = {
        triggers: <Triggers />,
        actions: <Actions />,
        settings: <Settings />,
        users: <Users />
    }

    return <>
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Card>
                    <CardContent sx={{ display: 'flex', alignItems: 'flex-end', padding: 5, justifyContent: 'space-between' }}>
                        <Grid item xs={12} sx={{display: 'flex', alignItems: 'flex-end'}}>
                            <CustomAvatar
                                variant='rounded'
                                sx={{ width: 100, height: 100, mr: 6 }}
                            />
                            <Typography variant='h4' sx={{ mb: 2 }}>Nom du service</Typography>
                        </Grid>
                        <Button variant='contained' sx={{ '& svg': { mr: 1 } }} color="success">
                            <Icon icon='tabler:check' fontSize='1rem' />
                            Connected
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
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
                                    value='triggers'
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                                            <Icon fontSize='1.25rem' icon='tabler:urgent' />
                                            {!hideText && 'Triggers'}
                                        </Box>
                                    }
                                />
                                <Tab
                                    value='actions'
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                                            <Icon fontSize='1.25rem' icon='tabler:sort-ascending' />
                                            {!hideText && 'Actions'}
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
                                    value='users'
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                                            <Icon fontSize='1.25rem' icon='tabler:file-text' />
                                            {!hideText && 'Users'}
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
