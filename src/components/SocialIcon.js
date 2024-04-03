'use client'
import Image from 'next/image'
import { useState } from 'react'
import borderTLPic from '@/assets/image/border_tl.png'
import logoPic from '@/assets/image/logo.svg'
import { ReactSVG } from 'react-svg';

export default function socialIcon(props) {
	console.log('props: ', props);

	return (
		<div 
			className='hover:bg-[#A2F464] ml-[0.5vw] w-[2vw] h-[2vw] rounded-[2vw] bg-[#F5F6F4]  flex items-center justify-center cursor-pointer'
		>
			<ReactSVG src={props.icon} />
		</div>
	)
}