import Button from '@mui/material/Button';
import nounWavingIcon from '../../assets/svgs/noun_waving.svg';

function PselectPage() {
  return (
    <Button variant="contained" >
      <img src={nounWavingIcon} width="50" height="50" /> Disconnect MetaMask
    </Button>
  );
}

export default PselectPage;