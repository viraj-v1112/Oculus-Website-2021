import React from 'react';
import './AppDownload.css';
import CustomButton from '../../shared/CustomButton';
import Mobile from '../../assets/LandingSections/MobileMockup.png';
import AppLogo from '../../assets/LandingSections/AppTitle.png';

const AppDownload = () => {
	return (
		<div className='back-app'>
			<div className='container laptop-app'>
				<div className='row py-5 px-0'>
					<div
						className='col col-lg-6 col-md-6 col-sm-12 col-12 align-self-center'
						data-aos='fade-right'
						data-aos-duration='1000'
					>
						<img
							src={AppLogo}
							alt='mobile-app'
							className='app-logo mb-5 mx-auto d-block'
							data-aos='zoom-in'
							data-aos-duration='1000'
						/>
						<p className='justify-para'>
							One stop for all the latest updates and bookings of your favourite events at Oculus 2021.
						</p>
						<CustomButton
							classname='button-center mt-4'
							buttonText='Download Now'
							link='https://play.google.com/store/apps/details?id=com.spit.fest.oculus'
							animation='zoom-in'
							gradient
						/>
					</div>
					<div
						className='col col-lg-6 col-md-6 col-sm-12 col-12 '
						data-aos='fade-left'
						data-aos-duration='1000'
					>
						<a
							href='https://play.google.com/store/apps/details?id=com.spit.fest.oculus'
							target='_blank'
							rel='noreferrer'
						>
							<img src={Mobile} alt='mobile-app' className='app-image' />
						</a>
					</div>
				</div>
			</div>

			<div className='container mobile-app'>
				<div className='row px-0'>
					<img src={AppLogo} alt='mobile-app' className='app-logo' />
					<a
						href='https://play.google.com/store/apps/details?id=com.spit.fest.oculus'
						target='_blank'
						rel='noreferrer'
					>
						<img src={Mobile} alt='mobile-app' className='app-image' />
					</a>
				</div>
				<div className='row px-5 py-3'>
					<p className='justify-para text'>
						One stop for all the latest updates and bookings of your favourite events at Oculus 2021.
					</p>
				</div>
				<CustomButton
					classname='button-center mt-2'
					buttonText='Download Now'
					link='https://play.google.com/store/apps/details?id=com.spit.fest.oculus'
					gradient
				/>
			</div>
		</div>
	);
};

export default AppDownload;
