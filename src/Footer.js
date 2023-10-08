import React from 'react'
import './Footer.css'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import { Grid, Slider } from '@mui/material';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-left'>
          <img className='footer-albumLogo' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vwN2YpQBOAoQJ78_818JigHaEn%26pid%3DApi&f=1&ipt=b9841bd4dcfdddaf627ab685ab06ead3d503275ee40b96adf874c58826c3c02e&ipo=images' alt=''/>
          <div className='footer-songInfo'>
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        </div>
        <div className='footer-center'>
          <ShuffleIcon className='footer-on'/>
          <SkipPreviousIcon className='footer-icon'/>
          <PlayCircleFilledWhiteIcon className='footer-icon'
          fontSize='large'/>
          <SkipNextIcon className='footer-icon'/>
          <RepeatIcon className='footer-on'/>
        </div>
        <div className='footer-right'>
          <Grid container spacing={2}>
            <Grid item>
                <PlaylistPlayIcon/>
            </Grid>
            <Grid item>
                <VolumeDownIcon/>
            </Grid>
            <Grid item xs>
                <Slider></Slider>
            </Grid>
          </Grid>
        </div>
    </div>
  )
}

export default Footer