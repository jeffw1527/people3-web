'use client'
import Image from 'next/image'
import userPic from '@/assets/image/users.png'
import Link from 'next/link'
import { Progress } from '@chakra-ui/react'

export default function DataCuration() {
	return (
		<div className="relative  mt-[10.5vw] w-full h-[62.5vw]">
			<Image
				src={userPic}
				fill
			/>
		</div>
	)
}
