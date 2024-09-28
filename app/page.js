'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  const LoginTeacher = async () => {
    if (document.getElementById("Tusername").value != "" && document.getElementById("TPassword").value != "") {
      let login = await fetch("/api/LoginTeacher", {
        method: "POST",
        body: JSON.stringify({ username: document.getElementById("Tusername").value, password: document.getElementById("TPassword").value }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      let response = await login.json()
      if (response.msg == "Login SuccessFully") {
        router.push('/TeacherDashboard')
      } else if (response.msg == "Please Check Your Password") {
        alert("Please Check Your Password")
      } else {
        alert("No Such User exists")
      }
    } else {
      alert("Please Fill all Fields")
    }
  }

  const LoginStudent = async () => {
    if (document.getElementById("SName").value != "" && document.getElementById("SRN").value != "" && document.getElementById("STusername") != "" && document.getElementById("Branch") != "") {
      let login = await fetch("/api/LoginTeacher", {
        method: "POST",
        body: JSON.stringify({ username: document.getElementById("Tusername").value, password: document.getElementById("TPassword").value }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      let response = await login.json()
      console.log(response)
    }
  }
  return (
    <main className="w-full h-screen flex flex-col items-center justify-evenly">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="font-bold text-4xl text-purple-700">EduGuru</div>
        <div className="text-purple-500 font-semibold text-xl">Manage ClassRoom wisely</div>
        <div className="bg-purple-400 px-4 py-2 rounded-full text-white cursiveFont text-lg">Track Attendence &#9679; Assign Homework &#9679; Announce &#9679; Maintain Student Profile</div>
      </div>
      <div className="w-[70%] flex items-center justify-evenly">
        <div className="h-full w-[45%] border-2 border-purple-400 px-4 py-4 rounded-lg">
          <div className="text-center">Login Teacher</div>
          <div action="/LoginTeacher" method="POST">
            <div className="my-4">
              <label htmlFor="Tusername">UserName :- </label>
              <input type="text" id="Tusername" placeholder="username" className="px-2 py-1 border-2 border-purple-600 rounded-lg w-[75%]" />
            </div>
            <div className="my-2">
              <label htmlFor="TPassword">Password :- </label>
              <input type="password" id="TPassword" placeholder="password" className="px-2 py-1 border-2 border-purple-600 rounded-lg ml-2 w-[75%]" />
            </div>
            <div className="flex justify-center my-4">
              <button className="rounded-full bg-gray-400 px-4 py-1 hover:bg-purple-400 hover:text-white hover:border-none transition-all" onClick={LoginTeacher}>Login</button>
            </div>
            <Link href={'/RegisterTeacher'} className="text-purple-500 cursor-pointer hover:underline font-semibold">Register Teacher</Link>
          </div>
        </div>
        <div className="h-full w-[45%] border-2 border-purple-400 px-4 py-4 rounded-lg">
          <div className="text-center">Login Student</div>
          <div action="/LoginStudent" method="POST">
            <div className="my-4 flex items-center justify-evenly">
              <div>
                <label htmlFor="SName">StudentName :- </label>
                <input type="text" id="SName" placeholder="StudentName" className="px-2 py-1 border-2 border-purple-600 rounded-lg" />
              </div>
              <div>
                <label htmlFor="SRN">RollNo :- </label>
                <input type="text" id="SRN" placeholder="RollNo" className="px-2 py-1 border-2 border-purple-600 rounded-lg" />
              </div>
            </div>
            <div className="my-4">
              <label htmlFor="STusername">TeacherUserName :- </label>
              <input type="text" id="STusername" placeholder="TeacherUserName" className="px-2 py-1 border-2 border-purple-600 rounded-lg w-[65%]" />
            </div>
            <div className="my-4">
              <label htmlFor="Branch">Brach :- </label>
              <input type="text" id="Branch" placeholder="Branch" className="px-2 py-1 border-2 border-purple-600 rounded-lg w-[85%]" />
            </div>
            <div className="flex justify-center my-4">
              <button className="rounded-full bg-gray-400 px-4 py-1 hover:bg-purple-400 hover:text-white hover:border-none transition-all" onClick={LoginStudent}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
