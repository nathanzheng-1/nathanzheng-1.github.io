import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardComponent(props) {
    const title = props.title;
    const description = props.description;
    const img = props.image;
    const github = props.github;
    const devpost = props.devpost;
    return (
        <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 400, maxHeight: 400 }}>
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            {(github || devpost) &&
                <CardActions disableSpacing={true}>
                    {github && <Button size="small" href={github}>Github</Button>}
                    {devpost && <Button size="small" href={devpost}>Devpost</Button>}

                </CardActions>}

        </Card>
    );
}