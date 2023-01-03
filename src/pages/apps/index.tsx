import { Helmet } from 'react-helmet-async';
// @mui
import { Container, TextField, Typography } from '@mui/material';
// components
import './style.css';
// ----------------------------------------------------------------------

export default function AppsPage() {
  return (
    <>
      <Helmet>
        <title> Apps | NoSocial Apps </title>
      </Helmet>

      <Container maxWidth="xl" className='apps_container'>
        <div>
          <div className='apps_list'>
            <div>    
              <TextField
                id="standard-read-only-input"
                defaultValue="Your Apps"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </div>
            <div className='app_card_list'>
              <div className='app_card_container'>
                <div className='app_card'>
                  <img className='app_card_icon' src='/assets/images/3.svg' />
                  <div className='app_card_content'>
                    <div className='app_card_content_text'>
                      <div className='app_card_content_text_top'>Lenster</div>
                      <div className='app_card_content_text_bottom'>
                        Lenster is a composable, decentralized, and permissionless social media web app built with Lens Protocol.
                      </div>
                    </div>
                    <div className='app_card_content_button'>
                      Launch
                    </div>
                  </div>
                </div>
                <div className='app_detail'>
                  <div className='app_detail_panel'>

                  </div>
                  <div className='app_detail_panel'>

                  </div>
                  <div className='app_detail_panel'>

                  </div>
                  <div className='app_detail_panel'>

                  </div>
                </div>
              </div>

              <div className='app_card_container'>
                <div className='app_card'>
                  <img className='app_card_icon' src='/assets/images/4.svg' />
                  <div className='app_card_content'>
                    <div className='app_card_content_text'>
                      <div className='app_card_content_text_top'>Lenster</div>
                      <div className='app_card_content_text_bottom'>
                        Lenster is a composable, decentralized, and permissionless social media web app built with Lens Protocol.
                      </div>
                    </div>
                    <div className='app_card_content_button'>
                      Launch
                    </div>
                  </div>
                </div>
                <div className='app_detail'>
                  <div className='app_detail_panel'>

                  </div>
                  <div className='app_detail_panel'>

                  </div>
                  <div className='app_detail_panel'>

                  </div>
                  <div className='app_detail_panel'>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='apps_list'>
            <div>
              <TextField
                id="standard-read-only-input"
                defaultValue="Explore Apps"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </div>
            <div className='app_card_list'>
              <div className='app_card_container'>
                <div className='app_card'>
                  <img className='app_card_icon' src='/assets/images/5.svg' />
                  <div className='app_card_content'>
                    <div className='app_card_content_text'>
                      <div className='app_card_content_text_top'>Lenster</div>
                      <div className='app_card_content_text_bottom'>
                        Lenster is a composable, decentralized, and permissionless social media web app built with Lens Protocol.
                      </div>
                    </div>
                    <div className='app_card_content_button'>
                      Activate
                    </div>
                  </div>
                </div>
              </div>

              <div className='app_card_container'>
                <div className='app_card'>
                  <img className='app_card_icon' src='/assets/images/6.svg' />
                  <div className='app_card_content'>
                    <div className='app_card_content_text'>
                      <div className='app_card_content_text_top'>Lenster</div>
                      <div className='app_card_content_text_bottom'>
                        Lenster is a composable, decentralized, and permissionless social media web app built with Lens Protocol.
                      </div>
                    </div>
                    <div className='app_card_content_button'>
                      Activate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
