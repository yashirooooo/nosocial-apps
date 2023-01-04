import { Card, CardContent, Typography } from '@mui/material';
import './style.css';

interface Props {
    name: string;
    number: number;
    variation: number;
}

export default function ActivityCard({name, number, variation }: Props) {
    return <div className='activity_data_card'>
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {number}
        </Typography>
        {
            variation > 0 ? 
            <Typography variant="body2" sx={{ color: '#9AE4A7' }}>
                +{variation}% of last week
            </Typography> : 
            <Typography variant="body2" sx={{ color: '#EF8F8F' }}>
                {variation}% of last week
            </Typography>
        }       
      </CardContent>
    </Card>
  </div>
}