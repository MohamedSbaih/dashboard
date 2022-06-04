<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <!-- MAterial icons-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet">

    <!-- Stylesheet-->
    <link rel="stylesheet" href="style.css">

</head>
<body>
    <div class="container">

        <aside>

        <div class="top">
            <div class="logo">
                <img src="images/logo.png" alt="logo" />
                <h2>EGA <span class="danger">TOR</span></h2>

            </div>
            <div class="close" id="close-btn">
                <span class="material-icons-sharp">close</span>
            </div>
        </div>

        <div class="sidebar">
            <a href="#"> 
                <span class="material-icons-sharp">grid_view</span>
                <h3>Dashboard</h3>
            </a>

            <a href="#" class="active"> 
                <span class="material-icons-sharp">person_outline</span>
                <h3>Customers</h3>
            </a>

            <a href="#"> 
                <span class="material-icons-sharp">receipt_long</span>
                <h3>Orders</h3>
            </a>

            <a href="#"> 
                <span class="material-icons-sharp">insights</span>
                <h3>Analytics</h3>
            </a>

            <a href="#"> 
                <span class="material-icons-sharp">mail_outline</span>
                <h3>Messages</h3>
                <span class="message-count">26</span>
            </a>

            <a href="#"> 
                <span class="material-icons-sharp">inventory</span>
                <h3>Products</h3>
            </a>

            <a href="#"> 
                <span class="material-icons-sharp">report_gmailerrorred</span>
                <h3>Reports</h3>
            </a>

            <a href="#"> 
                <span class="material-icons-sharp">settings</span>
                <h3>Setting</h3>
            </a>

            <a href="#"> 
                <span class="material-icons-sharp">add</span>
                <h3>Add Product</h3>
            </a>

            <a href="#"> 
                <span class="material-icons-sharp">logout</span>
                <h3>Logout</h3>
            </a>
        </div>
       
        </aside>
         <!-------- END ASIDE SECTION --------->

         <main>
             <h1>Dashboard</h1>

             <div class="date">
                 <input type="date">
             </div>

             <div class="insights">
                <div class="sales">
                    <span class="material-icons-sharp">analytics</span>
                        <div class="middle">
                            <div class="left">
                                <h3>Total Sales</h3>
                                <h1>$25,024</h1>
                            </div>
                            <div class="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div class="number">
                                    <p>81%</p>
                                </div>
                            </div>
                        </div>
                        <small class="text-muted">Last 24 Hours</small>
                 </div>
                 <!-- END OF SALES -->
                 <div class="expenses">
                    <span class="material-icons-sharp">bar_chart</span>
                        <div class="middle">
                            <div class="left">
                                <h3>Total Expenses</h3>
                                <h1>$14,160</h1>
                            </div>
                            <div class="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div class="number">
                                    <p>62%</p>
                                </div>
                            </div>
                        </div>
                        <small class="text-muted">Last 24 Hours</small>
                 </div>
                 <!-- END OF EXPENSES -->
                 <div class="income">
                    <span class="material-icons-sharp">stacked_line_chart</span>
                        <div class="middle">
                            <div class="left">
                                <h3>Total Income</h3>
                                <h1>$10,864</h1>
                            </div>
                            <div class="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div class="number">
                                    <p>44%</p>
                                </div>
                            </div>
                        </div>
                        <small class="text-muted">Last 24 Hours</small>
                 </div>
                 <!-- END OF INCOME -->
             </div>
             <!-- END OF INSIGHTS  -->
             <div class="recent-orders">
                 <h2>Recent Order</h2>
                 <table>
                     <thead>
                         <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th></th>
                         </tr>
                     </thead>
                     <tbody>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>85631</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                         </tr>

                         <tr>
                            <td>Foldable Mini Drone</td>
                            <td>85631</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                         </tr>

                         <tr>
                            <td>Foldable Mini Drone</td>
                            <td>85631</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                         </tr>

                         <tr>
                            <td>Foldable Mini Drone</td>
                            <td>85631</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                         </tr>

                         <tr>
                            <td>Foldable Mini Drone</td>
                            <td>85631</td>
                            <td>Due</td>
                            <td class="warning">Pending</td>
                            <td class="primary">Details</td>
                         </tr>
                     </tbody>
                 </table>
                 <a href="#">Show all</a>
             </div>
         </main>
         <!-- END OF MAIN -->

         <div class="right">
             <div class="top">
                 <button id="menu-btn">
                    <span class="material-icons-sharp">menu </span>
                </button>
                    <div class="theme-toggler">
                        <span class="material-icons-sharp active">light_mode</span>
                        <span class="material-icons-sharp">dark_mode</span>
                    </div>
                    <div class="profile">
                        <div class="info">
                            <p>Hey, <b>Mohamed</b></p>
                            <small class="text-muted">Admin</small>
                        </div>
                        <div class="profile-photo">
                            <img src="./images/profile-1.jpg" alt="img1">
                        </div>
                    </div>
             </div>
             <!-- END OF TOP -->
             <div class="recent-updates">
                 <h2>Recent Updates</h2>
                 <div class="updates">
                    <div class="update">
                        <div class="profile-photo">
                            <img src="./images/profile-2.jpg" alt="img2">
                        </div>
                        <div class="message">
                            <p><b>Mike</b> received his order of Night lion tech GPS drone.</p>
                            <small class="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>

                    <div class="update">
                        <div class="profile-photo">
                            <img src="./images/profile-3.jpg" alt="img3">
                        </div>
                        <div class="message">
                            <p><b>Enas</b> received her order of Night lion tech GPS drone.</p>
                            <small class="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div class="update">
                        <div class="profile-photo">
                            <img src="./images/profile-4.jpg" alt="img4">
                        </div>
                        <div class="message">
                            <p><b>Zainab</b> received her order of Night lion tech GPS drone.</p>
                            <small class="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>

                 </div>
             </div>
             <!-- END OF RECENT UPDATES -->
             <div class="sales-analytics">
                 <h2>Sales Analytics</h2>
                 <div class="item online">
                    <div class="icon">
                   <span class="material-icons-sharp active">shopping_cart</span>
                </div>
                <div class="right">
                    <div class="info">
                        <h3>ONLINE ORDERS</h3>
                        <small class="text-muted">last 24 Hours</small>
                    </div>
                    <h5 class="success">+39%</h5>
                    <h3>3849</h3>
                </div>
               </div>

               <div class="item offline">
                <div class="icon">
               <span class="material-icons-sharp active">local_mall</span>
            </div>
            <div class="right">
                <div class="info">
                    <h3>OFFLINE ORDERS</h3>
                    <small class="text-muted">last 24 Hours</small>
                </div>
                <h5 class="danger">-17%</h5>
                <h3>1100</h3>
            </div>
           </div>

           <div class="item customers">
            <div class="icon">
           <span class="material-icons-sharp active">person</span>
        </div>
        <div class="right">
            <div class="info">
                <h3>NEW CUSTOMERS</h3>
                <small class="text-muted">last 24 Hours</small>
            </div>
            <h5 class="success">+25%</h5>
            <h3>849</h3>
        </div>
       </div>

       <div class="item add-product">
            <div>
                <span class="material-icons-sharp active">add</span>
                <h3>Add Product</h3>
            </div>
       </div>

             </div>
         </div>

    </div>
    
    <script src="./index.js"></script>
</body>
</html>