import React from 'react'
import './Assignment.css'

const Assignment = () => {
    return (
        <div>
            <div className="container">
                <h1>Homework Assignment</h1>

                <form id="homework-form">
                    <div className="input-group">
                        <label for="homework-title">Homework Title:</label>
                        <input type="text" id="homework-title" required placeholder="Enter homework title" />
                    </div>

                    <div className="input-group">
                        <label for="homework-description">Description:</label>
                        <textarea id="homework-description" rows="4" required placeholder="Enter homework description"></textarea>
                    </div>

                    <div className="input-group">
                        <label for="due-date">Due Date:</label>
                        <input type="date" id="due-date" required />
                    </div>

                    <div className="input-group">
                        <label for="student-name">Assign to (Class):</label>
                        <input type="text" id="student-name" required placeholder="Enter class name" />
                    </div>

                    <div className="submit-btn">
                        <button type="submit">Assign Homework</button>
                    </div>
                </form>

                <div id="homework-list">
                    <h2>Assigned Homework</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Homework Title</th>
                                <th>Description</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody id="homework-table-body">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Assignment
