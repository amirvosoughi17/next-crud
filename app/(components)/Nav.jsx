import  Link  from "next/link"
import {AiOutlineHome} from 'react-icons/ai'
import {BsTicketPerforatedFill} from 'react-icons/bs'

const Nav = () => {
  return <nav className="flex justify-between bg-nav p-4">
    <div className="flex items-center space-x-4 ">
      <Link href="/">
       <AiOutlineHome />
      </Link>
      <Link href="/TicketPage/new">
       <BsTicketPerforatedFill />
      </Link>
    </div>
    <div>
      <p className="text-default-text">Fake@gmail.com</p>
    </div>
  </nav>
}

export default Nav