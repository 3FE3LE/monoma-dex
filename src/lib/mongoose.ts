import mongoose from 'mongoose'

const { MONGODB_URI, MONGODB_NAME } = process.env

if (!MONGODB_URI ) {
  throw new Error('MONGODB_URI must be defined')
}
if (!MONGODB_NAME ) {
  throw new Error('MONGODB_URI must be defined')
}

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI, {
      dbName: MONGODB_NAME,
    })
    if (connection.readyState == 1) {
      console.log('MongoDB connected')
      return Promise.resolve(true)
    }
  } catch (error) {
    console.log(error)
    return Promise.reject(false)
  }
}
