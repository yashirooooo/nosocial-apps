import React from 'react';
import './style.css';
import Collapse from '@mui/material/Collapse';
import { Divider, styled } from '@mui/material';

interface ProgressCardProps {
    width: number,
    color: string
}

const Bar = styled('div')(({ width, color }: ProgressCardProps) => ({
    // 594px == 100%
    "@keyframes progressAnimationStrike": {
        from: {
            width: 0,
        },
        to: {
            /* 
                width refactor into variable
            */
            width: width / 594 * 100 + '%',
        }
    },
    left: '0px',
    position: 'absolute',
    /* 
     width refactor into variable
     */
    width: width + 'px',
    height: '78px',
    zIndex: -1,
    backgroundColor: color,
    animation: `progressAnimationStrike 6s`,
}));

interface Task {
    id: string;
    name: string;
    isFinished: boolean;
}

interface Props {
    tasks?: Task[];
    progress: number;
}

export default function BenefitProgress({ tasks, progress }: Props) {
    // bar with = progress * 594

    const [checked, setChecked] = React.useState(false);
    // const containerRef = React.useRef(null);
  
    const handleChange = () => {
      setChecked((prev) => !prev);
    };
    
    return <div className='benefits_card'>
    <div className='benefits_card_progress'>
      <img className='benefits_card_progress_icon' src='/assets/images/7.svg' />
      <div className='benefits_card_progress_bar'>
        {/* <div id='bar' /> */}
        <Bar width={progress * 594} color={'#8247E5'} />
        <div id='text'>
          <div>
            <span id='amount'>70</span>
            <span id='unit'>Matic</span>
            <span id='by'>By: lens</span>
          </div>
        </div>
        <div className='benefits_card_progress_label'>
          <button onClick={handleChange}>7 Tasks</button>
        </div>
      </div>
    </div>
    {/* <div>
      <Slide direction="up" in={checked} container={containerRef.current} className='benefits_card_task_list'>
        <p>Profile NFT is the passport to explore the Lens universeThis benefit contains 6 tasks and will allow you choose your own handle name once you finished.</p>
      </Slide>
    </div> */}
    <Collapse className='benefits_card_task_list' in={checked} timeout="auto" unmountOnExit>
      <p>Profile NFT is the passport to explore the Lens universeThis benefit contains 6 tasks and will allow you choose your own handle name once you finished.</p>
      <Divider className='divider' />
      <ul>
        {
            tasks?.map(e => {
                return e.isFinished ? 
                <li><img src='/assets/icons/vector.svg' /><span>{e.name}</span></li>
                :
                <li className='task_not_complete'><img src='/assets/icons/vector_none.svg' /><span>{e.name}</span></li>

            })
        }
        {/* <li><img src='/assets/icons/vector.svg' /><span>Sent 10 Posts</span></li>
        <li><img src='/assets/icons/vector.svg' /><span>Follow 50 people</span></li>
        <li><img src='/assets/icons/vector.svg' /><span>Get 10 followers</span></li>
        <li><img src='/assets/icons/vector.svg' /><span>Activate Lenster</span></li>
        <li className='task_not_complete'><img src='/assets/icons/vector_none.svg' /><span>Using Lenster setup your avatar</span></li>
        <li className='task_not_complete'><img src='/assets/icons/vector_none.svg' /><span>Using Lenster setup your cover image</span></li> */}
      </ul>
    </Collapse>
  </div>
}