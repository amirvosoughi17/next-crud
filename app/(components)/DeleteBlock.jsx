'use client'
import { useRouter } from 'next/navigation';
import {AiOutlineClose} from 'react-icons/ai'
import { Router } from 'react-router-dom';

const DeleteBlock = ({id}) => {
  const router = useRouter()
  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}` , {
      method : "DELETE"
    });
    if(res.ok) {
      router.refresh()
    }
  }
  return (
    <AiOutlineClose  onClick={deleteTicket}/>
  )
}

export default DeleteBlock