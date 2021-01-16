import React, { useState, useContext } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './CustomModal.css';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import CustomButton from './CustomButton';
import Register from './onClick/Register';
import AuthContext from '../context/AuthContext/AuthContext';

function getModalStyle() {
  const top = 50;
  const left = 49.5;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        background: 'transparent',
        color: 'white',
        borderColor: 'white',
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    minWidth: '30%',
    maxWidth: '90%',
    width: 'fit-content',
    height: 'fit-content',
    padding: theme.spacing(2, 4, 3),
    borderRadius: '10%',
    alignItems: 'center',
    background: 'rgba( 51, 80, 151, 0.40)',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 10px )',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
  },
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiInputAdornment-root': {
      color: 'white',
    },
    '&:hover .MuiInputAdornment-root': {
      color: 'white',
    },
    '&.Mui-focused .MuiInputAdornment-root': {
      color: 'white',
    },
  },
}));

const CustomTextField = ({
  label,
  onChange,
  name,
  value,
  validators,
  errorMessages,
  InputProps,
}) => {
  const classes = useStyles();
  return (
    <TextValidator
      className={classes.root}
      variant='outlined'
      label={label}
      onChange={onChange}
      name={name}
      value={value}
      validators={validators}
      errorMessages={errorMessages}
      fullWidth
      InputLabelProps={{
        style: { color: '#fff' },
      }}
      InputProps={InputProps}
    />
  );
};

const CustomModal = ({ open, onClose, oevent }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [formData, setFormData] = useState({
    number: '',
    college: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    Register(formData, user, oevent);
    onClose();
  };
  const user = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <Modal open={open} onClose={onClose}>
        <div style={modalStyle} className={classes.paper}>
          <h4 className='my-4'>Enter Your Details..</h4>
          <ValidatorForm onSubmit={handleSubmit} className='form'>
            <CustomTextField
              label='Number'
              onChange={handleChange}
              name='number'
              value={formData.number}
              validators={['required']}
              errorMessages={['this field is required']}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start' className={classes.root}>
                    +91
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <CustomTextField
              label='College'
              onChange={handleChange}
              name='college'
              value={formData.college}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <br />
            <CustomButton buttonText='Submit' />
          </ValidatorForm>
        </div>
      </Modal>
    </ThemeProvider>
  );
};

export default CustomModal;
