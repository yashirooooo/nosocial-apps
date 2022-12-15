import { Helmet } from 'react-helmet-async';
// @mui
import { Card, CardContent, TextField, Typography } from '@mui/material';
import './style.css';
// components

// ----------------------------------------------------------------------

export default function ProfileAppPage() {

  return (
    <>
      <Helmet>
        <title> Profile | NoSocial Apps </title>
      </Helmet>
      {/* <Container maxWidth="xl">
      </Container> */}
      <div className='cover_img' >
        <img src='/assets/images/1028306.png' />
      </div>
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
        <div className='profile_list'>
          <div className='category_container'>
            <div>
              <TextField
                id="standard-read-only-input"
                defaultValue="AI Tags"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </div>
            <div className='category_data_list'>

            </div>
          </div>
          <div className='category_container'>
            <div>
              <TextField
                id="standard-read-only-input"
                defaultValue="Achievements"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </div>
            <div className='category_data_list'>

            </div>
          </div>
          <div className='category_container'>
            <div>
              <TextField
                id="standard-read-only-input"
                defaultValue="Activities"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </div>
            <div className='category_data_list'>
              <div className='category_data_list_cl'>
                
                <div className='activity_data_card'>
                  <Card>
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Posts
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        76
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#9AE4A7' }}>
                        +11% of last week
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div className='activity_data_card'>
                  <Card>
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Mirrors
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        19,231
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#EF8F8F' }}>
                        -56.6% of last week
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div className='activity_data_card'>
                  <Card>
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Comments
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        156
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#9AE4A7' }}>
                        +17% of last week
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
                <div className='activity_data_card'>
                  <Card>
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Collects
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        156
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#9AE4A7' }}>
                        +17% of last week
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
            </div>
          </div>
          <div className='category_container'>
            <div>
              <TextField
                id="standard-read-only-input"
                defaultValue="Benefits"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </div>
            <div className='category_data_list'>
              <div className='category_data_list_cl'>
                <div className='benefits_data_card'>
                  <img id='icon' src='/assets/images/image2.svg' />
                  <div id='desc'>
                    <div id='top'>1.23 Ethers</div>
                    <div id='bottom'>by lenster</div>
                  </div>
                  <img id='img' src='/assets/images/image1.svg' />
                </div>
                <div className='benefits_data_card'>
                  <img id='icon' src='/assets/images/image2.svg' />
                  <div id='desc'>
                    <div id='top'>1.23 Ethers</div>
                    <div id='bottom'>by lenster</div>
                  </div>
                  <img id='img' src='/assets/images/image1.svg' />
                </div>

              </div>
              <div className='category_data_list_cl'>
                <div className='benefits_data_card'>
                  <img id='icon' src='/assets/images/image2.svg' />
                  <div id='desc'>
                    <div id='top'>1.23 Ethers</div>
                    <div id='bottom'>by lenster</div>
                  </div>
                  <img id='img' src='/assets/images/image1.svg' />
                </div>

                <div className='benefits_data_card'>
                  <img id='icon' src='/assets/images/image2.svg' />
                  <div id='desc'>
                    <div id='top'>1.23 Ethers</div>
                    <div id='bottom'>by lenster</div>
                  </div>
                  <img id='img' src='/assets/images/image1.svg' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
