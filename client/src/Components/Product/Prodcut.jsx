import { Typography, Card, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core'
import React from 'react'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './style'



function Prodcut({product, onAddToCart}) {
    const classes = useStyles()
    
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                            {product.name}
                    </Typography>
                    <Typography variant="h5">
                            {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={ classes.cardAction}>
                <IconButton aria-label="Add to Cart" onClick={()=> onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Prodcut
