<?php
  // Message Vars
  $msg = '';
  $msgClass = '';
  //check for submit
  if(filter_has_var(INPUT_POST, 'submit')){
    //get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // check required fields
    if(!empty($email) && !empty($name) && !empty($message)){
      //passed
      //Email Validation
      if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
        //failed
        $msg = "Please Enter a Valid Email";
        $msgClass = 'alert-danger';
      }else {
        //passed
        //recipient email
        $toEmail = 'scholarships@dacascholarships.com';
        $subject = 'Contact Request From '.$name;
        $body = '<h2>Contact Request</h2>
                <h4>Name</h4><p>'.$name.'</p>
                <h4>Email</h4><p>'.$email.'</p>
                <h4>Message</h4><p>'.$message.'</p>
        ';
        //Email Headers
        $headers = "MIME-Version: 1.0" ."\r\n";
        $headers .="Content-Type:text/html;charset=UTF-8" . "\r\n";

        //additional Headers
        $headers .= "From: " .$name. "<".$email.">". "\r\n";

        if(mail($toEmail, $subject, $body, $headers)){
            //Email Sent
            $msg = "Your email has been sent";
            $msgClass = 'alert-success';
            $_POST = array();
        }else{
          //Failed
          $msg = "Your email was not sent";
          $msgClass = 'alert-danger';
        }
      }
    }else {
      //failed
      $msg = "Please fill in all fields";
      $msgClass = 'alert-danger';
    }

  }
 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DACA scholarships | Contribute</title>
    <!-- Facebooks open graoh meta tags -->
    <meta property="og:image" content="http://dacascholarships.com/img/heroimg.jpg"/>
    <meta property="og:image:width" content="200">
    <meta property="og:image:height" content="500">
    <meta property="og:title" content="Daca Scholarships"/>
    <meta property="og:url" content="http://dacascholarships.com/contribute.php"/>
    <meta property="og:description" content="Scholarships available to DACA students!"/>
    <meta property="og:type" content="website" />
    <!-- Twitter cards -->
    <meta name="twitter:site" content="@dacascholarship">
    <meta name="twitter:creator" content="@dacarscholarship">
    <meta name="twitter:title" content="Daca Scholarships">
    <meta name="twitter:description" content="Scholarships available to DACA students!">
    <meta name="twitter:image" content="http://dacascholarships.com/img/heroimg.jpg">
    <link rel="stylesheet" href="https://bootswatch.com/cosmo/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" media="(max-width: 680px)" href="css/mobile.css" />
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Google analytics code -->
    <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-104062178-1', 'auto');
          ga('send', 'pageview');

    </script>
  </head>
  <body>
    <!-- start of naviagtion -->
    <div class="navigation">
      <div class="menu">
        <div class="logo align-left">
          <a href="index.html"><i class="fa fa-graduation-cap" aria-hidden="true"></i></a>
        </div>
        <div class="menu-items align-right">
          <span><a href="index.html">Home</a></span>
          <span><a href="dashboard.html">Dashboard</a></span>
          <span><a href="mission.html">Mission</a></span>
          <span><a href="contribute.php">Contribute</a></span>
        </div>
        <!-- mobile nav -->
        <div class="menu-icon align-right" id="icon-display">
          <span id="menu-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>
        </div>
      </div>

      <!-- mobile nav -->
      <div id="mobile-nav">
        <ul>
          <a href="index.html"><li>Home</li></a>
          <a href="dashboard.html"><li>Dashboard</li></a>
          <a href="mission.html"><li>Mission</li></a>
          <a href="contribute.php"><li>Contribute</li></a>
        </ul>
      </div>
    </div>
    <div class="contact-hero">

    </div>

    <div class="container form-container">
      <h3><b>Want to contribute to DACAscholarships? Please help by providing any scholarships we may have missed. We appreciate your contribution to the movement!</b></h3>
      <br>
      <?php
        if($msg != ''): ?>
          <div class="alert <?php echo $msgClass; ?>"><?php echo $msg; ?></div>
       <?php endif; ?>
      <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" class="form-control" value="<?php echo isset($_POST['name']) ? $name : ''; ?>">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" class="form-control" value="<?php echo isset($_POST['email']) ? $email : ''; ?>">
        </div>
        <div class="form-group">
          <label for="message">Scholarship(s) Url</label>
          <textarea name="message" id="message" class="form-control"><?php echo isset($_POST['message']) ? $message : ''; ?></textarea>
        </div>
        <br>
        <button type="submit" name="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>

    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/api.js"></script>
<script type="text/javascript" src="js/mobile.js"></script>
  </body>
</html>
