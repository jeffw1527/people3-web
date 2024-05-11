'use client'
import Image from 'next/image'
import companyPic from '@/assets/image/companies.png'
import Link from 'next/link'
import { Progress } from '@chakra-ui/react'
import dataLabel1Pic from '@/assets/image/data_retrade1.svg'
import dataLabel2Pic from '@/assets/image/data_retrade2.svg'
import dataLabel3Pic from '@/assets/image/data_retrade3.svg'
import dataLabel4Pic from '@/assets/image/data_retrade4.svg'
import logoPic from '@/assets/image/logo.svg'
import { useState, useEffect, useRef } from 'react'
import { ReactSVG } from 'react-svg';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const sceneValueList = [
	347,
	160,
	237,
	229
]
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
export default function DataReTrade() {
	const frameValueRef = useRef(0)
	const indexRef = useRef(0)
	const [currentIndex, setCurrentIndex] = useState(0)
	const valueRef = useRef(0)
	const [currentValue, setCurrentValue] = useState(0)
	useEffect(() => {
		const intervalId = setInterval(() => {
			valueRef.current = valueRef.current + 1
			frameValueRef.current += 1
			valueRef.current = Math.ceil(frameValueRef.current/sceneValueList[indexRef.current] * 100)
			if (valueRef.current > 100) {
				frameValueRef.current = 0
				valueRef.current = 0
				indexRef.current = (indexRef.current + 1) % 4
				setCurrentIndex(indexRef.current)
			}
			setCurrentValue(valueRef.current)
		}, 20)
		return () => clearInterval(intervalId);
	}, [])
	return (
		<div className="relative  mt-[12.5vw] ml-[3.125vw] mr-[3.125vw] w-[93.75vw] h-[37.5vw]">
			<div className='z-20 absolute left-[0.3vw] bottom-[-4.8vw]'>
				<Player
					autoplay
					loop
					src="/data3.json"
					style={{ height: '40.6vw', width: '38.8vw' }}
				>
						{/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
				</Player>
			</div>
			<div className='absolute top-[1.25vw] left-[1.875vw] w-[43.75vw] font-sans font-semibold text-[4.75vw] leading-[4.275vw]'>
				Data Privacy & Reselling
			</div>
			<div className='absolute top-0 right-0 flex flex-col'>
				{[0,1,2,3].map((i) => {
					if (currentIndex !== i) {
						return (
							<div className='mb-[2.5vw] ml-[1.875vw]  stroke-[black] fill-[black]'>
								<div className='flex items-center'>
									<div className=' relative w-[1.5vw] h-[1.5vw] flex-shrink-0 mr-[0.375vw]'>
										<ReactSVG
											src={picMap[`dataLabel${i+1}Pic`].src}
										/>
									</div>
									<div className='font-display font-semibold text-[1.1875vw] leading-[1.5vw]  whitespace-nowrap '>
										{titleList[i]}
									</div>
								</div>
								<div className='w-[41.375vw] mt-[1vw]'>
									{/* todo progress换色 */}
									<Progress height={"0.15vw"} colorScheme='green' value={0} />
								</div>
							</div>
						)
					}
					return (
						<div className=' relative w-[46.625vw] mb-[2.5vw] h-[21.375vw] bg-[#EAFFD9] rounded-3xl'>
							<div className='z-10 absolute top-[1.675vw] right-[1.675vw] fill-[#C4FF94]'>
								<ReactSVG
									src={logoPic.src}
								/>
							</div>
							<div className='z-20 flex items-center absolute left-[1.875vw] top-[1.875vw]  stroke-white fill-white text-white bg-[#5BBE10] rounded-[23px] px-[0.625vw] py-[0.25vw]'>
								
								<div className=' relative w-[1.5vw] h-[1.5vw] flex-shrink-0 mr-[0.375vw]'>
									<ReactSVG
										src={picMap[`dataLabel${i+1}Pic`].src}
									/>
								</div>
								<div className='font-display font-semibold text-[1.1875vw] leading-[1.5vw]  whitespace-nowrap '>
									{titleList[i]}
								</div>
							</div>
							<div className='z-20 absolute w-[41.375vw]  left-[1.875vw] top-[4.7vw] font-display font-semibold text-[2.5vw] leading-[3vw]'>
								{contentList[i]}
							</div>
							<div className='z-20 absolute  left-[1.875vw] bottom-[1.875vw] w-[41.375vw]'>
								<Progress height={"0.15vw"} colorScheme='brand' value={currentIndex === i ? currentValue : 0} />
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
