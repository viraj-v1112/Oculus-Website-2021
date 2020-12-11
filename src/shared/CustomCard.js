import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './CustomCard.css'
import CustomButton from './CustomButton'

const CustomCard= ({imagePath, cardTitle, cardText}) => {
  	const [flipped, set] = useState(false)
  	const { transform, opacity } = useSpring({
    	opacity: flipped ? 1 : 0,
    	transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    	config: { mass: 5, tension: 500, friction: 80 }
  	})

  	return (
		<div style={{padding:'55px 20px'}}>
			<h2 id="cardTitle">{cardTitle}</h2>
			<div style={{padding:'15px'}}onClick={() => set(state => !state)}>
				<a.div class="c back2" style={{ opacity: opacity.interpolate(o => 1 - o), transform, backgroundImage:`url(${imagePath})`}}>
					{/* <img src ={imagePath}></img> */}
					{/* <img src=""></img> */}
				</a.div>
				<a.div class="c1 front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) ,overflow: 'auto'}}>
					<h4 id="cardText">{cardText}</h4>
				</a.div>
			</div>
			<CustomButton classname='button-center' buttonText='I am Interested' link='/' authRequired='true'/>
		</div>
  	)
}

export default CustomCard