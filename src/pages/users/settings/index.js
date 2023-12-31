import {useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Icon from "../../../@core/components/icon";
import TabPanel from "@mui/lab/TabPanel";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CustomTextField from "../../../@core/components/mui/text-field";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import IconButton from "@mui/material/IconButton";
import * as yup from "yup";
import FriendsTable from "../../../views/users/FriendsTable";
import Link from "next/link";

const ImgStyled = styled('img')(({ theme }) => ({
    width: 100,
    height: 100,
    marginRight: theme.spacing(6),
    borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'center'
    }
}))

function Account() {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title='Profile Details' />
                        <form>
                            <CardContent sx={{ pt: 0 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <ImgStyled src='/images/avatars/15.png' alt='Profile Pic' />
                                    <div>
                                        <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                                            Upload New Photo
                                            <input
                                                hidden
                                                type='file'
                                                accept='image/png, image/jpeg'
                                                id='account-settings-upload-image'
                                            />
                                        </ButtonStyled>
                                        <Typography sx={{ mt: 4, color: 'text.disabled' }}>Allowed PNG or JPEG. Max size of 800K.</Typography>
                                    </div>
                                </Box>
                            </CardContent>
                            <Divider />
                            <CardContent>
                                <Grid container spacing={5}>
                                    <Grid item xs={12}>
                                        <CustomTextField
                                            fullWidth
                                            label='Username'
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CustomTextField
                                            fullWidth
                                            label='email'
                                            type='email'
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(6.5)} !important` }}>
                                        <Button variant='contained' sx={{ mr: 4 }}>
                                            Save Changes
                                        </Button>
                                        <Button type='reset' variant='tonal' color='secondary'>
                                            Reset
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

const defaultValues = {
    newPassword: '',
    currentPassword: '',
    confirmNewPassword: ''
}

const schema = yup.object().shape({
    currentPassword: yup.string().min(8).required(),
    newPassword: yup
        .string()
        .min(8)
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character'
        )
        .required(),
    confirmNewPassword: yup
        .string()
        .required()
        .oneOf([yup.ref('newPassword')], 'Passwords must match')
})

function Security() {
    const [values, setValues] = useState({
        showNewPassword: false,
        showCurrentPassword: false,
        showConfirmNewPassword: false
    })

    // ** Hooks
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({ defaultValues, resolver: yupResolver(schema) })

    const handleClickShowCurrentPassword = () => {
        setValues({ ...values, showCurrentPassword: !values.showCurrentPassword })
    }

    const handleClickShowNewPassword = () => {
        setValues({ ...values, showNewPassword: !values.showNewPassword })
    }

    const handleClickShowConfirmNewPassword = () => {
        setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
    }

    const onPasswordFormSubmit = () => {
        toast.success('Password Changed Successfully')
        reset(defaultValues)
    }
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title='Change Password' />
                    <CardContent>
                        <form onSubmit={handleSubmit(onPasswordFormSubmit)}>
                            <Grid container spacing={5}>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name='currentPassword'
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { value, onChange } }) => (
                                            <CustomTextField
                                                fullWidth
                                                value={value}
                                                onChange={onChange}
                                                label='Current Password'
                                                placeholder='············'
                                                id='input-current-password'
                                                error={Boolean(errors.currentPassword)}
                                                type={values.showCurrentPassword ? 'text' : 'password'}
                                                {...(errors.currentPassword && { helperText: errors.currentPassword.message })}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position='end'>
                                                            <IconButton
                                                                edge='end'
                                                                onMouseDown={e => e.preventDefault()}
                                                                onClick={handleClickShowCurrentPassword}
                                                            >
                                                                <Icon
                                                                    fontSize='1.25rem'
                                                                    icon={values.showCurrentPassword ? 'tabler:eye' : 'tabler:eye-off'}
                                                                />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={5} sx={{ mt: 0 }}>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name='newPassword'
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { value, onChange } }) => (
                                            <CustomTextField
                                                fullWidth
                                                value={value}
                                                onChange={onChange}
                                                label='New Password'
                                                id='input-new-password'
                                                placeholder='············'
                                                error={Boolean(errors.newPassword)}
                                                type={values.showNewPassword ? 'text' : 'password'}
                                                {...(errors.newPassword && { helperText: errors.newPassword.message })}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position='end'>
                                                            <IconButton
                                                                edge='end'
                                                                onClick={handleClickShowNewPassword}
                                                                onMouseDown={e => e.preventDefault()}
                                                            >
                                                                <Icon fontSize='1.25rem' icon={values.showNewPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name='confirmNewPassword'
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { value, onChange } }) => (
                                            <CustomTextField
                                                fullWidth
                                                value={value}
                                                onChange={onChange}
                                                placeholder='············'
                                                label='Confirm New Password'
                                                id='input-confirm-new-password'
                                                error={Boolean(errors.confirmNewPassword)}
                                                type={values.showConfirmNewPassword ? 'text' : 'password'}
                                                {...(errors.confirmNewPassword && { helperText: errors.confirmNewPassword.message })}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position='end'>
                                                            <IconButton
                                                                edge='end'
                                                                onMouseDown={e => e.preventDefault()}
                                                                onClick={handleClickShowConfirmNewPassword}
                                                            >
                                                                <Icon
                                                                    fontSize='1.25rem'
                                                                    icon={values.showConfirmNewPassword ? 'tabler:eye' : 'tabler:eye-off'}
                                                                />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='h6'>Password Requirements:</Typography>
                                    <Box component='ul' sx={{ pl: 6, mb: 0, '& li': { mb: 1.5, color: 'text.secondary' } }}>
                                        <li>Minimum 8 characters long - the more, the better</li>
                                        <li>At least one lowercase & one uppercase character</li>
                                        <li>At least one number, symbol, or whitespace character</li>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant='contained' type='submit' sx={{ mr: 4 }}>
                                        Save Changes
                                    </Button>
                                    <Button type='reset' variant='tonal' color='secondary' onClick={() => reset()}>
                                        Reset
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

function Friends() {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <FriendsTable />
            </Grid>
        </Grid>
    )
}

const socialAccountsArr = [
    {
        title: 'Facebook',
        isConnected: false,
        logo: '/images/logos/facebook.png'
    },
    {
        title: 'Twitter',
        isConnected: true,
        username: '@Pixinvent',
        logo: '/images/logos/twitter.png'
    },
    {
        title: 'Instagram',
        isConnected: true,
        username: '@Pixinvent',
        logo: '/images/logos/instagram.png'
    },
    {
        title: 'Dribbble',
        isConnected: false,
        logo: '/images/logos/dribbble.png'
    },
    {
        title: 'Behance',
        isConnected: false,
        logo: '/images/logos/behance.png'
    }
]

function Connections() {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader
                            title='Accounts Connections'
                            titleTypographyProps={{ sx: { mb: 1 } }}
                            subheader={
                                <Typography sx={{ color: 'text.secondary' }}>
                                    Linked account for sign-in in LinkEase
                                </Typography>
                            }
                        />
                        <CardContent>
                            {socialAccountsArr.map(account => {
                                return (
                                    <Box
                                        key={account.title}
                                        sx={{
                                            gap: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            '&:not(:last-of-type)': { mb: 4 }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ mr: 4, minWidth: 45, display: 'flex', justifyContent: 'center' }}>
                                                <img src={account.logo} alt={account.title} height='38' />
                                            </Box>
                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <Typography variant='h6'>{account.title}</Typography>
                                                {account.isConnected ? (
                                                    <Typography
                                                        href='/'
                                                        component={Link}
                                                        onClick={e => e.preventDefault()}
                                                        sx={{ color: 'primary.main', textDecoration: 'none' }}
                                                    >
                                                        {account.username}
                                                    </Typography>
                                                ) : (
                                                    <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                                                        Not Connected
                                                    </Typography>
                                                )}
                                            </Box>
                                        </Box>
                                        <Button
                                            variant='tonal'
                                            sx={{ p: 1.5, minWidth: 38 }}
                                            color={account.isConnected ? 'error' : 'secondary'}
                                        >
                                            <Icon icon={account.isConnected ? 'tabler:trash' : 'tabler:link'} />
                                        </Button>
                                    </Box>
                                )
                            })}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader
                            title='Services Connections'
                            titleTypographyProps={{ sx: { mb: 1 } }}
                            subheader={
                                <Typography sx={{ color: 'text.secondary' }}>
                                    Linked account used by your automates
                                </Typography>
                            }
                            action={
                                <Button variant='contained' startIcon={<Icon icon='tabler:plus' />}>
                                    Add More Services
                                </Button>
                            }
                        />
                        <CardContent>
                            {socialAccountsArr.map(account => {
                                return (
                                    <Box
                                        key={account.title}
                                        sx={{
                                            gap: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            '&:not(:last-of-type)': { mb: 4 }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ mr: 4, minWidth: 45, display: 'flex', justifyContent: 'center' }}>
                                                <img src={account.logo} alt={account.title} height='38' />
                                            </Box>
                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <Typography variant='h6'>{account.title}</Typography>
                                                {account.isConnected ? (
                                                    <Typography
                                                        href='/'
                                                        component={Link}
                                                        onClick={e => e.preventDefault()}
                                                        sx={{ color: 'primary.main', textDecoration: 'none' }}
                                                    >
                                                        {account.username}
                                                    </Typography>
                                                ) : (
                                                    <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                                                        Not Connected
                                                    </Typography>
                                                )}
                                            </Box>
                                        </Box>
                                        <Button
                                            variant='tonal'
                                            sx={{ p: 1.5, minWidth: 38 }}
                                            color={account.isConnected ? 'error' : 'secondary'}
                                        >
                                            <Icon icon={account.isConnected ? 'tabler:trash' : 'tabler:link'} />
                                        </Button>
                                    </Box>
                                )
                            })}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default function index() {
    const [activeTab, setActiveTab] = useState("account")

    const hideText = useMediaQuery(theme => theme.breakpoints.down('md'))

    const handleChange = (event, value) => {
        setActiveTab(value)
    }

    const tabContentList = {
        account: <Account />,
        security: <Security />,
        friends: <Friends />,
        connections: <Connections />
    }

    return <>
        <Grid container spacing={6}>
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
                                    value='account'
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                                            <Icon fontSize='1.25rem' icon='tabler:user' />
                                            {!hideText && 'Account'}
                                        </Box>
                                    }
                                />
                                <Tab
                                    value='security'
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                                            <Icon fontSize='1.25rem' icon='tabler:lock' />
                                            {!hideText && 'Security'}
                                        </Box>
                                    }
                                />
                                <Tab
                                    value="friends"
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                                            <Icon fontSize='1.25rem' icon='tabler:users' />
                                            {!hideText && 'Friends'}
                                        </Box>
                                    }
                                />
                                <Tab
                                    value='connections'
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                                            <Icon fontSize='1.25rem' icon='tabler:link' />
                                            {!hideText && 'Connections'}
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
