import Link from "next/link";
import Icon from "../../@core/components/icon";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import CustomAvatar from "../../@core/components/mui/avatar";
import {useState} from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OptionsMenu from "../../@core/components/option-menu";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CustomTextField from "../../@core/components/mui/text-field";
import {DataGrid} from "@mui/x-data-grid";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import CustomChip from 'src/@core/components/mui/chip'

const defaultColumns = [
  {
    flex: 0.2,
    field: 'id',
    minWidth: 90,
    headerName: 'Name',
    renderCell: ({ row }) => <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CustomAvatar skin='light' color='info' sx={{ mr: 4, width: 30, height: 30 }}>
        <Icon icon='tabler:command' fontSize={20} color={row.color}/>
      </CustomAvatar>
      <Typography sx={{ color: 'text.secondary' }}>{row.name}</Typography>
    </Box>
  },
  {
    flex: 0.15,
    minWidth: 80,
    field: 'Owner',
    headerName: 'Owner',
    renderCell: ({ row }) => <>
      <Typography sx={{ color: 'text.secondary' }}>{row.owner}</Typography>
    </>
  },
  {
    flex: 0.3,
    minWidth: 125,
    field: 'Users',
    headerName: 'Users',
    renderCell: ({ row }) => <AvatarGroup className='pull-up' max={4}>
      {row.users.map((user) => {
        return <Avatar src={user.avatar} alt={user.username} />
      })}
    </AvatarGroup>
  },
  {
    flex: 0.25,
    minWidth: 90,
    field: 'Status',
    headerName: 'Status',
    renderCell: ({ row }) => <CustomChip rounded label={row.status} skin='light' color={(row.status === "enable" ? "success" : "error")} />
  }
]

const WorkspacesTable = ({handleDrawer}) => {
  const [value, setValue] = useState('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  const columns = [
    ...defaultColumns,
    {
      flex: 0.1,
      minWidth: 130,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title='Delete Workspace'>
            <IconButton size='small' onClick={() => {}}>
              <Icon icon='tabler:trash' />
            </IconButton>
          </Tooltip>
          <Tooltip title='View'>
            <IconButton size='small' component={Link} href={"#"}>
              <Icon icon='tabler:eye' />
            </IconButton>
          </Tooltip>
          <OptionsMenu
            iconButtonProps={{ size: 'small' }}
            menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
            options={[
              {
                text: (row.status === "enable") ? "disable" : "enable",
                icon: <Icon icon={'tabler:' + ((row.status === "enable") ? "pause" : "play")} fontSize='1.25rem' />
              },
              {
                text: 'Edit',
                href: `#`,
                icon: <Icon icon='tabler:pencil' fontSize='1.25rem' />
              },
              {
                text: 'Duplicate',
                icon: <Icon icon='tabler:copy' fontSize='1.25rem' />
              }
            ]}
          />
        </Box>
      )
    }
  ]

  return (
    <Card>
      <CardContent
        sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Button variant='contained' startIcon={<Icon icon='tabler:plus' />} onClick={() => handleDrawer()}>
          Create Workspace
        </Button>
        <Box sx={{ gap: 4, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <CustomTextField value={value} placeholder='Search Workspace' onChange={e => setValue(e.target.value)} />
        </Box>
      </CardContent>
      <DataGrid
        autoHeight
        rowHeight={54}
        rows={[
          {
            "id": 0,
            "name": "test",
            "color": "red",
            "owner": "moustafa",
            "users": [
              {
                "username": "moustafa",
                "avatar": "/images/avatars/1.png"
              }
            ],
            "status": "enable"
          }
        ]}
        columns={columns}
        disableRowSelectionOnClick
        paginationModel={paginationModel}
        pageSizeOptions={[6, 10, 25, 50]}
        onPaginationModelChange={setPaginationModel}
      />
    </Card>
  )
}

export default WorkspacesTable
