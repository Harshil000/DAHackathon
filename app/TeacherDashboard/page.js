'use client'
import React, { useState } from 'react'
import './TeacherDashboard.css'
import Assignment from '@/components/Assignment.js'
import Announcement from '@/components/Announcement.js'
import Attendence from '@/components/Attendence.js'

const page = () => {

    const [page, setpage] = useState("DashBoard")

    const LodePage = (e) => {
        setpage(e.target.getAttribute("data-page"))
    }

    return (
        <main className='flex items-center h-screen w-full'>
            <div className="sidebar">
                <h2>EduGuru</h2>
                <button className="sidebar-btn" id="attendance-btn" data-page="DashBoard" onClick={(e) => { LodePage(e) }}>DashBoard</button>
                <button className="sidebar-btn" id="attendance-btn" data-page="Attendence" onClick={(e) => { LodePage(e) }}>Track Attendance </button>
                <button className="sidebar-btn" id="assign-homework-btn" data-page="Assignment" onClick={(e) => { LodePage(e) }}>Assign Homework</button>
                <button className="sidebar-btn" id="announcements-btn" data-page="Announcement" onClick={(e) => { LodePage(e) }}>Announcements</button>
                <button className="sidebar-btn" id="student-profiles-btn" data-page="StudentProfiles" onClick={(e) => { LodePage(e) }}>Student Profiles</button>
                <div className="customization-area">
                    <button className="sidebar-btn" id="theme-toggle">Light Mode</button>
                </div>
            </div>
            <div className="mainContent flex items-center justify-center overflow-y-scroll">
                {page == "Assignment" && <Assignment/>}
                {page == "Announcement" && <Announcement/>}
                {page == "Attendence" && <Attendence/>}
            </div>
        </main>
    )
}

export default page
