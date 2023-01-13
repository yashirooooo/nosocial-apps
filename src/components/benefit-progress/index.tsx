import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './style.css';
import Collapse from '@mui/material/Collapse';
import { Divider, styled } from '@mui/material';
import { BenefitBase } from '../types';
import _ from 'lodash';

interface ProgressCardProps extends BaseStyle {
  width: number,
}

interface BaseStyle {
  color: string
}

const Bar = styled('div')(({ width, color }: ProgressCardProps) => ({
  // 594px == 100%
  left: '0px',
  position: 'absolute',
  /* 
      width refactor into variable
   */
  width: width + 'px',
  height: '78px',
  zIndex: 1,
  backgroundColor: color,
}));

const TextDiv = styled('div')(({ color }: BaseStyle) => ({
  color: color,
}));

interface Task {
  id: string;
  name: string;
  isFinished: boolean;
}

interface Props {
  fontColor?: string;
  color?: string;
  benefitBase?: BenefitBase;
}

export default function BenefitProgress({ fontColor = '#FFFFFF', color = '#8247E5', benefitBase }: Props) {
  // bar with = progress * 594
  const [barWidth, setBarWidth] = React.useState(0);
  const progress = useMemo(() => {
    if (benefitBase?.tasks) {
      const total = benefitBase.tasks.length;
      const summary = _.countBy(benefitBase?.tasks, "isFinished");
      let res = 0;
      Object.keys(summary).forEach(key => {
        if (key === 'true') res = summary[key]
      })
      return _.divide(res, total);
    }
    return 0;
  }, [benefitBase])

  useEffect(() => {
    let i = 0;
    const width = progress * 594;
    const timer = setInterval(() => {
      if (width > i) {
        setBarWidth(++i)
      } else if (width < i) {
        setBarWidth(width)
      }
      // setProgress(progress1++)
    }, 5);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const [checked, setChecked] = React.useState(false);
  // const containerRef = React.useRef(null);

  const handleChange = async () => {
    setChecked((prev) => !prev);
  };

  return <div className='benefits_card'>
    <div className='benefits_card_progress'>
      <img className='benefits_card_progress_icon' src={benefitBase?.picture} />
      <div className='benefits_card_progress_bar'>
        {/* <div id='bar' /> */}
        <Bar width={barWidth} color={color} />
        <TextDiv color={fontColor} id='text'>
          <div>
            <span id='amount'>{benefitBase?.name}</span>
            {/* <span id='unit'>{name}</span> */}
            <span id='by'>By: {benefitBase?.provider}</span>
          </div>
        </TextDiv>
        <div className='benefits_card_progress_label'>
          <div onClick={handleChange}>{benefitBase?.tasks ? benefitBase.tasks.length : 0} Tasks</div>
        </div>
      </div>
    </div>
    {/* <div>
      <Slide direction="up" in={checked} container={containerRef.current} className='benefits_card_task_list'>
        <p>Profile NFT is the passport to explore the Lens universeThis benefit contains 6 tasks and will allow you choose your own handle name once you finished.</p>
      </Slide>
    </div> */}
    <Collapse className='benefits_card_task_list' in={checked} timeout={0} unmountOnExit>
      <p>{benefitBase?.description}</p>
      <Divider className='divider' />
      <ul>
        {
          benefitBase?.tasks?.map(e => {
            return e.isFinished ?
              <li key={e.id}><img src='/assets/icons/vector.svg' /><span>{e.name}</span></li>
              :
              <li key={e.id} className='task_not_complete'><img src='/assets/icons/vector_none.svg' /><span>{e.name}</span></li>

          })
        }
      </ul>
    </Collapse>
  </div>
}