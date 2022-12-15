import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
// components

// ----------------------------------------------------------------------

export default function BenefitsPage() {

  return (
    <>
      <Helmet>
        <title> Benefits | NoSocial Apps </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Benefits
        </Typography>
      </Container>
    </>
  );
}
