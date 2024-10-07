import TextCard from "@/components/text-card/TextCard"
import Image from "next/image"



function About() {
  return (
    <section className="px-6 my-20 grid gap-10 md:grid-cols-2 sm:grid-cols-1">
      <div className="grid place-content-center" dir="rtl">
          <div className="flex flex-col gap-8">
              <h2 className="font-bold text-2xl text-secondary">درباره ما</h2>
              <h1 className="font-bold text-5xl">ما ایده های بزرگی داریم</h1>
              <p>با ایده های ما شما را در مسیر موفقیتتان یاری میکنیم بزرگ فکر میکنیم و مسیر را هموار میکنیم و با هم به موفقیت میرسیم با تیم ما به اهدافتان برسید و پله های ترقی را سریع طی کنید</p>
          </div>
          <div className="flex gap-4 justify-between items-center my-4 ">
            <TextCard
              Chead="20 سال"
              Cbody="تجربه کاری"
            />
           <TextCard
              Chead="200k"
              Cbody="تعداد مشتریان"
            />
            <TextCard
             Chead="5k"
             Cbody="پروژه های انجام شده"
            />
          </div>
      </div>
      <div className="relative w-full h-96 md:h-auto">
          <Image  src='/pexels-artempodrez-5716034.jpg' alt="" className="object-contain" fill/>
      </div>
    </section>
  )
}

export default About