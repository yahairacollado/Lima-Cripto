import React from 'react'
import styles from '../../styles.module.css';
import {instagram, speakerList} from "../../Constants"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { ReactComponent as LinkedinIcon } from "../../Assets/Icons/linkedin.svg";

export default function AllSpeakers() {

  return (
    <>
    <div  className={styles.bannerCategory}>
      <h1>Speakers</h1>
      <p>¡Estáte atent@! Continuamos confirmando speakers diariamente.</p>
    </div>
    <div className={styles.speakerList}>
      {speakerList.map((speaker) => (
      <Card sx={{ display: 'flex'}}>
      <CardMedia
        component="img"
        sx={{ width: 120}}
        image={speaker.img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {speaker.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{lineHeight:'1rem', paddingTop:"0.5rem"}}>
            {speaker.role}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <a href={speaker.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon style={{fill:'#0078c5', width:'2rem'}}/></a>
          </IconButton>
        </Box>
      </Box>
    </Card>
    ))}
      </div>
    </>
  )
}