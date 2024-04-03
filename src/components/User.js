'use client'
import Image from 'next/image'
import userPic from '@/assets/image/users.png'
import Link from 'next/link'
import { Progress } from '@chakra-ui/react'

export default function DataCuration() {
	return (
		<div className="relative ml-[1vw] mr-[1vw] w-[98vw] h-[43.75vw]">
			<Image
				src={userPic}
				fill
			/>
		</div>
	)
}
