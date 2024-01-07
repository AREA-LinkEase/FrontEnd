import {styled} from "@mui/material/styles";
import CustomTextField from "../../@core/components/mui/text-field";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import {Icon} from "@iconify/react";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import {useContext, useState} from "react";
import {UserContext} from "../../hook/UserContext";
import {Workspace} from "../../models/Workspaces";
import toast from "react-hot-toast";
import {Automate} from "../../models/Automates";

const CustomTextFieldStyled = styled(CustomTextField)(({ theme }) => ({
    '& .MuiInputBase-root.MuiFilledInput-root': {
        width: '100%',
        backgroundColor: `${theme.palette.background.paper} !important`
    },
    [theme.breakpoints.up('sm')]: {
        width: '55%'
    }
}))

export default function automates() {
    const { token } = useContext(UserContext);
    const [automates, setAutomates] = useState([])
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Card>
                    <CardContent sx={{ pt: 24, textAlign: 'center', pb: theme => `${theme.spacing(24)} !important` }}>
                        <Typography sx={{ mb: 4, fontWeight: 500, fontSize: '1.625rem', lineHeight: 1.385 }}>
                            Search Automates in our community !
                        </Typography>

                        <CustomTextFieldStyled
                            size='medium'
                            placeholder='Search an automate....'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <Icon fontSize='1.25rem' icon='tabler:search' />
                                    </InputAdornment>
                                )
                            }}
                            onChange={async (e) => {
                              let input = e.target.value;

                              if (input === "") {
                                // mettre le get all
                              } else {
                                try {
                                  let result = await Automate.search(token, input);

                                  if (typeof result !== "number") {
                                    setAutomates(result)
                                  }
                                } catch (e) {
                                  console.log(e)
                                  toast.error("An error has occurred")
                                }
                              }
                            }}
                        />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                {automates.map((automate, i) => {
                  return (
                    <Card key={i}>
                      <CardHeader
                        title={
                          <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 2 } }}>
                            <Icon fontSize={20} icon='tabler:toggle-left' />
                            <Typography fontSize={20}>{automate.title}</Typography>
                          </Box>
                        }
                        subheader={automate.description}
                        action={
                          <Fab size="small" color='info' aria-label='edit' href={"/automates/" + automate.id}>
                            <Icon width={20} icon='tabler:chevron-right'/>
                          </Fab>
                        }
                      />
                      <CardContent>
                        <Grid item xs={12} sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1.25 } }}>
                            <Icon icon='tabler:eye' />
                            <Typography>{automate.views}</Typography>
                          </Box>
                        </Grid>
                      </CardContent>
                    </Card>
                  )
                })}
            </Grid>
        </Grid>
    )
}
