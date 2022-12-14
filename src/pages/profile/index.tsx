import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
import './style.css';
// components

// ----------------------------------------------------------------------

export default function ProfileAppPage() {

  return (
    <>
      <Helmet>
        <title> Profile | Nosocial UI </title>
      </Helmet>
      {/* <Container maxWidth="xl">
      </Container> */}
      <div className='background' />
      <div className='container'>
        <div className='basic'>
          <div className='basic_info'>
            <div className='basic_info_avatar'>
              <img src='/assets/images/-yqkYEms_400x400.jpg'></img>
            </div>
            <div className='basic_info_data'>
              <div className='basic_info_data_up'>
                <div id='name'>Bob Dean</div>
                <div id='email'>@bob.lens</div>
              </div>
              <div className='basic_info_data_down'>
                <div id='address'>0x6C956B990179fcdfab0C323615f2a93af4A9a0ad |</div>
                <div id='followings'>10 Followings |</div>
                <div id='followers'>9,765 Followers |</div>
                <div id='birthday'>Joined March 2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
