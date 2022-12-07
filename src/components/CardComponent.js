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
    const skills = props.skills;
    return (
        <Card sx={{ maxWidth: '24vw', minWidth: '24vw', }}>
            <CardMedia
                component="img"
                sx={{ height: '12vw' }}
                image={img}
            />
            <CardContent>
                <Typography fontSize='1.5vw' gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                {skills && <Typography sx={{ mb: '0.2vw' }} fontSize='0.9vw' variant="body2" color="text.secondary">
                    {skills}
                </Typography>}
                <Typography fontSize='1.1vw' variant="body2" >
                    {description}
                </Typography>
            </CardContent>
            {(github || devpost) &&
                <CardActions sx={{ mb: '0.1vw', ml: '0.2vw', mt: '-0.8vw' }} disableSpacing={true}>
                    {github && <Button
                        sx={{ mr: '0.2vw' }}
                        size="small"
                        href={github}
                        rel="noopener noreferrer"
                        target="_blank" >
                        <Typography fontSize='1vw'>Github</Typography>

                    </Button>}
                    {devpost && <Button size="small"
                        href={devpost}
                        rel="noopener noreferrer"
                        target="_blank" >
                        <Typography fontSize='1vw'>Devpost</Typography>
                    </Button>}

                </CardActions>}

        </Card>
    );
}