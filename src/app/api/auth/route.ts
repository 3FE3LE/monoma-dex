import { NextResponse } from "next/server";

export function GET(){
  return NextResponse.json({message: "Hola y ya... .__."})
}