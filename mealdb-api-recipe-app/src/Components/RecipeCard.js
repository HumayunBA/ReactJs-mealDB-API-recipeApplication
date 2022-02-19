import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 10,
  },
  media: {
    height: 190,
    width: 250,
  },
});

function Recipecard(recipeElements) {
  
  const { name, mealimg, area, sourceText }= recipeElements;

  const classes = useStyles();

  return (
    
 <div style={{display: 'flex', marginLeft:'30'}}>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mealimg}
          title="title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {area}
          </Typography>
        </CardContent>
       </CardActionArea>
        <CardActions>
        <Link href={sourceText} size="small" color="primary"target="_blank" >  
           Read details
        </Link>
        </CardActions>
    </Card>
   
 </div>

  );
}

export default Recipecard;