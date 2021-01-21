import React from 'react';
// import './TempCard.css';

const TempCard = () => {
	return (
		<div
			className='booking-card'
			style={{
				backgroundImage:
					'url(https://firebasestorage.googleapis.com/v0/b/oculus2021-c12c7.appspot.com/o/EventImages%2FAelanEJang.jpg?alt=media&token=742dd35e-ae88-4d0b-b398-ec893e65d394)'
			}}
		>
			<div className='book-container'>
				<div className='content'>
					<button className='btn'>Interested</button>
				</div>
			</div>
			<div className='informations-container'>
				<h2 className='title'>Event Name</h2>
				<div className='d-flex justify-content-between' style={{ margin: '0 10px' }}>
					<span>Category</span>
					<span>Date</span>
				</div>

				<div className='more-information'>
					<div className='info-and-date-container'>
						<div className='box info'>
							<p>Prizes</p>
							<p>5000</p>
						</div>
						<div className='box date'>
							<p>Registration</p>
							<p>4000</p>
						</div>
					</div>
					<p className='disclaimer'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa.
						Expedita architecto nesciunt, rem distinctioLorem ipsum dolor sit amet consectetur, adipisicing
						elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio
					</p>
				</div>
			</div>
		</div>
	);
};

export default TempCard;
