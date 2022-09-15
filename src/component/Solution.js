import { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";


const SOLUTION = [
    {id : 1, content : "블루투스 태깅", description : "H-Mobile Thru (현대 모바일 스루) 앱으로 엘리베이터를 제어할 수 있는 신개념 이동시스템입니다.", link : "/"},
    {id : 2, content : "모션 콜 버튼", description : "모션인식센서를 활용하여, 손을 위아래로 움직이는 동작만으로 버튼인식이 가능하기 때문에, 박테리아와 바이러스로부터 자유롭습니다.", link : "/"},
    {id : 3, content : "터치리스 버튼", description : "버튼 표면 접촉 없이, 홀을 통과하는 동작만으로 목적층을 등록하고 엘리베이터 호출이 가능합니다. 바이러스 전파 및 감염을 방지할 수 있어서 위생적입니다", link : "/"},
    {id : 4, content : "터치리스 풋버튼", description : "홀버튼 하부에 장착된 센서 인식을 통해 손을 사용하지 않고 엘리베이터를 호출할 수 있습니다.", link : "/"},
    {id : 5, content : "헤파필터 자동 냉온풍기", description : "온도 인식 센서를 통해, 스스로 알아서 제어하는 스마트 냉난방시스템으로 일년 내내 쾌적한 공기를 제공합니다.", link : "/"},
    {id : 6, content : "헤파필터 음이온 공기청정기", description : "헤파필터 적용 음이온 기능으로, 세균 및 미세먼지를 해결하고 항상 쾌적한 실내공간을 유지해 줍니다.", link : "/"},
    {id : 7, content : "스마트 인디케이터", description : "층 표시, 절전 표시, CCTV 작동 등 종합 디스플레이 장치와 초음파 해충방지 및 무오존 음이온 공기청정기 기능은 엘리베이터의 환경을 편리하고 쾌적하게 유지할 수 있습니다.", link : "/"},
    {id : 8, content : "항바이러스 핸드레일", description : "바이러스에 쉽게 노출되는 핸드레일에 항바이러스 인증 소재를 적용하여 세균을 99% 차단하고 바이러스 전염 및 전파를 효과적으로 예방합니다.", link : "/"},
    {id : 9, content : "울트라 UV 클리너", description : "에스컬레이터 핸드레일의 각종 먼지, 오염물질을 완벽하게 세척, 살균해줍니다.", link : "/"},
]
const Solution = () => { 
    const [slideNum, setSlideNum] = useState(0);
    const SLIDE = useRef(null)

    return (
        <section className="Solution csc">
            <h2>클린 무빙 솔루션</h2>
            <p>접촉 없이 편하게 이동합니다.</p>
            <div className="container">
                <Slider
                    centerMode={true}
                    centerPadding={'300px'}
                    afterChange={index => setSlideNum(index)}
                    arrows={false}
                    ref={SLIDE}
                    className={'solution_slide'}
                >
                    {
                        SOLUTION.map((img, idx)=> { 
                            return (
                                <figure key={img.id} className={slideNum === idx ? 'on' : ''}>
                                    <img src={process.env.PUBLIC_URL + "/assets/images/main_S0" + img.id +".jpg"} alt=""/>
                                </figure>
                            )
                        })
                    }
                </Slider>
                <div className="box">
                    <div className='content'>
                        <div className='tit'>{SOLUTION[slideNum].content}</div>
                        <p>{SOLUTION[slideNum].description}</p>
                        <a href={SOLUTION[slideNum].link} className='cbtn'>자세히보기</a>
                    </div>
                    <div className='num'>
                        0{slideNum + 1} <span>/ 0{SOLUTION.length}</span>
                        {/* (SOLUTION.length > 9 ? '0' : '' )을 {SOLUTION.length}앞에 넣어주기 왜냐 10이면 010이 되니까 스스로해보기*/}
                    </div>
                </div>
                <div className='arrows'>
                    {/* useRef 전이라서 잘 안될 수도 있음 */}
                    <i className='xi-arrow-left' onClick={() => SLIDE.current.slickPrev()}></i>
                    <i className='xi-arrow-right' onClick={() => SLIDE.current.slickNext()}></i>
                </div>
                <ul className='dots'>
                    {
                        SOLUTION.map((dot, idx) => <li
                            key={dot.id}
                            onClick={() => SLIDE.current.slickGoTo(idx)}
                            className={slideNum === idx ? 'on' : ''}
                        >
                            {dot.id}
                        </li>)
                    }
                </ul>
            </div>
        </section>
    )
}

export default Solution;