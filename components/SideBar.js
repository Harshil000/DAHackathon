'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import './SideBar.css'
import { usePathname } from 'next/navigation'

const SideBar = () => {

    const path = usePathname();
    const [page, setpage] = useState("DashBoard")

    return (
        <div>
            <div className="sidebar">
                <h2>EduGuru</h2>
                <button className="sidebar-btn" id="attendance-btn" >Track Attendance </button>
                <button className="sidebar-btn" id="assign-homework-btn">Assign Homework</button>
                <button className="sidebar-btn" id="announcements-btn">Announcements</button>
                <button className="sidebar-btn" id="student-profiles-btn">Student Profiles</button>
                <div className="customization-area">
                    <button className="sidebar-btn" id="theme-toggle">Light Mode</button>
                </div>
            </div>

        </div >
    )
}

export default SideBar
