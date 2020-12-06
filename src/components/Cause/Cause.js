import React from 'react';
import CustomButton from '../../shared/CustomButton';
import CauseLogo from '../../assets/images/CauseTitle.png';
import CauseImage from '../../assets/images/CauseImage.png';
import './Cause.css';

const Cause = () => {
	return (
		<div className='back-app'>
			<div className='container laptop-cause'>
				<div className='row py-0'>
					<img src={CauseLogo} alt='Oculus For A Cause Title' className='cause-logo' />
				</div>
				<div className='row py-5 px-0'>
					<div className='col col-lg-6 col-md-6 col-sm-12 col- 12 p-0'>
						<img src={CauseImage} alt='Oculus For a Cause' />
					</div>
					<div className='col col-lg-6 col-md-6 col-sm-12 col- 12'>
						<p>
							We at SPIT believe that students cannot be called engineers with just their degrees. What
							makes us engineers is a holistic development of our perspectives and being equipped to solve
							problems, not just on circuits or computers, but also in the world around us. Oculus 2020 is
							proud to be associated with the Cancer Patients Aid Association, India’s oldest and largest
							cancer NGO, and be a part of its efforts to attain its noble goal
						</p>
						<CustomButton classname='button-center' buttonText='Donate Now' link='/' />
					</div>
				</div>
			</div>
			<div className='mobile-cause container'>
				<div className='row py-0'>
					<img src={CauseLogo} alt='Oculus For A Cause Title' className='cause-logo' />
				</div>
				<div className='row p-5'>
					<img
						src={CauseImage}
						alt='Oculus For a Cause'
						style={{ width: '80%', display: 'block', margin: '0 auto' }}
					/>
				</div>
				<div className='row px-5 pb-5'>
					<p>
						We at SPIT believe that students cannot be called engineers with just their degrees. What makes
						us engineers is a holistic development of our perspectives and being equipped to solve problems,
						not just on circuits or computers, but also in the world around us. Oculus 2020 is proud to be
						associated with the Cancer Patients Aid Association, India’s oldest and largest cancer NGO, and
						be a part of its efforts to attain its noble goal
					</p>
					<CustomButton classname='button-center' buttonText='Donate Now' link='/' />
				</div>
			</div>
		</div>
	);
};

export default Cause;
