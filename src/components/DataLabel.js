'use client'
import Image from 'next/image'
import companyPic from '@/assets/image/companies.png'
import Link from 'next/link'
import { Progress } from '@chakra-ui/react'
import dataLabel1Pic from '@/assets/image/data_label1.svg'
import dataLabel2Pic from '@/assets/image/data_label2.svg'
import dataLabel3Pic from '@/assets/image/data_label3.svg'
import dataLabel4Pic from '@/assets/image/data_label4.svg'
import { useState, useEffect, useRef } from 'react'
import { ReactSVG } from 'react-svg';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const sceneValueList = [
	200,
	150,
	210,
	221
]
const picMap = {
	dataLabel1Pic,
	dataLabel2Pic,
	dataLabel3Pic,
	dataLabel4Pic,
}
const contentList = [
	'Intuitive Annotation Tools',
	'Multiple Data Types Support',
	'Quality Assurance Mechanisms',
	'Collaborative Annotation Environment',
]
export default function DataLabel() {
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
		<div className="relative ml-[5vw] mr-[5vw] w-[90vw] h-[31.25vw]">
			<div className='absolute top-0 right-0'>
				<Player
					autoplay
					loop
					src="/data1.json"
					style={{ height: '31.6vw', width: '33.8vw' }}
				>
						{/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
				</Player>
			</div>
			<div className='absolute top-[5.625vw] font-sans font-semibold text-[3.75vw] leading-none'>
				Data Labelling
			</div>
			<div className='absolute top-[17.375vw] font-sans font-bold text-[2.5vw] leading-[3vw] w-[61vw]'>
				Versatile support for a variety of data formats, ensuring comprehensive annotation capabilities across different AI applications.
			</div>
			<div className='absolute left-0 bottom-0 flex  h-auto'>
				{[0,1,2,3].map((i) => {
					return (
						<div className='w-[22.375vw] mr-[0.75vw]'>
							<Progress height={"0.3125vw"} colorScheme='brand' value={currentIndex === i ? currentValue : 0} />
							<div className={`flex items-center mt-[0.75vw] ${currentIndex === i ? 'font-extrabold stroke-[3px]' : 'font-semibold stroke-[2.5px]'}`}>
								<div className=' relative w-[1.5vw] h-[1.5vw] flex-shrink-0 mr-[0.375vw]'>
									<ReactSVG
										src={picMap[`dataLabel${i+1}Pic`].src}
									/>
								</div>
								<div className='font-display text-[1.1875vw] leading-[1.5vw]  whitespace-nowrap '>
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
