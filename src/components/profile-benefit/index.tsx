import { ProfileBaseBenefit } from '../types';
import './style.css';

interface Props {
    icon?: string;
    benefitName?: string;
    author?: string;
    img?: string;
    benefit?: ProfileBaseBenefit;
}

export default function ProfileBenefit({ icon, benefitName, author, img, benefit }: Props) {
    return <div className='benefits_data_card'>
        <img id='icon' src={benefit?.picture ? benefit.picture : icon } />
        <div id='desc'>
            <div id='top'>{benefit?.benefitName ? benefit.benefitName : benefitName}</div>
            <div id='bottom'>by {benefit?.provider ? benefit.provider : author}</div>
        </div>
        <img id='img' src={benefit?.providerPicture ? benefit.providerPicture : img} />
    </div>
}