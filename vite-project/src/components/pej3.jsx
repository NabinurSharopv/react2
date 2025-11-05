import React from 'react'
import img7 from "../img/img7.png";   
import img8 from "../img/img8.png";    
import img9 from "../img/img9.png";     
import img10 from "../img/img10.png";     



const pej3 = () => {
  return (
    <div className="flex items-center justify-center gap-29 bg-[#F3F5F4] p-30 mt-10">
        <div>
            <p   className="
    w-[222px]
    h-[20px]
    opacity-100
    font-nunito
    font-normal
    text-[24px]
    leading-[20px]
    tracking-[0%]
    text-[#F2BE22]
  ">наше предложение</p>
  <h1   className="
    w-[580px]
    h-[38px]
    opacity-100
    font-nunito
    font-extrabold
    text-[32px]
    leading-[120%]
    tracking-[0%]
    text-[#18121E]
  ">Лучшие программы для тебя</h1>
  <br />
  <p   className="
    w-[580px]
    h-[81px]
    opacity-100
    font-nunito
    font-normal
    text-[18px]
    leading-[150%]
    tracking-[0%]
    text-[#18121E]
  ">Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.
  </p>
  <br />
  <div className="flex gap-4">
    <img src={img7} alt="" />
    <div>
        <h2 className="
    w-[121px]
    h-[20px]
    opacity-100
    font-nunito
    font-bold
    text-[18px]
    leading-[20px]
    tracking-[1.2%]
    text-[#18121E]
  ">    Опытный гид</h2>
  <p  className="
    w-[514px]
    h-[40px]
    opacity-100
    font-nunito
    font-normal
    text-[14px]
    leading-[20px]
    tracking-[0%]
    text-[#18121E]
  ">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации. </p>
    </div>
  </div>
  <div className="flex mt-9 gap-4">
    <img src={img8} alt="" />
    <div>
        <h2 className="
    w-[221px]
    h-[20px]
    opacity-100
    font-nunito
    font-bold
    text-[18px]
    leading-[20px]
    tracking-[1.2%]
    text-[#18121E]
  ">Безопасный поход</h2>
  <p  className="
    w-[514px]
    h-[40px]
    opacity-100
    font-nunito
    font-normal
    text-[14px]
    leading-[20px]
    tracking-[0%]
    text-[#18121E]
  ">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
    </div>
  </div>
  <div className="flex mt-9 gap-4">
    <img src={img9} alt="" />
    <div>
        <h2 className="
    w-[221px]
    h-[20px]
    opacity-100
    font-nunito
    font-bold
    text-[18px]
    leading-[20px]
    tracking-[1.2%]
    text-[#18121E]
  ">Лояльные цены</h2>
  <p  className="
    w-[514px]
    h-[40px]
    opacity-100
    font-nunito
    font-normal
    text-[14px]
    leading-[20px]
    tracking-[0%]
    text-[#18121E]
  ">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
    </div>
  </div>
  <button className="mt-9 w-[237px] h-[44px] opacity-100 rounded-[4px] px-[24px] py-[12px] font-sans font-semibold text-[16px] leading-[20px] tracking-[1.2%] text-white bg-[#1A3E3E] flex items-center justify-center gap-[10px]">Стоимость программ</button>

        </div>
        <div>
        <img src={img10} alt="" />
        </div>
    </div>
  )
}

export default pej3