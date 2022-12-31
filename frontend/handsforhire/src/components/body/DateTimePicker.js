// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {TextField} from '@material-ui/core';
// import {DatePicker} from '@material-ui/pickers'

// const useStyles = makeStyles((theme) => ({
//     container: {
//         display: 'inline',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: 210,
//     },
// }));


// var handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }


// const minDate = new Date(Date.now())


// export default function DateTime() {
//     const classes = useStyles();

//     return (
//         <div>
//             <form className={classes.container} noValidate>
//                 <TextField
//                     disablePast
//                     name="hire_start_date_time"
//                     id="datetime-local"
//                     label="Start Date"
//                     onChange={handleChange}
//                     type="datetime-local"
//                     defaultValue= {Date.now()+1}
//                     className={classes.textField}
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
                    
//                 />
//             </form>
//             <form className={classes.container} noValidate>
//                 <TextField
//                     name="hire_end_date_time"
//                     id="datetime-local"
//                     label="End Date"
//                     onChange={handleChange}
//                     type="datetime-local"
//                     defaultValue= {Date.now()}
//                     className={classes.textField}
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
//                 />
//             </form>
//         </div>

//     );
// }