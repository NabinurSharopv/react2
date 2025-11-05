import React from 'react'
import img11 from "../img/img11.png"; 
import img12 from "../img/img12.png"; 
import img13 from "../img/img13.png"; 



const pej4 = () => {
  return (
    <div>
          <div className="grid ml-19 items-center justify-center">
            <p className="w-[267px] h-[20px] ml-20   font-nunito font-normal text-[24px] leading-[20px] text-[#F2BE22]  tracking-[0%]">по версии отдыхающих</p>
          <h1   className="
    w-[580px]
    h-[38px]
    font-nunito
    font-extrabold
    text-[32px]
    text-[#18121E]
  "
>Популярные направления</h1>
          </div>
          <div className="flex items-center justify-center gap-15 mt-19">
                <img src={img11} alt="" />
                <img src={img12} alt="" />
                <img src={img13} alt="" />

          </div>
          <button className="ml-159 mt-10 w-[250px] h-[44px] opacity-100 rounded-[4px] px-[24px] py-[12px] font-sans font-semibold text-[16px] leading-[20px] tracking-[1.2%] text-white bg-[#1A3E3E] flex items-center justify-center gap-[10px]">Рейтинг направлений</button>

    </div>
  )
}

export default pej4