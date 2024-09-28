import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    let body = await request.json()
    const uri = process.env.MONGO_URI
    const client = new MongoClient(uri)
    try {
        const TeacherDataBase = client.db('Teacher')
        const TeacherList = TeacherDataBase.collection('TeacherList')
        const FindUser = await TeacherList.findOne({ username: body.username })
        if (FindUser) {
            if (body.password == FindUser.password) {
                return NextResponse.json({ "success": true, "msg": "Login SuccessFully" })
            } else {
                return NextResponse.json({ "success": true, "msg": "Please Check Your Password" })
            }
        } else {
            return NextResponse.json({ "success": true, "msg": "No User available" })
        }
    }
    finally {
        await client.close()
    }
}