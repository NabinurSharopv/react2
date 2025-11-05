import React from 'react'
import img5 from "../img/img5.jpg"; 
import img6 from "../img/img6.jpg"; 



const pej2 = () => {
  return (
    <div className="flex mt-30 items-center justify-center gap-50">
        <div className="ml-10">
            <img className="w-[350px] h-[400px] rounded-[24px]" src={img5} alt="" />
            <img className="w-[350px] h-[400px] rounded-[24px] ml-30 mt-[-280px]" src={img6} alt="" />
        </div>
        <div >
            <p   className="
    w-[182px]
    h-[20px]
    opacity-100
    font-nunito
    font-normal
    text-[24px]
    leading-[20px]
    tracking-[0%]
    text-[#F2BE22]
  ">о нашем походе</p>
  <br />
  <h1   className="
    w-[580px]
    h-[76px]
    opacity-100
    font-nunito
    font-extrabold
    text-[32px]
    leading-[120%]
    tracking-[0%]
    text-[#18121E]
  ">Исследуйте все горные массивы мира вместе с нами</h1>
  <br />
  <p   className="
    w-[580px]
    h-[162px]
    opacity-100
    font-nunito
    font-normal
    text-[18px]
    leading-[150%]
    tracking-[0%]
    text-[#18121E]
  "
>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
</p>
<br />
<button className="w-[157px] h-[44px] opacity-100 rounded-[4px] px-[24px] py-[12px] font-sans font-semibold text-[16px] leading-[20px] tracking-[1.2%] text-white bg-[#1A3E3E] flex items-center justify-center gap-[10px]">Консультация</button>

        </div>
    </div>
  )
}

export default pej2
