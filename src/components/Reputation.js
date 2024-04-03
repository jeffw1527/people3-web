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
		<div className="relative ml-[3.125vw] mr-[3.125vw] w-[93.75vw] h-[45vw] flex flex-wrap justify-between">
			<div className='w-[70.25vw] h-[22.25vw] bg-black rounded-3xl'>

			</div>
			<div className='bg-[#A2F464] flex flex-col justify-between w-[23vw] h-[22.25vw] p-[2vw] rounded-3xl'>
				<div className=' w-[16.8125vw] font-sans font-black text-[3vw] leading-none'>
					Reputation System
				</div>
				<div className='w-[19vw] h-[1px] opacity-10 bg-black'></div>
				<div className='w-[19vw] font-display font-medium text-[1vw] leading-[1.5vw]'>
					Implement a reputation system that rewards quality and consistency. Higher reputation scores can lead to higher rewards, access to premium projects, or greater influence in governance decisions.
				</div>
			</div>
			<div className=' relative w-[23vw] h-[22.25vw]  rounded-3xl bg-[#8BC7FF]'>
				<div className='absolute left-[2vw] bottom-[2vw] font-sans font-black text-[3vw] leading-none'>
					Dynamic Reward Mechanism
				</div>
			</div>
			<div className='w-[34.875vw] h-[22.25vw] bg-black rounded-3xl'>

			</div>
			<div className=' relative bg-[#EFEFF5] p-[2vw] w-[34.875vw] h-[22.25vw] rounded-3xl'>
				<div className=' absolute bottom-[2vw]'>
					<div className='w-[30.875vw]'>
						<div className='mb-[0.5vw] w-full font-sans font-bold text-[1.5vw] leading-[1.875vw]'>
							Quality-Based Rewards
						</div>
						<div className='w-full font-display font-medium text-[1vw] leading-[1.5vw]'>
							Annotators receive tokens not just for the quantity of work done but also for the quality, as assessed through peer reviews or AI validation methods.
						</div>
					</div>
					<div className='w-[30.875vw] h-1px bg-black mt-[2.5vw]'></div>
					<div className='w-[30.875vw] mt-[2.5vw]'>
						<div className='mb-[0.5vw] w-full font-sans font-bold text-[1.5vw] leading-[1.875vw]'>
							Task Difficulty and Urgency
						</div>
						<div className='w-full font-display font-medium text-[1vw] leading-[1.5vw]'>
							Higher rewards for tasks that are more complex or require a quicker turnaround, incentivizing skilled contributors to prioritize them.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
