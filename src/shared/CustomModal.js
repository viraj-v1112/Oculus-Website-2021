import React, { useState } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './CustomModal.css';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#fff',
			contrastText: '#fff'
		}
	},
	overrides: {
		MuiInputBase: {
			input: {
				background: 'transparent',
				color: 'white',
				borderColor: 'white'
			}
		}
	}
});

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 'fit-content',
		height: 'fit-content',
		background:
			'linear-gradient(to right top,#ed00cc,#c722bf,#a32bae,#822e9c,#632c87,#533b8f,#434695,#335097,#176fb5,#008fcd,#00aee0,#00cdef)',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		borderRadius: '10%',
		alignItems: 'center'
	},
	root: {
		'& label.Mui-focused': {
			color: 'white'
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'white'
			},
			'&:hover fieldset': {
				borderColor: 'white'
			},
			'&.Mui-focused fieldset': {
				borderColor: 'white'
			}
		}
	}
}));

const CustomTextField = ({ label, onChange, name, value, validators, errorMessages }) => {
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
			InputLabelProps={{
				style: { color: '#fff' }
			}}
		/>
	);
};

const CustomModal = ({ open, onClose }) => {
	const classes = useStyles();
	const [ modalStyle ] = React.useState(getModalStyle);

	const [ formData, setFormData ] = useState({
		number: '',
		college: ''
	});
	const [ submitted, setSubmitted ] = useState(false);

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = () => {
		setSubmitted(true);
	};

	return (
		<ThemeProvider theme={theme}>
			<Modal open={open} onClose={onClose}>
				<div style={modalStyle} className={classes.paper}>
					<h4>Please fill in your details</h4>
					<ValidatorForm onSubmit={handleSubmit} className='form'>
						<CustomTextField
							label='Number'
							onChange={handleChange}
							name='number'
							value={formData.number}
							validators={[ 'required' ]}
							errorMessages={[ 'this field is required' ]}
						/>
						<br />
						<CustomTextField
							label='College'
							onChange={handleChange}
							name='college'
							value={formData.college}
							validators={[ 'required' ]}
							errorMessages={[ 'this field is required' ]}
						/>

						<br />

						<Button
							variant='contained'
							type='submit'
							disabled={submitted}
							style={{ marginLeft: '30%', marginRight: '30%' }}
						>
							Submit
						</Button>
					</ValidatorForm>
				</div>
			</Modal>
		</ThemeProvider>
	);
};

export default CustomModal;
