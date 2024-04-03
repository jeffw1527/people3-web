'use client'
import Image from 'next/image'
import rlhfLogoPic from '@/assets/image/rlhf_logo.png'
import Link from 'next/link'
import { Progress } from '@chakra-ui/react'
import dataLabel1Pic from '@/assets/image/rlhf1.svg'
import dataLabel2Pic from '@/assets/image/rlhf2.svg'
import dataLabel3Pic from '@/assets/image/rlhf3.svg'
import dataLabel4Pic from '@/assets/image/rlhf4.svg'
import { useState, useEffect, useRef } from 'react'
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
const contentList = [
	'Direct Feedback Integration',
	'Adaptive Learning Algorithms',
	'Efficient Iterative Improvement',
	'Custom Feedback Mechanisms',
]
export default function RLFH() {
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
		<div className="relative mt-[12.5vw] ml-[3.125vw] mr-[3.125vw] w-[93.75vw] h-[35.3125vw] bg-rlhf bg-bottom bg-no-repeat bg-[length:100%_91.3%]">
			<div className='absolute top-[-9.25vw] right-[1.875vw]'>
				<Player
					autoplay
					loop
					src="/data2.json"
					style={{ height: '31.6vw', width: '33.8vw' }}
				>
						{/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
				</Player>
			</div>
			<div className='absolute top-0 left-[1.5vw] w-[51.875vw]'>
				<div className=' relative w-[8.375vw] h-[3.0625vw]'>
					<Image
						src={rlhfLogoPic}
						fill
					/>
				</div>
				<div className=' font-sans font-semibold text-[4.75vw] leading-none'>
					Reinforcement Learning from Human Feedback
				</div>
			</div>
			<div className='absolute right-[1.5vw] bottom-[1.5vw] font-sans font-bold text-[2.5vw] leading-[3vw] w-[50.25vw]'>
				Customize datasets to fit your Fine-Tuning purpose to build sustainable, successful AI programs and power the next generation of Generative AI
			</div>
			<div className='absolute left-[1.5vw] bottom-[1.5vw]  h-auto'>
				{[0,1,2,3].map((i) => {
					return (
						<div className='w-[22.375vw] mr-[0.75vw] mt-[2.5vw]'>
							{/* todo Progress background color */}
							<Progress height={"0.3125vw"} colorScheme='black' value={currentIndex === i ? currentValue : 0} />
							<div className={`flex items-center mt-[0.75vw] ${currentIndex === i ? 'font-extrabold stroke-[3px]' : 'font-semibold stroke-[2.5px]'}`}>
								<div className=' relative w-[1.5vw] h-[1.5vw] flex-shrink-0 mr-[0.375vw]'>
									<Image
										src={picMap[`dataLabel${i+1}Pic`]}
										fill
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
