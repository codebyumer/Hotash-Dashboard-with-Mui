import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { db } from '../../FirebaseConfig';
import { doc, collection, updateDoc, getDocs } from 'firebase/firestore';
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

export default function EditUsers({ open, handleClose, user }) {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, 'u');
  const handelNameChange = (event) => {
    setName(event.target.value);
  };
  const handelEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handelPhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const updateUser = async () => {
    const userDoc = doc(db, 'Products', product.id);
    await updateDoc(userDoc, {
      name: name,
      price: Number(price),
      category: category,
      date: new Date().toLocaleDateString('en-GB').replaceAll('/', '-'),
    });
    handleClose();
    Swal.fire('Updated!', 'Your Product has been updated.', 'success');
    getUsers();
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
            Edit User
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
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={handelEmailChange}
                  label="Email"
                  sx={{
                    minWidth: '100%',
                  }}
                />
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography variant="h5" align="center">
                <Button variant="contained" onClick={updateUser}>
                  Update
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
