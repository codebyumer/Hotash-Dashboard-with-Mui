import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import LockIcon from '@mui/icons-material/Lock';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import SmsIcon from '@mui/icons-material/Sms';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SecurityIcon from '@mui/icons-material/Security';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Settings() {
  const [tabValue, setTabValue] = React.useState(0);
  const [darkMode, setDarkMode] = React.useState(false);
  const [emailNotif, setEmailNotif] = React.useState(true);
  const [smsNotif, setSmsNotif] = React.useState(false);
  const [pushNotif, setPushNotif] = React.useState(true);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'ur', label: 'Urdu' },
    { value: 'itl', label: 'Italian' },
    { value: 'fr', label: 'French' },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
        Settings
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Paper sx={{ p: 1 }}>
            <Tabs
              orientation="vertical"
              value={tabValue}
              onChange={handleTabChange}
              sx={{
                '& .MuiTab-root': {
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  textTransform: 'none',
                  minHeight: 48,
                },
              }}
            >
              <Tab
                icon={<PhotoCameraIcon />}
                iconPosition="start"
                label="Profile"
              />
              <Tab icon={<LockIcon />} iconPosition="start" label="Security" />
              <Tab
                icon={<NotificationsIcon />}
                iconPosition="start"
                label="Notifications"
              />
              <Tab
                icon={<LanguageIcon />}
                iconPosition="start"
                label="Preferences"
              />
            </Tabs>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Paper sx={{ p: 3 }}>
            {tabValue === 0 && (
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Profile Information
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Update your personal information and profile picture
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Stack
                  direction="row"
                  spacing={3}
                  alignItems="center"
                  sx={{ mb: 4 }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Avatar src="" sx={{ width: 100, height: 100 }} />
                    <IconButton
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        bgcolor: 'primary.main',
                        color: 'white',
                        '&:hover': { bgcolor: 'primary.dark' },
                      }}
                      size="small"
                    >
                      <PhotoCameraIcon fontSize="small" />
                    </IconButton>
                  </Box>
                  <Box>
                    <Typography variant="h6">Ali Khan</Typography>
                    <Typography variant="body2" color="text.secondary">
                      ali@example.com
                    </Typography>
                    <Button size="small" sx={{ mt: 1 }}>
                      Change Photo
                    </Button>
                  </Box>
                </Stack>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="First Name"
                      defaultValue="Ali"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Last Name"
                      defaultValue="Khan"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Email"
                      defaultValue="ali@example.com"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Phone"
                      defaultValue="+92 300 1234567"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label="Address"
                      defaultValue="Karachi, Pakistan"
                      fullWidth
                      size="small"
                      multiline
                      rows={2}
                    />
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    mt: 3,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 1,
                  }}
                >
                  <Button variant="outlined">Cancel</Button>
                  <Button variant="contained" startIcon={<SaveIcon />}>
                    Save Changes
                  </Button>
                </Box>
              </Box>
            )}
            {tabValue === 1 && (
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Security Settings
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Change your password and manage security options
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label="Current Password"
                      type="password"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="New Password"
                      type="password"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Confirm Password"
                      type="password"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                </Grid>

                <Box sx={{ mt: 3 }}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Enable Two-Factor Authentication"
                  />
                </Box>

                <Box
                  sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}
                >
                  <Button variant="contained" startIcon={<SecurityIcon />}>
                    Update Password
                  </Button>
                </Box>
                <Box
                  sx={{
                    mt: 5,
                    p: 2,
                    border: '1px solid #f44336',
                    borderRadius: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: '#f44336', fontWeight: 600, mb: 1 }}
                  >
                    Danger Zone
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Once you delete your account, there is no going back.
                  </Typography>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteForeverIcon />}
                  >
                    Delete Account
                  </Button>
                </Box>
              </Box>
            )}
            {tabValue === 2 && (
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Notification Preferences
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Choose how you want to be notified
                </Typography>
                <Divider sx={{ mb: 2 }} />

                <List>
                  <ListItem
                    secondaryAction={
                      <Switch
                        checked={emailNotif}
                        onChange={(e) => setEmailNotif(e.target.checked)}
                      />
                    }
                  >
                    <ListItemIcon>
                      <EmailIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Email Notifications"
                      secondary="Receive updates via email"
                    />
                  </ListItem>

                  <Divider />

                  <ListItem
                    secondaryAction={
                      <Switch
                        checked={smsNotif}
                        onChange={(e) => setSmsNotif(e.target.checked)}
                      />
                    }
                  >
                    <ListItemIcon>
                      <SmsIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="SMS Notifications"
                      secondary="Get text messages on your phone"
                    />
                  </ListItem>

                  <Divider />

                  <ListItem
                    secondaryAction={
                      <Switch
                        checked={pushNotif}
                        onChange={(e) => setPushNotif(e.target.checked)}
                      />
                    }
                  >
                    <ListItemIcon>
                      <NotificationsIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Push Notifications"
                      secondary="Browser push notifications"
                    />
                  </ListItem>
                </List>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
