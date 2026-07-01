import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../FirebaseConfig';

export default function Users() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));

      const usersList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUsers(usersList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Admin':
        return 'error';
      case 'Editor':
        return 'warning';
      case 'User':
        return 'info';
      default:
        return 'default';
    }
  };

  const getStatusColor = (status) => {
    return status === 'Active' ? 'success' : 'default';
  };
  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: '20px', fontWeight: 600 }}
      >
        Users Management
      </Typography>
      <Divider />

      <Box height={10} />

      <Stack
        direction="row"
        spacing={2}
        sx={{ px: 2, py: 1, alignItems: 'center' }}
      >
        <Autocomplete
          disablePortal
          options={users}
          sx={{ width: 300 }}
          getOptionLabel={(option) => option.name || ''}
          renderInput={(params) => (
            <TextField {...params} size="small" label="Search Users" />
          )}
        />
      </Stack>

      <Box height={10} />

      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="users table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                style={{ minWidth: '200px', fontWeight: 600 }}
              >
                User
              </TableCell>
              <TableCell
                align="left"
                style={{ minWidth: '150px', fontWeight: 600 }}
              >
                Phone
              </TableCell>
              <TableCell
                align="left"
                style={{ minWidth: '100px', fontWeight: 600 }}
              >
                Role
              </TableCell>
              <TableCell
                align="left"
                style={{ minWidth: '100px', fontWeight: 600 }}
              >
                Status
              </TableCell>
              <TableCell
                align="center"
                style={{ minWidth: '120px', fontWeight: 600 }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow key={user.id} hover role="checkbox" tabIndex={-1}>
                  <TableCell align="left">
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar src={user.avatar} alt={user.name} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {user.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {user.email}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>

                  <TableCell align="left">{user.phone}</TableCell>

                  <TableCell align="left">
                    <Chip
                      label={user.role}
                      color={getRoleColor(user.role)}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>

                  <TableCell align="left">
                    <Chip
                      label={user.status}
                      color={getStatusColor(user.status)}
                      size="small"
                    />
                  </TableCell>

                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <IconButton size="small" sx={{ color: 'green' }}>
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" sx={{ color: 'blue' }}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" sx={{ color: 'darkred' }}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
