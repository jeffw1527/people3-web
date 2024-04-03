'use client'
import Image from 'next/image'
import companyPic from '@/assets/image/companies.png'
import Link from 'next/link'
import { Progress } from '@chakra-ui/react'
import dataLabel1Pic from '@/assets/image/data_curation1.svg'
import dataLabel2Pic from '@/assets/image/data_curation2.svg'
import dataLabel3Pic from '@/assets/image/data_curation3.svg'
import dataLabel4Pic from '@/assets/image/data_curation4.svg'
import logoPic from '@/assets/image/logo.svg'
import {useState} from 'react'

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
export default function DataCuration() {

	const [currentIndex, setCurrentIndex] = useState(-1)
	return (
		<div className="relative  mt-[12.5vw] ml-[3.125vw] mr-[3.125vw] w-[93.75vw]">
			<div className='ml-[1.875vw] font-sans font-semibold text-[4.75vw] leading-none'>
				Data Curation
			</div>
			<div className=' justify-center mt-[2.5vw] flex flex-wrap'>
				{[0,1,2,3].map((i) => {
					return (
						<div onMouseEnter={() => setCurrentIndex(i)} onMouseLeave={() => setCurrentIndex(-1)} className={` ${currentIndex === i ? 'bg-datacuration bg-white text-[#A2F464] stroke-[#5BBE10] fill-[#5BBE10]' : 'stroke-[black] fill-[black]'}  relative w-[46.125vw] mb-[0.5vw] mr-[0.25vw] ml-[0.25vw] h-[19.4375vw] bg-[#F5F7F4] rounded-3xl bg-cover `}>
							<div className='w-full h-full'>
								{currentIndex === i ? (<div className='z-10 absolute top-[1.675vw] right-[1.675vw] fill-[#232323] stroke-[#232323]'>
									<ReactSVG
										src={logoPic.src}
									/>
								</div>) : null}
								<div className='flex items-center absolute left-[1.5vw] top-[1.5vw]'>
									<div className=' relative w-[1.5vw] h-[1.5vw] flex-shrink-0 mr-[0.375vw]'>
										<ReactSVG
											src={picMap[`dataLabel${i+1}Pic`].src}
										/>
									</div>
									<div className={`${currentIndex === i ? 'font-extrabold text-[#5BBE10]' : 'font-semibold'} font-display text-[1.1875vw] leading-[1.5vw]  whitespace-nowrap `}>
										{titleList[i]}
									</div>
								</div>
								<div className={`${currentIndex === i ? '' : 'opacity-20'} z-20 absolute  left-[1.5vw] right-[1.5vw] bottom-[1.5vw] font-display font-semibold text-[2.25vw] leading-[2.69vw]`}>
									{contentList[i]}
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
