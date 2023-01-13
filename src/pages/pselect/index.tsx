import { Button, Grid } from '@mui/material';
import Logo from '../../components/logo';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProfiles } from 'src/api';
import address from 'src/_mock/address';
import { Profile } from 'src/components/types';
import { useContextLoginUser } from 'src/lib/hooks';

function PselectPage() {

  const navigate = useNavigate();

  const location = useLocation();
  const user = useContextLoginUser();

  const { state } = location;

  const [profiles, setProfiles] = useState<Profile[]>([]);

  // const profiles = ["@alice.lens", "@bob.lens", "@carlos.lens", "@qwerTyuyyu.lens", "@IiiiiiTTiiitabc.lens",
  // "@alice.lens", "@bob.lens", "@carlos.lens", "@qwerTyuyyu.lens", "@IiiiiiTTiiitabc.lens",
  // "@alice.lens", "@bob.lens", "@carlos.lens", "@qwerTyuyyu.lens", "@IiiiiiTTiiitabc.lens",
  // "@alice.lens", "@bob.lens", "@carlos.lens", "@qwerTyuyyu.lens", "@IiiiiiTTiiitabc.lens",
  // "@kkkkk.lens", "@mmmrbob.lens", "@carlos.lens"]

  const onClick = (profileId: string) => {
    user.setLoginUser({
      address,
      profileId
    })
    navigate('/dashboard/profile')
  }

  useEffect(() => {
    if (state.address) {
      // TODO: change address to state.address
      getProfiles(address).then(res => {
        setProfiles(res)
      })
    }
  }, [])

  return (
    <div className="pselect">
      <div className="pselect-logo"><Logo /></div>
      <div className="pselect-ps">Please select the profile you want to log in</div>
      <Grid container className="pselect-profiles" justifyContent="center" spacing={5}>
        {profiles.map((value) => (
          <Grid key={value.id} item>
            <Button className="pselect-profile-button" variant="outlined" onClick={() => onClick(value.id)}>
              {value.name}
            </Button>
          </Grid>
        ))}
      </Grid>

      <div className="pselect-copyright">© 2022 Build with 💛 by NoSocial Labs</div>
    </div>
  );
}

export default PselectPage;