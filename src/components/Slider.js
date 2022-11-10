import React, {useState,useEffect} from 'react'

const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(1);

    const handleSliderBtns = function(e){
        const slideNum = e.target.dataset['slide']
        // setActiveSlide(()=> slideNum);
        setActiveSlide(+slideNum)
    }
    console.log(activeSlide%4);
    
    useEffect(() => {
        const interval = setInterval(() => setActiveSlide((prev)=> {
            prev++;
            if(prev >4)
                return 1;
            return prev;
        }), 3000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="slider">
            <div className="slider-images">
      
                <img className="slider-img translate-slide" src="../assets/images/badging1.jpg" alt=""
                    style={{ transform: `translateX(${-100 * ((activeSlide-1) % 4)}%)` }} />

                <img className="slider-img translate-slide" src="../assets/images/badging2.jpg" alt="" 
                    style={{ transform: `translateX(${-100 * ((activeSlide-1) % 4)}%)` }} />

                <img className="slider-img translate-slide" src="../assets/images/badging3.jpg" alt=""
                    style={{ transform: `translateX(${-100 * ((activeSlide-1) % 4)}%)` }} />
                
                <img className="slider-img translate-slide" src="../assets/images/badging4.jpg" alt=""
                    style={{ transform: `translateX(${-100 * ((activeSlide-1) % 4)}%)` }} />

         
            </div>
            <div className="slider-btns" onClick={(e)=>handleSliderBtns(e)}>
                <button className={`dot-btn ${activeSlide===1 ? 'btn-active':''}`} 
                data-slide="1"></button>
                
                <button className={`dot-btn ${activeSlide===2 ? 'btn-active':''}`} data-slide="2"></button>
                
                <button className={`dot-btn ${activeSlide===3 ? 'btn-active':''}`} data-slide="3"></button>
                
                <button className={`dot-btn ${activeSlide===4 ? 'btn-active':''}`} data-slide="4"></button>

            </div>
        </div>
    )
}

export default Slider