
export default function Footer() {
  return (<>

    <div className="bg-mycolor py-16">
        <div className="container grid grid-cols-3 gap-5 text-white text-center">
        <ul className="">
            <h3 className=" text-2xl font-bold">LOCATION</h3>
            <p className="pb-2 text-sm">2215 John Daniel Drive</p>
            <span className=" text-sm">Clark, MO 65243</span>
        </ul>
        
        <ul >
            <h3 className=" text-2xl font-bold">AROUND THE WEB</h3>
<ul className="flex gap-3 ml-24">

    <li><i className="fa-brands fa-facebook"></i></li>
    <li><i className="fa-brands fa-instgram"></i></li>
    <li><i className="fa-brands fa-twwiter"></i></li>
    <li><i className="fa-brands fa-linkedin"></i></li>

</ul>
        </ul>
        <ul>
            <h3 className=" text-2xl font-bold">ABOUT FREELANCER</h3>
            <p className="text-sm">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </ul>
        </div>
    </div>
    <div className="bg-color py-4 text-center text-white text-sm">
        Copyright © Your Website 2021
    </div>
    </>
  )
}
