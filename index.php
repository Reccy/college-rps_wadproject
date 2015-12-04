<!DOCTYPE html>
<html>
    <head>
      <title>Rock, Paper, Scissors!</title>
        
      <!-- Bootstrap -->
      <link href="client/css/bootstrap.min.css" rel="stylesheet">
      <link href="client/css/customstyle.css" rel="stylesheet">
      
      <!-- favicon -->
      <link rel="icon" href="favicon.ico" type="image/x-icon"> 
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"> 
    </head>
    <body>
      
      <!-- Header -->
      <div id="header" class="menu-bar navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div id="title-container" class="navbar-header">
            <h1 id="title" class="text">Rock, Paper, Scissors!</h1>
          </div>
        </div><!-- /.container-fluid -->
      </div>
      <div id="top-menu" class="menu-bar navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div id="title-container" class="navbar-header">
            <!-- Username text -->
            <p id="usernameText" class="navbar-left">Let's play a game,<br/><span class="usernameReplace">USERNAME_HERE!</span></p>
            <!-- Logged in buttons -->
            <button id="leaderboardsBtn" class="menu-button b-orange" onclick="leaderboardsBtnClicked();">Leaderboard</button>
            <button id="playBtn" class="menu-button b-green" onclick="playBtnClicked();">Play Game</button>
            <button id="logoutBtn" class="menu-button b-red" onclick="logoutBtnClicked();">Logout</button>
            <!-- Logged out buttons -->
            <button id="loginBtn" class="menu-button b-green" onclick="loginBtnClicked();">Login</button>
            <button id="registerBtn" class="menu-button b-red" onclick="registerBtnClicked();">Register</button>
            <!-- Statistics display -->
            <p id="stats" class="navbar-right">Total Wins: <span class="winsReplace">0</span><br/>Total Losses: <span class="lossesReplace">0</span><br/>Total Games: <span class="gamesReplace">0</span></p>
          </div>
        </div><!-- /.container-fluid -->
      </div>
      
      <!-- Body -->
      <div id="loading"></div>
      <div id="about-us" class="modal" role="dialog">
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Game designed by:</h4>
            </div>
            <div class="modal-body">
              <p>Aaron Meaney<br>Alex Corcoran<br>Mark Hayden<br><br>Having problems? Need help?<br>Too bad.<br>This is a college project.<br>:-)</p>
              <button id="rssBtn" onclick="displayXML();" data-dismiss="modal">
                <img src="/client/img/rss.png" class="img-responsive"/>
              </button>
            </div>
            <div class="modal-footer">
              <button type="button" class="menu-button b-orange" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div id="body">
        <p id="intro-text" >Hi there!<br><br>Want to play some Rock, Paper, Scissors?<br>Login or Register to access the game!<br><br>Have fun! :-)<br><br>(P.S. It's free!)</p>
      </div>
      
      <!-- Footer -->
      <button id="help-icon" data-toggle="modal" data-target="#about-us" data-backdrop="static"><img id="help-icon-img" src="client/img/helpicon.png"></img></button>
      
      <!-- Scripts -->
      <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
      <!-- AJAX script for one-page functionality -->
      <script src="client/js/ajax.js"></script>
      <!-- Include all compiled plugins (below), or include individual files as needed -->
      <script src="client/js/bootstrap.min.js"></script>
    </body>
</html>