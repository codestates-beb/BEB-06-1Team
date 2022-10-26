import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse'; 
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  console.log("값확인" ,props.data)
  const [expanded, setExpanded] = React.useState(false);
  
  const data = props.data;

  if(data != null){  

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={data[0].name}
          subheader={data[0].collection}
        />
        <CardMedia
          component="img"
          height="194"
          image={data[0].tokenUri}
          alt="Paella dish"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
        {data[0].artist}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent> 
        </CardContent>
      </Collapse>
    </Card>
  );
}
}
