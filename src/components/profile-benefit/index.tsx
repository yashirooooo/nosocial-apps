import './style.css';

interface Props {
    icon: string;
    amount: number;
    unit: string;
    author: string;
    img: string;
}

export default function ProfileBenefit({ icon, amount, unit, author, img }: Props) {
    return <div className='benefits_data_card'>
        <img id='icon' src={icon} />
        <div id='desc'>
            <div id='top'>{amount} {unit}</div>
            <div id='bottom'>by {author}</div>
        </div>
        <img id='img' src={img} />
    </div>
}