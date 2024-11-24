import headI from "../../assets/avataaars.svg"

export default function Header() {
return (
    <>
    
    <div className="bg-headColor flex items-center flex-col py-8">
        <img src={headI} alt="" className="w-1/6 pt-5"/>
        <div className="details py-6">
        <h1 className="text-5xl py-4 text-white font-bold">Start Framework</h1>
        <span className="text-sm ps-14 text-white">Graphic Artist - Web Designer - Illustrator</span>
        </div>
    </div>
    </>
)
}
