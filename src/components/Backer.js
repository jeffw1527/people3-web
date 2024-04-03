'use client'
import Image from 'next/image'
import companyPic from '@/assets/image/companies.png'
import Link from 'next/link'
import { Progress } from '@chakra-ui/react'
import backer1Pic from '@/assets/image/backer1.png'
import backer2Pic from '@/assets/image/backer2.png'
import backer3Pic from '@/assets/image/backer3.png'
import backer4Pic from '@/assets/image/backer4.png'
import backer5Pic from '@/assets/image/backer5.png'
import backer6Pic from '@/assets/image/backer6.png'
import backer7Pic from '@/assets/image/backer7.png'

import { ReactSVG } from 'react-svg';

const picList = [
	backer1Pic,
	backer2Pic,
	backer3Pic,
	backer4Pic,
	backer5Pic,
	backer6Pic,
	backer7Pic,
]
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
export default function DataCuration() {
	return (
		<div className="relative  mt-[12.5vw] ml-[3.125vw] mr-[3.125vw] w-[93.75vw] flex flex-col justify-center items-center">
			<div className='font-sans font-semibold text-[4.75vw] leading-none'>
				Backers
			</div>
			<div className=' justify-center mt-[2.5vw] mb-[8vw] flex flex-wrap'>
				{[0,1,2,3,4,5,6].map((i) => {
					return (
						<div className=' relative w-[22.125vw] mx-[0.25vw] mb-[0.5vw] h-[8.75vw] bg-[#F5F7F4] rounded-3xl flex  justify-center items-center'>
							<Image
								src={picList[i]}
								style={{
									width: [1,2,3].indexOf(i) > -1 ? '25%' : '50%',
									height: 'auto',
								}}
								// blurDataURL="data:..." automatically provided
								// placeholder="blur" // Optional blur-up while loading
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}
