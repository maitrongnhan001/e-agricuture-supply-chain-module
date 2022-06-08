import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import { CardProps } from './card.props'

export default function MultiActionAreaCard({children, image}: CardProps) {
  return (
    <Card sx={{ maxWidth: 250, m:'2rem auto', boxShadow: '0 .05rem .1rem .1rem #cecece '}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {image}
          alt="green iguana"
          
        />
        <CardContent>
          {children}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  )
}
