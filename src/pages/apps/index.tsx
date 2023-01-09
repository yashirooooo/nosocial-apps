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
                icon={`https://i04piccdn.sogoucdn.com/2f1390c681b05d27`}
                desc={`NoSocial is a gate to the decentralized socials, which provides the achievement system to help user earn benefits.`}
              />
              <AppCard 
                name={`Lenster`} 
                icon={`https://www.tanghuaku.com/wp-content/uploads/2021/02/TK-369.jpg`} 
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
                icon={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa4gMAUcPZWrZ2b1hS1Pg9ZL30_jLd14JS9-ABjs7eibGcxWjRWK7UrqZpD92HieeXOzY&usqp=CAU'} 
                desc={`The last social media handle I'll ever have to create, my Lens profile is portable across any application powered by Lens Protocol.`} 
              />
              <ExploreApp 
                name={'LensFrens'} 
                icon={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQrP6SPPBGyEsNi_zl6x2pp7WKdAQgSazQ3qaBel8-eDrrlb9hYIGhsUANbyuLMPZa2A&usqp=CAU'} 
                desc={`Lenster is a composable, decentralized, and permissionless social media web app built with Lens Protocol.`} 
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
