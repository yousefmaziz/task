
import img1 from "../../assets/poert1.png"
import img2 from "../../assets/port2.png"
import img3 from "../../assets/port3.png"

export default function Portfolio() {
  return (
    <>
    
    <div className="portfolio text-center">
    <div className="container">
    <h1 className="text-5xl py-4 text-mycolor font-bold">portfolio component</h1>
    <span>-----------------*------------------</span>
    <div className="imgs grid grid-cols-3 gap-9 py-5">
    <img src={img1} alt="" className="rounded-md"/>
    <img src={img2} alt="" className="rounded-md"/>
    <img src={img3} alt="" className="rounded-md"/>
    <img src={img1} alt="" className="rounded-md"/>
    <img src={img2} alt="" className="rounded-md"/>
    <img src={img3} alt="" className="rounded-md"/>
    </div>
    </div>
    </div>
    </>
  )
}
