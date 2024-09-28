import React from 'react'
import './Announce.css'

const Announcement = () => {
    return (
        <div class="container">
            <h1>Make an Announcement</h1>
            <form id="announcement-form">
                <div class="input-group">
                    <label for="announcement-title">Announcement Title:</label>
                    <input type="text" id="announcement-title" required placeholder="Enter announcement title" />
                </div>

                <div class="input-group">
                    <label for="announcement-description">Description:</label>
                    <textarea id="announcement-description" rows="4" required placeholder="Enter announcement description"></textarea>
                </div>

                <div class="submit-btn">
                    <button type="submit">Make Announcement</button>
                </div>
            </form>

            <div id="announcement-list">
                <h2>Recent Announcements</h2>
                <ul id="announcement-items">
                </ul>
            </div>
        </div>
    )
}

export default Announcement
