import Image from 'next/image'
import maskPic from '@/assets/image/Mask.png'
import appButtonPic from '@/assets/image/App_button.png'
import borderTLPic from '@/assets/image/border_tl.png'
import Link from 'next/link'

export default function Introduction() {
	return (
		<div className="relative mr-[3.125vw] ml-[3.125vw] w-[93.75vw] h-[37.5vw] mt-[40px]">
			<div className='absolute left-0 top-0 h-[18.8vw] w-[65.8vw] z-10 bg-white rounded-br-3xl'>
				<div className='pl-[3.7vw] font-sans font-bold text-[5.5vw] leading-none mt-[0.75vw]'>
					The <span className='text-[#5BBE10]'>Decentralized</span>
				</div>
				<div className='pl-[3.7vw] font-sans font-bold text-[5.4vw] leading-none mt-[0.75vw] whitespace-no-wrap  overflow-hidden '>
					Builder Community Of AI
				</div>
				<div className='pl-[3.7vw] font-display font-medium text-[1vw] leading-[1.6vw] mt-[2.3vw]'>
					Fueling AI advancement with decentralized, high-quality data annotation at unparalleled cost efficiency, People3 AI is redefining the nexus of affordability and excellence.
				</div>
				<div className='flex w-[18.75vw] h-[10vw]'>
					<div className='flex items-center justify-start relative items-center pl-[3.7vw] mt-[0.9vw] bg-white rounded-br-3xl w-[18.75vw]'>
						<div className='absolute right-[-24px] top-0'>
							<Image src={borderTLPic} />
						</div>
						<div className='absolute bottom-[-24px] left-0'>
							<Image src={borderTLPic} />
						</div>
						<div className='relative w-[11.875vw] h-[2.43vw] cursor-pointer'>
							<Image
								src={appButtonPic}
								alt="App"
								fill
							/>
						</div>
					</div>

				</div>
			</div>
			<Image
				alt=""
				src={maskPic}
				placeholder="blur"
				quality={100}
				fill
				sizes="100%"
				style={{
					objectFit: 'cover',
				}}
			/>
		</div>
	)
}