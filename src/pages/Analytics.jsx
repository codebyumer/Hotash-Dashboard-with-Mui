import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BarMuiChart from '../charts/BarMuiChart';
import AccordionDash from '../components/AccordionDash';
import { CountUp } from 'use-count-up';
const Analytics = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Grid container spacing={2}>
          <Grid size={8}>
            <Stack spacing={2} direction="row">
              <Card
                sx={{
                  width: '50%',
                  height: '150px',
                  background:
                    'linear-gradient(158deg, rgba(40, 34, 70, 1) 0%, rgba(30, 47, 141, 1) 100%)',
                }}
              >
                <CardContent>
                  <div>
                    <CreditCardIcon sx={{ color: 'white' }} />
                  </div>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: 'white' }}
                  >
                    <CountUp
                      isCounting
                      delay={0.4}
                      end={500}
                      prefix="$"
                      duration={0.6}
                    />
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    sx={{ color: '#cbd1d1' }}
                  >
                    Total Orders
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  width: '50%',
                  height: '150px',
                  background:
                    'linear-gradient(158deg, rgba(53, 138, 143, 1) 0%, rgba(91, 180, 96, 1) 100%)',
                }}
              >
                <CardContent>
                  <div>
                    <BusinessCenterIcon sx={{ color: 'white' }} />
                  </div>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: 'white' }}
                  >
                    <CountUp
                      isCounting
                      delay={0.4}
                      end={900}
                      prefix="$"
                      duration={0.6}
                    />
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    sx={{ color: '#cbd1d1' }}
                  >
                    Total Earnings
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack spacing={2}>
              <Card
                sx={{
                  width: '100%',
                  height: '67px',
                  background:
                    'linear-gradient(158deg, rgba(53, 138, 143, 1) 0%, rgba(91, 180, 96, 1) 100%)',
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CreditCardIcon sx={{ color: 'white' }} />
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: 'white' }}
                    >
                      $203K
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#cbd1d1',
                      ml: 4,
                      mt: -1.5,
                    }}
                  >
                    Total Income
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  width: '100%',
                  height: '67px',
                  background:
                    'linear-gradient(158deg, rgba(40, 34, 70, 1) 0%, rgba(30, 47, 141, 1) 100%)',
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CreditCardIcon sx={{ color: 'white' }} />
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: 'white' }}
                    >
                      $203K
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#cbd1d1',
                      ml: 4,
                      mt: -1.5,
                    }}
                  >
                    Total Income
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box height={20} sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <Card sx={{ height: 60 + 'vh' }}>
              <CardContent
                sx={{
                  height: '100%',
                }}
              >
                <BarMuiChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid size={4}>
            <Card sx={{ height: '60vh', width: '100%', display: 'flex' }}>
              <CardContent>
                <Typography sx={{ fontWeight: '600' }}>
                  Popular Products
                </Typography>
                <AccordionDash />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Analytics;
