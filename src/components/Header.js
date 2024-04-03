'use client'
import Image from 'next/image'
import profilePic from '@/assets/image/LOGO.png'
import appDownloadPic from '@/assets/image/app_dowload.png'
import Link from 'next/link'
import icon1Pic from '@/assets/image/social1.svg'
import icon2Pic from '@/assets/image/social2.svg'
import icon3Pic from '@/assets/image/social3.svg'
import  SocialIcon  from './SocialIcon'
import { useToast } from '@chakra-ui/react'

const iconList = [
	icon1Pic,
	icon2Pic,
	icon3Pic
]

export default function Header() {
	const toast = useToast()
	return (
		<div className="h-[3.75vw] flex items-center w-screen justify-center">
			<div className="absolute left-[5vw] w-[8.5vw] h-[2vw]">
				<Image
					src={profilePic}
					alt="Logo"
					fill
					// blurDataURL="data:..." automatically provided
					// placeholder="blur" // Optional blur-up while loading
				/>
			</div>
			<Link className='font-display font-semibold text-[0.875vw] leading-[1vw] text-left mr-[0.75vw] ml-[0.75vw]' href="/">Home</Link>
			<Link className='font-display font-semibold text-[0.875vw] leading-[1vw] text-left mr-[0.75vw] ml-[0.75vw]' href="/#customers">Customers</Link>
			<Link className='font-display font-semibold text-[0.875vw] leading-[1vw] text-left mr-[0.75vw] ml-[0.75vw]' href="/#products">Products</Link>
			<Link className='font-display font-semibold text-[0.875vw] leading-[1vw] text-left mr-[0.75vw] ml-[0.75vw]' href="/#community">Community</Link>
			<Link className='font-display font-semibold text-[0.875vw] leading-[1vw] text-left mr-[0.75vw] ml-[0.75vw]' href="/#economic">Economic model</Link>
			<Link className='font-display font-semibold text-[0.875vw] leading-[1vw] text-left mr-[0.75vw] ml-[0.75vw]' href="/#backers">Backers</Link>
			<div className='absolute right-[5vw] flex items-center justify-center'>
				{iconList.map((icon, index) => {
					return (
					<SocialIcon 
						key={index}  icon={icon.src} 
					/>)
				})}
				<div
					className=' relative w-[11.9375vw] h-[2vw] ml-[1.375vw] cursor-pointer'
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
					<Image src={appDownloadPic} fill />
				</div>
			</div>
		</div>
	)
}