import Image from 'next/image'
import productPic from '@/assets/image/product_bg.png'
import product1Pic from '@/assets/image/product1.png'
import product2Pic from '@/assets/image/product2.png'
import product3Pic from '@/assets/image/product3.png'
import product4Pic from '@/assets/image/product4.png'
import Link from 'next/link'
import  Product  from './Product'
const titles = [
	'Data Labelling',
	'RLFH Feedback (RLHF)',
	'Data Collection',
	'Data Anonymization and Re-Trade'
]
const contents = [
	'At the forefront of our offerings, our platform provides comprehensive data labelling services, enabling precise annotation across a myriad of data types. With our intuitive interface and advanced toolset, we ensure the highest quality labels, empowering your AI models to learn and perform with exceptional accuracy.',
	'Leveraging the power of human insight, our RLHF feature accelerates the refinement and effectiveness of AI algorithms. By incorporating direct feedback into the learning process, we enhance model responsiveness and adaptability, bridging the gap between AI potential and real-world application.',
	'Our platform motivates users by offering tokens for uploading diverse data, thus building a segmented database. What distinguishes us is the rewarding system: each time a dataset is accessed, contributors receive token incentives. This ensures ongoing participation and a comprehensive collection of varied data types',
	'Addressing the critical need for privacy and security, we offer advanced data anonymization services, allowing for the safe re-trade of sensitive information. This feature not only protects individual privacy but also opens new avenues for data utilization, ensuring compliance and ethical use of information in AI development.'
]
const colorList = [
	'bg-[#A2F464]',
	'bg-[#4AE1C6]',
	'bg-[#90AFFF]',
	'bg-[#DFDFDF]'
]
const logoColorList = [
	'fill-[#A2F464] stroke-[#A2F464]',
	'fill-[#81EEDA] stroke-[#81EEDA]',
	'fill-[#90AFFF] stroke-[#90AFFF]',
	'fill-[#DFDFDF] stroke-[#DFDFDF]'
]
export default function ProductList() {
	return (
		<div className="ml-[3.125vw] w-[96.875vw] mt-[24px] flex snap-x no-scrollbar overflow-x-scroll">
			<ul className='flex-shrink-0 flex-grow-0 flex flex-row'>
				{[product1Pic, product2Pic, product3Pic, product4Pic].map((img, index) => (<Product bgColor={colorList[index]} logoColor={logoColorList[index]} headImg={img} title={titles[index]} content={contents[index]} />))}
			</ul>
		</div>
	)
}