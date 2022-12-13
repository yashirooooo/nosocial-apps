import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
// components

// ----------------------------------------------------------------------

export default function AppsPage() {
  return (
    <>
      <Helmet>
        <title> Apps | Nosocial UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Apps
        </Typography>
      </Container>
    </>
  );
}
