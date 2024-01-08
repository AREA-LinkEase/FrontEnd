// ** React Imports
import {useContext, useEffect, useState} from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import AuthIllustrationV1Wrapper from 'src/views/pages/auth/AuthIllustrationV1Wrapper'
import {useRouter} from "next/router";
import {Alert, Grid} from "@mui/material";
import {Auth} from "../../../models/Auth";
import {UserContext} from "../../../hook/UserContext";
import Workflow from 'src/@core/components/reactflow'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '25rem' }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary
  }
}))

const LoginV1 = () => {
  // ** State
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const { login } = useContext(UserContext);

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const onSubmit = async () => {
    try {
      let result = await Auth.login(email, values.password)

      if (typeof result === "object") {
        await login(result.jwt)
        router.replace("/")
      } else {
        setError("Something wrong happen...")
      }
    } catch (e) {
      console.log(e)
      setError("Something wrong happen...")
    }
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const [value, setValue] = useState({
    "nodes": [
      {
        "id": "1",
        "type": "startBlock",
        "position": {
          "x": 998.7970559999999,
          "y": -0.1986559999999713
        },
        "data": {
          "label": "1"
        }
      },
      {
        "id": "2",
        "type": "endBlock",
        "position": {
          "x": 860.5,
          "y": 202.25
        },
        "data": {
          "label": "2"
        }
      },
      {
        "id": "3",
        "type": "booleanBlock",
        "position": {
          "x": 269.2331200000004,
          "y": -186.90095999999988
        },
        "data": {
          "value": false,
          "type": "bool",
          "label": "3"
        }
      },
      {
        "id": "4",
        "type": "equalBlock",
        "position": {
          "x": 343.88272000000035,
          "y": 22.117920000000044
        },
        "data": {
          "type": "bool",
          "typeOutput": "bool",
          "value": "false",
          "label": "4"
        }
      },
      {
        "id": "5",
        "type": "stringBlock",
        "position": {
          "x": 769.3854400000002,
          "y": -216.7607999999999
        },
        "data": {
          "value": "k",
          "type": "str",
          "label": "5"
        }
      }
    ],
    "edges": [
      {
        "id": "exit#entry",
        "source": "1",
        "target": "2"
      },
      {
        "id": "exit#second",
        "source": "3",
        "target": "4"
      }
    ]
  });

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Grid>
      <Workflow value={value} onChange={setValue}/>
    </Grid>
  )
}
LoginV1.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginV1.needAuth = false

export default LoginV1
