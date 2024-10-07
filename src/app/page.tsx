'use client'
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animationData from '../../public/Animation.json';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <section className='container mx-auto grid gap-20 place-content-center px-6 md:grid-cols-2 sm:grid-cols-1'>
      <div className='grid place-content-center'>
        
        <Lottie animationData={animationData} loop={true} style={{ width: 600, height: 600 }}/>
      </div>
      <div className='grid place-content-center text-justify gap-12' dir='rtl'>
        <h1 className='text-5xl'>ایده هاتو با ما بساز</h1>
        <p className='text-justify'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. 
        </p>
        <div className='flex gap-3'>
          <Button size='lg' variant='light' color='secondary'>اطلاعات بیشتر</Button>
          <Button size='lg' variant='shadow' color='secondary'>ارتباط با ما</Button>
        </div>
      </div>
    </section>
  );
}



