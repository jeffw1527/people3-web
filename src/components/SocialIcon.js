'use client'
import Image from 'next/image'
import { useState } from 'react'
import borderTLPic from '@/assets/image/border_tl.png'
import logoPic from '@/assets/image/logo.svg'
import { ReactSVG } from 'react-svg';
import { useToast } from '@chakra-ui/react'

export default function socialIcon(props) {
	const toast = useToast()
	return (
		<div 
			className='hover:bg-[#A2F464] ml-[0.5vw] w-[2vw] h-[2vw] rounded-[2vw] bg-[#F5F6F4]  flex items-center justify-center cursor-pointer'
			onClick={() =>
				toast({
					title: 'Coming soon.',
					// description: "We've created your account for you.",
					status: 'warning',
					duration: 1500,
					isClosable: true,
					position: 'top'
				})
			} 
		>
			<ReactSVG src={props.icon} />
		</div>
	)
}