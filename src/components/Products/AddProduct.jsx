import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { db } from '../../FirebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { useAppStore } from '../../AppStore';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddProduct({ open, handleClose }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, 'Products');
  const handelNameChange = (event) => {
    setName(event.target.value);
  };
  const handelPriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handelCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const categories = [
    {
      value: 'Mobile',
      label: 'Mobile',
    },
    {
      value: 'Camera',
      label: 'Camera',
    },
    {
      value: 'Laptop',
      label: 'Laptop',
    },
  ];
  const createUser = async () => {
    await addDoc(empCollectionRef, {
      name: name,
      price: Number(price),
      category: category,
      date: new Date().toLocaleDateString('en-GB').replaceAll('/', '-'),
    });
    getUsers();
    handleClose();
    Swal.fire('Submitted!', 'Your Product has been added.', 'success');
  };
  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    const products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setRows(products);
  };
  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" align="center">
            Add Product
          </Typography>
          <IconButton
            style={{ position: 'absolute', top: '0', right: '0' }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={handelNameChange}
                value={name}
                size="small"
                sx={{ minWidth: '100%', mt: 2 }}
              />
            </Grid>
            <Grid size={{ xs: 6 }}>
              <FormControl
                variant="outlined"
                size="small"
                sx={{ width: '100%' }}
              >
                <InputLabel htmlFor="price-input">Price</InputLabel>
                <OutlinedInput
                  id="price-input"
                  type="number"
                  value={price}
                  onChange={handelPriceChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <AttachMoneyIcon fontSize="small" />
                    </InputAdornment>
                  }
                  label="Price"
                  sx={{
                    minWidth: '100%',
                    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button':
                      {
                        WebkitAppearance: 'none',
                        margin: 0,
                      },
                    '& input[type=number]': {
                      MozAppearance: 'textfield',
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <TextField
                select
                id="outlined-basic"
                label="Category"
                variant="outlined"
                onChange={handelCategoryChange}
                value={category}
                size="small"
                sx={{ minWidth: '100%' }}
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography variant="h5" align="center">
                <Button variant="contained" onClick={createUser}>
                  Submit
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
