import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const CardImgTop = ({ imgSrc = '/images/cards/glass-house.png', text = '' }) => {
  return (
    <Card>
        <CardMedia
          sx={{
            width: 100,
            height: 100,
            margin: 'auto',
            mt: 5
          }}
          image={imgSrc}
        />
        <CardContent>
          <Typography variant='h4' sx={{ mb: 2, textAlign: 'center' }}>
            {text}
          </Typography>
        </CardContent>
    </Card>
  );
};

export default CardImgTop;
