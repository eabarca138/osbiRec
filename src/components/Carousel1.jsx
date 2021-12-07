import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Container, Box, Typography, Fade } from '@mui/material'
import { makeStyles } from '@mui/styles';

const Item = ({ item }) => {
  const classes = useStyles();
    return (
        <Paper style={{ backgroundImage: `url(${item.bgImage})`}} className={classes.carouselImage}>
            
            <Box p={3}>
            <Typography variant='h5' color='secondary'>{item.name}</Typography>
            <Typography variant='p' color='secondary'>{item.description}</Typography>

              <Box pt={3}>
            <Button className="CheckButton" variant='contained'>
                Check it out!
            </Button>
            </Box>
            </Box>
        </Paper>
    )
}

const useStyles = makeStyles({
  carouselImage: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat',
    width:'100%',
    height:'16rem',
    color:'white',
    marginTop: '2rem',
    }
})  

const Carousel1 = () => {
  const checked = true; 
  const items = [
    {
      name: "Lorem ipsum dolor sit amet,",
      description: "Lorem ipsum ",
      bgImage: 'https://4.bp.blogspot.com/-Hn74y5Jy6kY/VusUGyzzJTI/AAAAAAAAIxI/qfGauq6w5a8RQXHSe1IngYEoBDyabDZcQ/s1600/41388_dirty_rotten_imbeciles_trash_zone.jpg'
    },
    {
      name: "Lorem ipsum dolor sit amet,",
      description: "Lorem ipsum ",
      bgImage: 'https://www.ajournalofmusicalthings.com/wp-content/uploads/2016/11/Danzig-logo.jpg'
    },
  ];
  return (
      <Fade in={checked} timeout={1000}>
    <Container>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Container>
    </Fade>
  );
};

export default Carousel1;