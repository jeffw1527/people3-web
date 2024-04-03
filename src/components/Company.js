import Image from 'next/image'
import companyPic from '@/assets/image/companies.png'
import Link from 'next/link'

export default function Company() {
	return (
		<div className="relative  ml-[3.125vw] mr-[3.125vw] w-[93.75vw] h-[40vw]">
			<div className='rounded-t-3xl pt-[1.875vw] pr-[1.875vw] absolute top-0 left-[30vw] bg-[#F5F7F4] w-[63.75vw] h-[9.125vw] '>

			</div>
			<div className='rounded-b-3xl bg-[#F5F7F4] rounded-tl-3xl pr-[1.875vw] pl-[1.875vw] pb-[1.875vw] absolute top-0 mt-[9.125vw] right-0 w-[93.75vw] h-[30.875vw]'>

			</div>
			<div className='z-10 m-[1.875vw] absolute top-0 right-0 left-0 bottom-0'>
				<Image
					src={companyPic}
					alt="company"
					fill
				/>
			</div>
			<div className='absolute left-[1.875vw] top-[1.875vw] w-[27.375vw]  font-sans font-bold text-[4.75vw] leading-[4.275vw] '>
				Partners
			</div>
		</div>
	)
}
