import Image from 'next/image'

const ProductCard = () =>{
  return <div className="flex flex-col border-2 rounded-md border-gray-600 w-1/2">
    <Image alt="product name" width={500} height={255} src='/b3897_512.webp' ></Image>
    <h3 className='pl-2'>Levis</h3>
    <h4 className='pl-2'>123$</h4>
  </div>
}
const Container = ({children}:{children: JSX.Element|JSX.Element[]}) =>{
  return <div className="flex flex-row flex-nowrap justify-between gap-2 pb-2" >{children}</div>
} 

const ProductArr = new Array(1000).fill(0)
export default function Home() {
  console.log({ProductArr})
  return (
    <main className="flex min-h-screen flex-col p-4">
      {ProductArr.map(()=><Container>
        <ProductCard/>
        <ProductCard/>
      </Container>)}
    </main>
  )
}
