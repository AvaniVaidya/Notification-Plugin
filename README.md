# Notification Plugin for Frontend

This project is a **plug-and-play jQuery/JavaScript notification plugin** that integrates seamlessly with a backend notification system using **Server-Sent Events (SSE)**. The plugin manages notifications with an interactive notification bell, real-time updates, and modal dialogs to display notification details.

---

## Features

1. **Notification Bell Icon**:

   - Displays a bell icon with a real-time notification count.

2. **Real-Time Notifications**:

   - Fetches notifications from a backend endpoint using Server-Sent Events (SSE).

3. **Notification List**:

   - Displays notifications in a side panel with options to view or remove individual notifications.

4. **Modal Dialog**:

   - Opens a modal dialog with detailed notification content when clicked.

5. **Customizable**:
   - Easy to extend and modify for additional functionality or styling.

---

## Installation

### Prerequisites

1. jQuery library
2. Bootstrap CSS/JS (for modal dialogs)
3. A backend service providing notifications via SSE

### Steps

1. Include the following in your HTML file:

   ```html
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
   <link
     rel="stylesheet"
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
   />
   ```

2. Add the notification plugin JavaScript file to your project:

   ```html
   <script src="notification-plugin.js"></script>
   ```

3. Add the required HTML structure for the notification panel:

   ```html
   <div class="notificationButton"></div>
   <div id="mySidePanel" class="sidePanel"></div>
   ```

4. Initialize the plugin in your application.

5. The ASP.NET Web Application, Notification Manager, Backend code is available at the following repository - [https://github.com/AvaniVaidya/Notification-Manager.git]
   To integrate the application with your project, clone the repository using the command below and follow the installation steps outlined in its README.md file.

---

## Usage

### Backend Integration

- The plugin connects to a backend SSE endpoint. Replace the URL in the code with your backend notification API:
  ```javascript
  var source = new EventSource("https://localhost:44332/notification");
  ```

### Adding Notifications

- The plugin automatically updates the notification list when new data is received. Notifications are expected in the following format:
  ```json
  {
    "summary": "Notification Title",
    "description": "Detailed description of the notification"
  }
  ```

### Interactions

- **Notification Count**: Updates dynamically based on the number of notifications.
- **Remove Notifications**: Users can remove individual notifications from the list.
- **View Notifications**: Clicking a notification opens a modal dialog with its details.

---

## Contributions

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Make your changes and commit them (git commit -am 'Add some feature').
- Push to the branch (git push origin feature/your-feature).
- Create a new Pull Request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
