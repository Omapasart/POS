import React from 'react';

function ManagerDashboard() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Manager Dashboard</title>
        <link rel="stylesheet" href="manager_style.css" />
        <script src="https://fontawesome.com/icons/bell?f=classic&s=solid"></script>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li><img src="/images/degreeslogo.png" width="80" alt="Logo" /></li>
              <li><a href="manager_dashboard.html">Home</a></li>
              <li><a href="manager_menu.html">Menu</a></li>
              <li><a href="manager_addcashier.html">Add Cashier</a></li>
              <li className="dropdown">
                <a href="manager_addcashier.html">Reports</a>
                <ul className="dropdown-content">
                  <li><a href="manager_inventory.html">Inventory</a></li>
                  <li><a href="mananger_sales.html">Sales</a></li>
                </ul>
              </li>
              <form>
                <input type="text" placeholder="Search" />
                <button type="submit">Search</button>
              </form>
              <div className="notification-bar">
                <i className="fa-solid fa-bell"></i>
                {/* Notification icons or messages can be added here */}
              </div>
              <button className="logout">Logout</button>
            </ul>
          </nav>
        </header>

        {/* Add the rest of your content here */}

      </body>
    </html>
  );
}

export default ManagerDashboard;
