import { Helmet } from 'react-helmet-async';
// @mui
import { Container, TextField, Typography } from '@mui/material';
// components
import './style.css';
import AppCard from 'src/components/app-card';
import ExploreApp from 'src/components/explore-app';
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
              <AppCard
                name={`NoSocial`}
                icon={`/assets/images/nosocial.svg`}
                desc={`NoSocial is a gate to the decentralized socials, which provides the achievement system to help user earn benefits.`}
              />
              <AppCard 
                name={`Lenster`} 
                icon={`/assets/images/4.svg`} 
                desc={`Lenster is a composable, decentralized, and permissionless social media web app built with Lens Protocol.`} 
              />
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
              <ExploreApp 
                name={'re: meme'} 
                icon={'/assets/images/5.svg'} 
                desc={`The last social media handle I'll ever have to create, my Lens profile is portable across any application powered by Lens Protocol.`} 
              />
              <ExploreApp 
                name={'LensFrens'} 
                icon={'/assets/images/6.svg'} 
                desc={`Lenster is a composable, decentralized, and permissionless social media web app built with Lens Protocol.`} 
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
