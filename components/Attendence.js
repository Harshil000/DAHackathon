import React from 'react'
import './Attendence.css'

const Attendence = () => {
    return (
        <div class="container">
            <h1>Classroom Attendance Tracker</h1>

            <form id="attendance-form">
                <table>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Roll Number</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>01</td>
                            <td>
                                <input type="radio" name="student1" value="Present" id="present1" required /> Present
                                <input type="radio" name="student1" value="Absent" id="absent1" /> Absent
                            </td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>02</td>
                            <td>
                                <input type="radio" name="student2" value="Present" id="present2" required /> Present
                                <input type="radio" name="student2" value="Absent" id="absent2" /> Absent
                            </td>
                        </tr>
                        <tr>
                            <td>Alex Johnson</td>
                            <td>03</td>
                            <td>
                                <input type="radio" name="student3" value="Present" id="present3" required /> Present
                                <input type="radio" name="student3" value="Absent" id="absent3" /> Absent
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="submit-btn">
                    <button type="submit">Submit Attendance</button>
                </div>
            </form>
        </div>
    )
}

export default Attendence