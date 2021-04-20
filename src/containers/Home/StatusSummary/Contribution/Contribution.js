import React, {useState} from 'react'
import {connect} from 'react-redux'
import Loader from '../../../../components/Loader/Loader'
import windmills from '../../../../assets/svg/windmills.svg';
import hydro from '../../../../assets/svg/hydro-plant.svg';
import solar from '../../../../assets/svg/solar-panels.svg';
import next from '../../../../assets/svg/next.svg';
import previous from '../../../../assets/svg/previous.svg';
import {motion, AnimatePresence} from 'framer-motion'
import './Contribution.css'

const Icon = ({type}) => {
	switch(type) {
		case 'wind':
			return <img src={windmills} alt="" />
		case 'hydro':
			return <img src={hydro} alt="" />
		case 'solar':
			return <img src={solar} alt="" />
		default:
			return null
	}
}

const Item = ({title, type, value}) => {
	return(
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			className="ContributionItem"
		>
			<div className="icon"><Icon type={type} /></div>
			<p>{`${value} ${title}`}</p>
		</motion.div>
	)
}

const Items = ({items, loading}) => {

	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		if(currentSlide < items.length - 1) {
			setCurrentSlide(currentSlide + 1)
		} else {
			setCurrentSlide(0);
		}
	}

	const prevSlide = () => {
		if(currentSlide === 0) {
			setCurrentSlide(items.length - 1)
		} else {
			setCurrentSlide(currentSlide - 1)
		}
	}

	return(
		<div className="ContributionItems">
			<div className="items">
				{
					loading
					? <Loader />
					:
						<AnimatePresence>
						{
							items.map((item, i) =>
								currentSlide === i &&
								<Item key={i} {...item} />
							)
						}
						</AnimatePresence>
				}
			</div>
			{
				items.length > 1 &&
				<div className="navigation">
					<button className="prev" onClick={nextSlide}><img src={previous} alt="Previous" /></button>
					<button className="next" onClick={prevSlide}><img src={next} alt="Next" /></button>
				</div>
			}
		</div>
	)
}


const Contribution = ({loading, contribution}) => {
	if(contribution.items.length > 0)
	return(
		<div className="Contribution">
			{ contribution.title && <p className="title">{contribution.title}</p> }
			{
				contribution.items.length > 0
				&& <Items items={contribution.items} loading={loading} />
			}
		</div>
	)
	return null
}

const mapStateToProps = state => ({
	contribution: state.user.contribution,
	loading: state.user.loading
})

export default connect(mapStateToProps, null)(Contribution)