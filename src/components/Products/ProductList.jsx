import * as React from 'react';
import { useEffect, useState } from 'react';
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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { db } from '../../FirebaseConfig';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AddProduct from './AddProduct';
import { useAppStore } from '../../AppStore';
import EditProduct from './EditProduct';
import Skeleton from '@mui/material/Skeleton';
export default function ProductsList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const rows = useAppStore((state) => state.rows);
  const setRows = useAppStore((state) => state.setRows);
  const [allRows, setAllrows] = React.useState([]);
  const empCollectionRef = collection(db, 'Products');
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [productId, setProductId] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    const products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setRows(products);
    setAllrows(products);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const deleteUser = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteApi(id);
      }
    });
  };
  const deleteApi = async (id) => {
    const userDoc = doc(db, 'Products', id);
    await deleteDoc(userDoc);
    Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    getUsers();
    setPage(0);
  };
  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      setRows(allRows);
    }
    setPage(0);
  };
  const editData = (id, name, price, category) => {
    const data = {
      id: id,
      name: name,
      price: price,
      category: category,
    };
    setProductId(data);
    handleEditOpen();
  };

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: '20px' }}
        >
          Products List
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
            options={rows}
            sx={{ width: 300 }}
            onChange={(e, v) => filterData(v)}
            getOptionLabel={(rows) => rows.name || ''}
            renderInput={(params) => (
              <TextField {...params} size="small" label="Search Products" />
            )}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            variant="contained"
            endIcon={<AddCircleIcon />}
            onClick={handleOpen}
          >
            Add
          </Button>
          <AddProduct open={open} handleClose={handleClose} />
          <EditProduct
            key={productId?.id || 'new'}
            open={editOpen}
            handleClose={handleEditClose}
            product={productId}
          />
        </Stack>
        <Box height={10} />
        <TableContainer sx={{ maxHeight: 450 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ minWidth: '100px' }}>
                  Name
                </TableCell>
                <TableCell align="left" style={{ minWidth: '100px' }}>
                  Price
                </TableCell>
                <TableCell align="left" style={{ minWidth: '100px' }}>
                  Category
                </TableCell>
                <TableCell align="left" style={{ minWidth: '100px' }}>
                  Date
                </TableCell>
                <TableCell align="left" style={{ minWidth: '100px' }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow key={row.id} hover role="checkbox" tabIndex={-1}>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">
                        {row.price || row.Price}
                      </TableCell>
                      <TableCell align="left">{row.category}</TableCell>
                      <TableCell align="left">{row.date}</TableCell>
                      <TableCell align="left">
                        <Stack spacing={2} direction="row">
                          <EditIcon
                            style={{
                              fontSize: '20px',
                              color: 'blue',
                              cursor: 'pointer',
                            }}
                            className="cursor-pointer"
                            onClick={() =>
                              editData(
                                row.id,
                                row.name,
                                row.price || row.Price,
                                row.category,
                              )
                            }
                          />
                          <DeleteIcon
                            style={{
                              fontSize: '20px',
                              color: 'darkred',
                              cursor: 'pointer',
                            }}
                            onClick={() => {
                              deleteUser(row.id);
                            }}
                          />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {rows.length === 0 && (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <Stack spacing={1} sx={{ p: 2 }}>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Stack>
        </Paper>
      )}
    </>
  );
}
