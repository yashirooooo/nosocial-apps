import { Card, CardContent, Typography } from '@mui/material';
import './style.css';

interface Props {
    name: string;
    number: number;
    lastweek: number;
}

export default function ActivityCard({name, number, lastweek }: Props) {
    return <div className='activity_data_card'>
    <Card className='card'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {number ? number : 0}
        </Typography>
        {
            lastweek > 0 ? 
            <Typography variant="body2" sx={{ color: '#9AE4A7' }}>
                +{lastweek} last week
            </Typography> : 
            <Typography variant="body2" sx={{ color: '#EF8F8F' }}>
                {lastweek} last week
            </Typography>
        }       
      </CardContent>
    </Card>
  </div>
}