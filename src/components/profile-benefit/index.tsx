import { ProfileBaseBenefit } from '../types';
import './style.css';

interface Props {
    benefit: ProfileBaseBenefit;
}

export default function ProfileBenefit({ benefit }: Props) {
    return <div className='benefits_data_card'>
        <img id='icon' src={benefit.picture} />
        <div id='desc'>
            <div id='top'>{benefit.benefitName}</div>
            <div id='bottom'>by {benefit.provider}</div>
        </div>
        <img id='img' src={benefit.providerPicture} />
    </div>
}