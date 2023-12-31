import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log('POST RUN')
  try {
    const body = await req.json();
    const ticketData = body.formData;
    const newTicket = await Ticket.create(ticketData)
    return NextResponse.json({ message: "Ticket Created", newTicket }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

