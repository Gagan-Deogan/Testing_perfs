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

export default async function Home(props:any) {
  const data:any = await getData()
  return (
    <main className="flex min-h-screen flex-col p-4">
      {data.map(()=><Container>
        <ProductCard/>
        <ProductCard/>
      </Container>)}
    </main>
  )
}

async function getData() {
  // Fetch data from external API
  // Pass data to the page via props
  const promise = new Promise((res, rej)=>{
    setTimeout(()=>{
      const ProductArr = new Array(1000).fill({image: "/b3897_512.webp", name: "levi's"})
      res(ProductArr)
    }, 100)
  });

  return promise;
}