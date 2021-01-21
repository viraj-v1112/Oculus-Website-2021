import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './CustomModal.css';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import CustomButton from './CustomButton';
// import Register from './onClick/Register';
import AuthContext from '../context/AuthContext/AuthContext';
import O from '../assets/O.png';

function getModalStyle() {
	const top = 50;
	const left = 49.5;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#000',
			contrastText: '#000'
		}
	},
	overrides: {
		MuiInputBase: {
			input: {
				background: '',
				color: 'black',
				borderColor: 'black'
			}
		}
	}
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
		background: 'rgba( 255, 255, 255, 1)',
		border: '1px solid rgba( 255, 255, 255, 0.18 )'
	},
	root: {
		'& label.Mui-focused': {
			color: '#c3c3c3'
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#c3c3c3',
				color: 'blue'
			},
			'&:hover fieldset': {
				borderColor: '#c3c3c3'
			},
			'&.Mui-focused fieldset': {
				borderColor: '#c3c3c3'
			}
		}
	}
}));

const CustomTextField = ({ label, onChange, name, value, validators, errorMessages, InputProps }) => {
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
				style: { color: '#000' }
			}}
		/>
	);
};

const CustomModal = ({ open, onClose, oevent }) => {
	const classes = useStyles();
	const [ modalStyle ] = React.useState(getModalStyle);
	const { user, Register } = useContext(AuthContext);

	const [ formData, setFormData ] = useState({
		number: '',
		college: ''
	});

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = () => {
		Register(formData, user, oevent);
		onClose();
	};

	useEffect(
		() => {
			ValidatorForm.addValidationRule('isTenDigit', (value) => {
				var phoneno = /^\d{10}$/;
				return phoneno.test(value);
			});
			return () => {
				ValidatorForm.removeValidationRule('isTenDigit');
			};
		},
		[ formData.number ]
	);

	return (
		<ThemeProvider theme={theme}>
			<Modal open={open} onClose={onClose} disableBackdropClick>
				<div style={modalStyle} className={classes.paper}>
					<div className='container cust'>
						<div className='row'>
							<div className='d-flex align-items-center'>
								<img src={O} alt='o' className='o' />
							</div>
							<div className='d-flex align-items-center'>
								<h4 className='my-4 text-dark'>Enter Your Details..</h4>
							</div>
						</div>
					</div>
					<ValidatorForm onSubmit={handleSubmit} className='form'>
						<CustomTextField
							label='Number'
							onChange={handleChange}
							name='number'
							value={formData.number}
							validators={[ 'isTenDigit', 'required' ]}
							errorMessages={[ 'Enter A valid 10 digit number', 'This field is required' ]}
						/>
						<br />
						<CustomTextField
							label='College'
							onChange={handleChange}
							name='college'
							value={formData.college}
							validators={[ 'required' ]}
							errorMessages={[ 'This field is required' ]}
						/>
						<br />
						<CustomButton buttonText='Submit' gradient />
					</ValidatorForm>
				</div>
			</Modal>
		</ThemeProvider>
	);
};

export default CustomModal;
