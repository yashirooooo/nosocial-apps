import { Button, Grid } from '@mui/material';
import Logo from '../../components/logo';
import './style.css';
import { useNavigate } from 'react-router-dom';

function PselectPage() {

  const navigate = useNavigate();

  const profiles = ["@alice.lens", "@bob.lens", "@carlos.lens", "@qwerTyuyyu.lens", "@IiiiiiTTiiitabc.lens",
  "@alice.lens", "@bob.lens", "@carlos.lens", "@qwerTyuyyu.lens", "@IiiiiiTTiiitabc.lens",
  "@alice.lens", "@bob.lens", "@carlos.lens", "@qwerTyuyyu.lens", "@IiiiiiTTiiitabc.lens",
  "@alice.lens", "@bob.lens", "@carlos.lens", "@qwerTyuyyu.lens", "@IiiiiiTTiiitabc.lens",
  "@kkkkk.lens", "@mmmrbob.lens", "@carlos.lens"]

  const onClick = () => {
    navigate('/dashboard/profile')
  }

  return (
    <div className="pselect">
      <div className="pselect-logo"><Logo /></div>
      <div className="pselect-ps">Please select the profile you want to log in</div>
      <Grid container className="pselect-profiles" justifyContent="center" spacing={5}>
        {profiles.map((value) => (
          <Grid key={value} item>
            <Button className="pselect-profile-button" variant="outlined" onClick={onClick}>
              {value}
            </Button>
          </Grid>
        ))}
      </Grid>

      <div className="pselect-copyright">© 2022 Build with 💛 by NoSocial Labs</div>
    </div>
  );
}

export default PselectPage;