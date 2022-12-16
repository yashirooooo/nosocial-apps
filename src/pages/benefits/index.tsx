import { Helmet } from 'react-helmet-async';
// @mui
import { Container, TextField, Typography } from '@mui/material';
// components

import './style.css';

// ----------------------------------------------------------------------

export default function BenefitsPage() {

  return (
    <>
      <Helmet>
        <title> Benefits | NoSocial Apps </title>
      </Helmet>

      <Container maxWidth="xl" className='benefits_page'>
        <div>
          <div className='benefits_list'>
            <div>    
              <TextField
                id="standard-read-only-input"
                defaultValue="In Progress"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                sx={ {
                  marginBottom: 2
                }}
              />
            </div>
            <div className='benefits_card'>
                <div className='benefits_card_progress'>
                  <img className='benefits_card_progress_icon' src='/assets/images/7.svg' />
                  <div className='benefits_card_progress_bar'>
                    <div id='bar' />
                    <div id='text'>
                      <div>
                        <span id='amount'>70</span>
                        <span id='unit'>Matic</span>
                        <span id='by'>By: lens</span>
                      </div>
                    </div>
                    <div className='benefits_card_progress_label'>
                      <span>7 Tasks</span>
                    </div>
                  </div>
                </div>
                <div className='benefits_card_task_list'>

                </div>
            </div>
          </div>
          <div className='benefits_list'>
            <div>    
              <TextField
                id="standard-read-only-input"
                defaultValue="Explore Benefits"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                sx={ {
                  marginBottom: 2
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
