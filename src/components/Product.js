'use client'
import Image from 'next/image'
import { useState } from 'react'
import borderTLPic from '@/assets/image/border_tl.png'
import logoPic from '@/assets/image/logo.svg'
import { ReactSVG } from 'react-svg';

export default function Product(props) {
	const [isHover, setIsHover] = useState(false)
	return (
		<li 
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			className={`${isHover ? props.bgColor : ''} relative cursor-pointer rounded-[24px] overflow-hidden w-[31vw] h-[20.25vw] mr-[24px] flex-shrink-0`}
		>
			<div className='absolute left-0 top-0 w-[7vw] h-[7vw] bg-white rounded-br-3xl'>
				<div className='absolute top-0 right-[-24px]'>
					<Image src={borderTLPic} />
				</div>
				<div className='absolute left-0 bottom-[-24px]'>
					<Image src={borderTLPic} />
				</div>
			</div>
			{isHover ? <div className={`z-10 absolute top-[1.675vw] right-[1.675vw] opacity-40 stroke-white fill-white`}>
				<ReactSVG
					src={logoPic.src}
				/>
			</div> : null}
			<div className='w-full h-full flex justify-center items-center'>
				<div className='z-20 w-[28vw] h-[17.25vw] relative'>
					<div className='absolute top-0 left-0 w-[4vw] h-[4vw]'>
						<Image
							src={props.headImg}
							alt="App"
							fill
						/>
					</div>
					<div className='absolute bottom-0 w-full'>
						<div className='font-sans font-bold text-[2.25vw] leading-[2.75vw]'>
							{props.title}
						</div>
						<div className='font-display font-medium text-[0.8125vw] leading-[1.22vw] mt-[1vw]'>
							{props.content}
						</div>
					</div>
				</div>
			</div>
		</li>
	)
}