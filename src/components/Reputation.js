'use client'
import Image from 'next/image'
import reputationLeftPic from '@/assets/image/reputation_left.png'
import reputationRightPic from '@/assets/image/reputation_right.png'
import Link from 'next/link'
import { Progress } from '@chakra-ui/react'
import dataLabel1Pic from '@/assets/image/data_curation1.svg'
import dataLabel2Pic from '@/assets/image/data_curation2.svg'
import dataLabel3Pic from '@/assets/image/data_curation3.svg'
import dataLabel4Pic from '@/assets/image/data_curation4.svg'

import { ReactSVG } from 'react-svg';

const picMap = {
	dataLabel1Pic,
	dataLabel2Pic,
	dataLabel3Pic,
	dataLabel4Pic,
}
const titleList = [
	'Advanced Filtering and Sorting',
	'Dataset Enrichment',
	'Automated Data Cleaning',
	'Metadata Management',
]
const contentList = [
	'Tools to efficiently organize datasets by relevance, quality, or other criteria, ensuring AI models are trained on optimal data.',
	'Enhances datasets by identifying and filling gaps, increasing the diversity and comprehensiveness of data available for AI training.',
	'Automatically detects and corrects errors or inconsistencies in datasets, improving data quality with minimal human intervention.',
	'Enables effective tagging and categorization of data, facilitating easier retrieval and more structured training processes.',
]
export default function Reputation() {
	return (
		<div className="relative  mt-[6.25vw] ml-[3.125vw] mr-[3.125vw] w-[93.75vw] h-[50vw]">
			<div className=' absolute top-0 left-0 w-[39vw] h-[46.375vw]'>
				<div className=' relative w-full h-[38.5vw]'>
					<div className='absolute left-[1.875vw] top-0 w-[20vw] font-sans font-semibold text-[4vw] leading-none'>
						Reputation System
					</div>
					<Image
						src={reputationLeftPic}
						fill
					/>
				</div>
				<div className='absolute bottom-0 left-0 w-full font-display font-medium text-[1.25vw] leading-[1.625vw]'>
					Implement a reputation system that rewards quality and consistency. Higher reputation scores can lead to higher rewards, access to premium projects, or greater influence in governance decisions.
				</div>
			</div>
			<div className='absolute top-0 right-0 w-[53.1875vw] h-[44.875vw]'>
				<div className='absolute top-[2vw] left-[2vw] w-[37.5vw] font-display font-semibold text-[4vw] leading-none z-10 text-white'>
					Dynamic Reward Mechanism
				</div>
				<div className='absolute bottom-[2.25vw] left-[2vw] w-[49.1875vw] z-10'>
					<div className='bg-white p-[1.5vw] rounded-3xl'>
						<div className=' font-display font-extrabold text-[1.5vw] leading-[2vw]'>
							Quality-Based Rewards
						</div>
						<div className='mt-[0.4375vw] font-display font-medium text-[1.125vw] leading-[1.5vw] opacity-60'>
							Annotators receive tokens not just for the quantity of work done but also for the quality, as assessed through peer reviews or AI validation methods.
						</div>
					</div>
					<div className='bg-white p-[1.5vw] mt-[0.4375vw] rounded-3xl'>
						<div className=' font-display font-extrabold text-[1.5vw] leading-[2vw]'>
							Task Difficulty and Urgency
						</div>
						<div className='mt-[0.4375vw] font-display font-medium text-[1.125vw] leading-[1.5vw] opacity-60'>
							Higher rewards for tasks that are more complex or require a quicker turnaround, incentivizing skilled contributors to prioritize them.
						</div>
					</div>
				</div>
				<Image
					src={reputationRightPic}
					fill
				/>
			</div>
		</div>
	)
}
