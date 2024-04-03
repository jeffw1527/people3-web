'use client'
import Image from 'next/image'
import profilePic from '@/assets/image/footer_logo.png'
import Link from 'next/link'
import appButtonPic from '@/assets/image/App_button.png'
import footerBackSVG from '@/assets/image/footer_back.svg'
import { ReactSVG } from 'react-svg';
import { useToast } from '@chakra-ui/react'
// todo fix opacity
export default function Footer() {
	const toast = useToast()
	return (
		<div className=" relative h-[29.75vw] w-screen bg-black">
			<div className="absolute left-[5vw] top-[4.875vw] w-[40vw] h-[9.5vw] z-10">
				<Image
					src={profilePic}
					alt="Logo"
					fill
				/>
			</div>
			<div
				className='absolute left-[5vw] top-[21.625vw] w-[11.875vw] h-[2.43vw] cursor-pointer'
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
				<Image
					src={appButtonPic}
					alt="App"
					fill
				/>
			</div>
			<div className='absolute top-[5vw] left-[73.375vw] w-[21.625vw] h-[19.75vw]'>
				<div className='absolute left-0 top-0 flex flex-col'>
					<div className='font-sans text-[0.75vw] text-white font-black leading-none text-left opacity-50'>NAVIGATION</div>
					<Link className='font-sans text-[1vw] text-white font-semibold leading-[1.25vw] text-left mt-[1.5vw]' href="/">Home</Link>
					<Link className='font-sans text-[1vw] text-white font-semibold leading-[1.25vw] text-left mt-[1.5vw]' href="/#customers">Customers</Link>
					<Link className='font-sans text-[1vw] text-white font-semibold leading-[1.25vw] text-left mt-[1.5vw]' href="/#products">Products</Link>
					<Link className='font-sans text-[1vw] text-white font-semibold leading-[1.25vw] text-left mt-[1.5vw]' href="/#community">Community</Link>
					<Link className='font-sans text-[1vw] text-white font-semibold leading-[1.25vw] text-left mt-[1.5vw]' href="/#economic">Economic model</Link>
					<Link className='font-sans text-[1vw] text-white font-semibold leading-[1.25vw] text-left mt-[1.5vw]' href="/#backers">Backers</Link>
				</div>
				<div className='absolute right-0 top-0 flex flex-col'>
					<div className='font-sans text-[0.75vw] text-white font-black leading-none text-left opacity-50'>CONTACT US</div>
					<div className='font-sans text-[1vw] text-white font-semibold leading-[1.25vw] text-left mt-[1.5vw]' 
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
					>Twitter</div>
					<div className='font-sans text-[1vw] text-white font-semibold leading-[1.25vw] text-left mt-[1.5vw]' 
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
					>Telegram</div>
					<div className='font-sans text-[1vw] text-white font-semibold leading-[1.25vw] text-left mt-[1.5vw]' 
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
					>Discode</div>
				</div>
				<div 
					onClick={() => {
						window.scrollTo(0, 0);
					}}
					className='absolute top-[18.75vw] left-[14.375vw] flex items-center cursor-pointer'
				>
					<div className=' relative w-[1.5vw] h-[1.5vw] flex-shrink-0'>
						<ReactSVG
							src={footerBackSVG.src}
						/>
					</div>
					<div
						className='opacity-30 text-white font-display font-semibold text-[1.1875vw] leading-[1.7vw]  whitespace-nowrap '
					>
						Back to the top
					</div>
				</div>

			</div>
		</div>
	)
}