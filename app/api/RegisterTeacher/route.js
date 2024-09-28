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
            return NextResponse.json({"success" : true , "msg" : "User Already Exists"})
        } else {
            await TeacherList.insertOne(body)
            const Teacher = client.db(body.username)
            const StudentList = Teacher.collection("StudentList")
            await StudentList.insertOne({"demo" : "demo"})
            return NextResponse.json({ "success": true, "msg": "New Teacher Created" })
        }
    }
    finally {
        await client.close()
    }
}