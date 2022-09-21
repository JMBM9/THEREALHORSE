
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      border: '1px solid #555',
      fontFamily: 'times new roman',
    },
  },
  paper: {
    padding: theme.spacing(1),
    border: '4px solid #555',
    fontFamily: 'times new roman',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    border: '10px solid #555',
    fontFamily: 'times new roman',
  },
  fileInput: {
    width: '95%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 12,
  },
}));
