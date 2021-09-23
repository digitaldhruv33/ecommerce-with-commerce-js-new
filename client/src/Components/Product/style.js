import { makeStyles } from "@material-ui/core";



export default makeStyles(()=> ({
    root:{
        maxWidth: '100%'
    },
    media:{
        height:150,
        paddingTop:"56.25px",
    },
    cardContent:{
        display:"flex",
        justifyContent:"flex-end"
    },
    cardAction:{
        display:"flex",
        justifyContent:"space-between"
    }
}))