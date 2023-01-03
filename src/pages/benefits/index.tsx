import { Helmet } from 'react-helmet-async';
import * as React from 'react';
// @mui
import { Container, Divider, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Slide from '@mui/material/Slide';
import Collapse from '@mui/material/Collapse';
// components

import './style.css';
// ----------------------------------------------------------------------

export default function BenefitsPage() {

  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

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
                    <button onClick={handleChange}>7 Tasks</button>
                  </div>
                </div>
              </div>
              {/* <div>
                <Slide direction="up" in={checked} container={containerRef.current} className='benefits_card_task_list'>
                  <p>Profile NFT is the passport to explore the Lens universeThis benefit contains 6 tasks and will allow you choose your own handle name once you finished.</p>
                </Slide>
              </div> */}
              <Collapse className='benefits_card_task_list' in={checked} timeout="auto" unmountOnExit>
                <p>Profile NFT is the passport to explore the Lens universeThis benefit contains 6 tasks and will allow you choose your own handle name once you finished.</p>
                <Divider className='divider' />
                <ul>
                  <li><img src='/assets/icons/vector.svg' /><span>Sent 10 Posts</span></li>
                  <li><img src='/assets/icons/vector.svg' /><span>Follow 50 people</span></li>
                  <li><img src='/assets/icons/vector.svg' /><span>Get 10 followers</span></li>
                  <li><img src='/assets/icons/vector.svg' /><span>Activate Lenster</span></li>
                  <li className='task_not_complete'><img src='/assets/icons/vector_none.svg' /><span>Using Lenster setup your avatar</span></li>
                  <li className='task_not_complete'><img src='/assets/icons/vector_none.svg' /><span>Using Lenster setup your cover image</span></li>
                </ul>
              </Collapse>
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
