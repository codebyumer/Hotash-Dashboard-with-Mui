import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GeoChart from '../charts/GerChart';
import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';
import { CountUp } from 'use-count-up';
const Dashboard = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Grid container spacing={2}>
          <Grid size={6}>
            <Stack spacing={2}>
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
                      <Typography variant="body1" sx={{ color: 'white' }}>
                        Visitors
                      </Typography>
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
                        end={25225}
                        duration={0.6}
                        thousandsSeparator=","
                      />
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: '#cbd1d1' }}
                    >
                      Total Last Month
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
                    <Typography variant="body1" sx={{ color: 'white' }}>
                      Visitors
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: 'white' }}
                    >
                      <CountUp
                        isCounting
                        delay={0.4}
                        end={24630}
                        duration={0.6}
                        thousandsSeparator=","
                      />
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: '#cbd1d1' }}
                    >
                      Total Last Week
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={6}>
            <Card sx={{ width: '100%', height: '316px' }}>
              <CardContent>
                <BarChart />
              </CardContent>
            </Card>
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
                <GeoChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid size={4}>
            <Card sx={{ height: '60vh', width: '100%', display: 'flex' }}>
              <CardContent
                sx={{
                  flex: 1,
                  p: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:last-child': { pb: 0 },
                }}
              >
                <Box sx={{ width: '100%', height: '100%' }}>
                  <PieChart />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
