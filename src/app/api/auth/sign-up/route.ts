import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/mongoose'
import User from '@/models/user'

export async function POST(request: Request) {
  
  const { fullName, email, password } = await request.json()
  
  if (!password || password.length < 6)
    return NextResponse.json(
      {
        message: 'Password must be at least six characters',
      },
      {
        status: 400,
      },
    )
  try {
    await connectDB()
    const userFound = await User.findOne({ email })
    if (userFound)
      return NextResponse.json(
        {
          message: 'Email already exist',
        },
        { status: 400 },
      )
    const hashedPass = await bcrypt.hash(password, 12)
    const user = new User({
      email,
      fullName,
      password: hashedPass,
    })
    const newUser = await user.save()
    return NextResponse.json({
      _id: newUser.id,
      name: newUser.fullName,
      email: newUser.email,
    })
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        },
      )
    }
  }
}
