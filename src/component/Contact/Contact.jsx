
export default function Contact() {
  return (
    <>

    <div className="pt-10 pb-16 ">
        <div className="container ">
        <h1 className="text-5xl  text-mycolor font-bold flex flex-col text-center">CONTACT SECTION

<span>------*------</span>
</h1>
<form 
    className="ml-16 "
>
<div className="mb-4">
  <input
    type="text" 
   className="w-full px-4 py-2 border border-x-white border-t-white rounded-lg focus:outline-none focus:white"
    placeholder="Enter your name"
  />
</div>

<div className="mb-4">
  <input 
    type="number"
    className="w-full px-4 py-2 border border-x-white border-t-white rounded-lg focus:outline-none focus:white"
    placeholder="Enter your age"
  />
</div>

<div className="mb-4">

  <input
    type="email"
    className="w-full px-4 py-2 border border-x-white border-t-white rounded-lg focus:outline-none focus:white"
    placeholder="Enter your email"/>
</div>

<div className="mb-4">
  <input
    type="password"
    className="w-full px-4 py-2 border border-x-white border-t-white rounded-lg focus:outline-none focus:white"
    placeholder="Enter your password"/>
</div>

<button
  type="submit"
  className=" bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:white">
  send Message
</button>
</form>
        </div>
    </div>
    </>
  )
}
