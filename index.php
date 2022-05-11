<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="css/bootstrap.css" rel="stylesheet" id="bootstrap-css">
    <link href="css/all.css" rel="stylesheet" type="text/css" />
	<link href="css/login.css" rel="stylesheet" type="text/css" />
	<link href="css/alert.css" rel="stylesheet" type="text/css" />
	<link rel="shortcut icon" href="images/icon.jpg" />
	<link rel="icon" href="images/icon.jpg" />

    <title>Welcome to Flora</title>
</head>
<body>
<div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="images/logo.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div id="loginform">
					<div class="d-flex justify-content-center form_container">
						<form>
							<div id="errors" class="mt-4"></div>
							<div class="input-group mb-2">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fas fa-user"></i></span>
								</div>
								<input type="text" id="username" name="" class="form-control input_user" value="" placeholder="username" autocomplete="false">
							</div>
							<div class="input-group mb-2">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fas fa-key"></i></span>
								</div>
								<input type="password" id="password" name="" class="form-control input_pass" value="" placeholder="password" autocomplete="false">
							</div>
							<div class="form-group">
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="customControlInline">
									<label class="custom-control-label" for="customControlInline">Remember me</label>
								</div>
							</div>
								<div class="d-flex justify-content-center mt-3 login_container">
						<button type="button" name="button" class="btn login_btn" id="loginbutton">Login</button>
					</div>
						</form>
					</div>
			
					<div class="mt-4">
						<div class="d-flex justify-content-center links">
							<a href="#" id="resetpasswordlink">Forgot your password?</a>
						</div>
					</div>
				</div>

				<div id="resetpassword">
					<div class="d-flex justify-content-center form_container">
						<form>
							<p class="lead white-heading mt-1 mb-3"> Reset Password Request ...</p>
							<div id="passwordreseterror"></div>
							<div class="input-group mb-2">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fas fa-user"></i></span>
								</div>
								<input type="text" id="resetpasswordusername" name="resetpasswordusername" class="form-control input_user" value="" placeholder="username">
							</div>
							<div class="d-flex justify-content-center mt-3 login_container">
								<button type="button" name="button" class="btn login_btn" id="resetpassword">Reset Password</button>
							</div>
						</form>
					</div>
			
					<div class="mt-4">
						<div class="d-flex justify-content-center links">
							<a href="#" id="loginformlink">Back to login?</a>
						</div>
					</div>
				</div>

				<div id="changepasswordform">
					<div class="d-flex justify-content-center form_container">
						<form>
							<div id="passwordchangeerror" class="mt-4"></div>
							<div class="input-group mb-2">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fas fa-user"></i></span>
								</div>
								<input type="text" id="changepasswordusername" name="changepasswordusername" class="form-control input_user" value="" placeholder="Username">
							</div>

							<div class="input-group mb-2">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fas fa-key"></i></span>
								</div>
								<input type="password" id="oldpassword" name="oldpassword" class="form-control input_user" value="" placeholder="Old password">
							</div>

							<div class="input-group mb-2">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fas fa-key"></i></span>
								</div>
								<input type="password" id="newpassword" name="newpassword" class="form-control input_user" value="" placeholder="New password">
							</div>

							<div class="input-group mb-2">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fas fa-key"></i></span>
								</div>
								<input type="password" id="confirmnewpassword" name="confirmnewpassword" class="form-control input_user" value="" placeholder="Confirm New password">
							</div>

							<div class="d-flex justify-content-center mt-2 login_container">
								<button type="button" name="button" class="btn login_btn" id="changepassword">Change Password</button>
							</div>
						</form>
					</div>
			
					<!-- <div class="mt-2">
						<div class="d-flex justify-content-center links">
							<a href="#" id="loginformlink2">Back to login?</a>
						</div>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</body>
<script src="js/jquery-2.2.4.js"></script>
<script src="js/alert.js"></script>
<script src="js/index.js"></script>
<script src="js/main.js"></script>
</html>