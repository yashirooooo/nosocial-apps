import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Divider, TextField, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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
        <div className='filter'>
          <div className='filter_button'>Hide Filter</div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Benefit Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="nft"
              name="radio-buttons-group"
            >
              <FormControlLabel value="nft" control={<Radio />} label="NFT" />
              <FormControlLabel value="token" control={<Radio />} label="Token" />
              <FormControlLabel value="membership" control={<Radio />} label="Membership" />
              <FormControlLabel value="others" control={<Radio />} label="Others" />
            </RadioGroup>
          </FormControl>

          <Divider className='divider' />

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Eligibility Criteria</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="publications"
              name="radio-buttons-group"
            >
              <FormControlLabel value="publications" control={<Radio />} label="Publications" />
              <FormControlLabel value="followers" control={<Radio />} label="Followers" />
              <FormControlLabel value="activities" control={<Radio />} label="Activities" />
              <FormControlLabel value="others" control={<Radio />} label="Others" />
            </RadioGroup>
          </FormControl>

          <Divider className='divider' />

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="active"
              name="radio-buttons-group"
            >
              <FormControlLabel value="active" control={<Radio />} label="Active" />
              <FormControlLabel value="notStarted" control={<Radio />} label="NotStarted" />
              <FormControlLabel value="expired" control={<Radio />} label="Expired" />
            </RadioGroup>
          </FormControl>
          
        </div>
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
