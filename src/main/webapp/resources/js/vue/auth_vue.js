var auth_vue = auth_vue || {}
auth_vue = {
	join_head:()=>{
		return '<head>'+
        '    <meta charset="utf-8">'+
        '    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
        '    <meta name="description" content="">'+
        '    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
        '    <meta name="generator" content="Jekyll v3.8.5">'+
        '    <title>Checkout example · Bootstrap</title>'+
        '    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/checkout/">'+
        '    <!-- Bootstrap core CSS -->'+
        '<link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
        '    <style>'+
        '      .bd-placeholder-img {'+
        '        font-size: 1.125rem;'+
        '        text-anchor: middle;'+
        '        -webkit-user-select: none;'+
        '        -moz-user-select: none;'+
        '        -ms-user-select: none;'+
        '        user-select: none;'+
        '      }'+
        '      @media (min-width: 768px) {'+
        '        .bd-placeholder-img-lg {'+
        '          font-size: 3.5rem;'+
        '        }'+
        '      }'+
        '    </style>'+
        '    <!-- Custom styles for this template -->'+
        '    <link href="https://getbootstrap.com/docs/4.3/examples/checkout/form-validation.css" rel="stylesheet">'+
        '  </head>'
	},
	join_body: ()=>{
		return '<div class="container" >'+
        '  <div class="py-5 text-center">'+
        '    <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">'+
        '    <h2>Checkout form</h2>'+
        '  </div>'+
        '  <div class="row">'+
        '    <div class="col-md-4 order-md-2 mb-4">'+
        '      <h4 class="d-flex justify-content-between align-items-center mb-3">'+
        '        <span class="text-muted">Your cart</span>'+
        '        <span class="badge badge-secondary badge-pill">3</span>'+
        '      </h4>'+
        '      <ul class="list-group mb-3">'+
        '        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
        '          <div>'+
        '            <h6 class="my-0">Product name</h6>'+
        '            <small class="text-muted">Brief description</small>'+
        '          </div>'+
        '          <span class="text-muted">$12</span>'+
        '        </li>'+
        '        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
        '          <div>'+
        '            <h6 class="my-0">Second product</h6>'+
        '            <small class="text-muted">Brief description</small>'+
        '          </div>'+
        '          <span class="text-muted">$8</span>'+
        '        </li>'+
        '        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
        '          <div>'+
        '            <h6 class="my-0">Third item</h6>'+
        '            <small class="text-muted">Brief description</small>'+
        '          </div>'+
        '          <span class="text-muted">$5</span>'+
        '        </li>'+
        '        <li class="list-group-item d-flex justify-content-between bg-light">'+
        '          <div class="text-success">'+
        '            <h6 class="my-0">Promo code</h6>'+
        '            <small>EXAMPLECODE</small>'+
        '          </div>'+
        '          <span class="text-success">-$5</span>'+
        '        </li>'+
        '        <li class="list-group-item d-flex justify-content-between">'+
        '          <span>Total (USD)</span>'+
        '          <strong>$20</strong>'+
        '        </li>'+
        '      </ul>'+
        '      <form class="card p-2">'+
        '        <div class="input-group">'+
        '          <input type="text" class="form-control" placeholder="Promo code">'+
        '          <div class="input-group-append">'+
        '            <button type="submit" class="btn btn-secondary">Redeem</button>'+
        '          </div>'+
        '        </div>'+
        '      </form>'+
        '    </div>'+
        '    <div class="col-md-8 order-md-1">'+
        '      <h4 class="mb-3">Billing address</h4>'+
        '      <form class="needs-validation" novalidate="">'+
        '        <div class="row">'+
        '          <div class="col-md-6 mb-3">'+
        '            <label for="userid">USERID</label>'+
        '            <input type="text" class="form-control" id="userid" placeholder="" value="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Valid first name is required.'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-6 mb-3">'+
        '            <label for="password">PASSWORD</label>'+
        '            <input type="text" class="form-control" id="password" placeholder="" value="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Valid last name is required.'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="mb-3">'+
        '          <label for="pname">PNAME</label>'+
        '          <div class="input-group">'+
        '            <div class="input-group-prepend">'+
        '              <span class="input-group-text"></span>'+
        '            </div>'+
        '            <input type="text" id="pname" 	class="form-control" placeholder="pname" required="">'+
        '            <div class="invalid-feedback" style="width: 100%;">'+
        '              Your username is required.'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="mb-3">'+
        '          <label for="ssn">SSN <span class="text-muted">(Optional)</span></label>'+
        '          <input type="SSN" class="form-control" id="ssn" placeholder="">'+
        '          <div class="invalid-feedback">'+
        '            Please enter a valid email address for shipping updates.'+
        '          </div>'+
        '        </div>'+
        '        <div class="mb-3">'+
        '          <label for="creditcard">creditcard</label>'+
        '          <input type="text" class="form-control" id="creditcard" placeholder="creditcard" required="">'+
        '          <div class="invalid-feedback">'+
        '            Please enter your shipping address.'+
        '          </div>'+
        '        </div>'+
        '        <div class="mb-3">'+
        '          <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>'+
        '          <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">'+
        '        </div>'+
        '        <div class="row">'+
        '          <div class="col-md-5 mb-3">'+
        '            <label for="country">Country</label>'+
        '            <select class="custom-select d-block w-100" id="country" required="">'+
        '              <option value="">Choose...</option>'+
        '              <option>United States</option>'+
        '            </select>'+
        '            <div class="invalid-feedback">'+
        '              Please select a valid country.'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-4 mb-3">'+
        '            <label for="state">State</label>'+
        '            <select class="custom-select d-block w-100" id="state" required="">'+
        '              <option value="">Choose...</option>'+
        '              <option>California</option>'+
        '            </select>'+
        '            <div class="invalid-feedback">'+
        '              Please provide a valid state.'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-3 mb-3">'+
        '            <label for="zip">Zip</label>'+
        '            <input type="text" class="form-control" id="zip" placeholder="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Zip code required.'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <hr class="mb-4">'+
        '        <div class="custom-control custom-checkbox">'+
        '          <input type="checkbox" class="custom-control-input" id="same-address">'+
        '          <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>'+
        '        </div>'+
        '        <div class="custom-control custom-checkbox">'+
        '          <input type="checkbox" class="custom-control-input" id="save-info">'+
        '          <label class="custom-control-label" for="save-info">Save this information for next time</label>'+
        '        </div>'+
        '        <hr class="mb-4">'+
        '        <h4 class="mb-3">Payment</h4>'+
        '       <div class="d-block my-3">'+
        '          <div class="custom-control custom-radio">'+
        '            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">'+
        '            <label class="custom-control-label" for="credit">Credit card</label>'+
        '          </div>'+
        '          <div class="custom-control custom-radio">'+
        '            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">'+
        '            <label class="custom-control-label" for="debit">Debit card</label>'+
        '          </div>'+
        '          <div class="custom-control custom-radio">'+
        '            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">'+
        '            <label class="custom-control-label" for="paypal">PayPal</label>'+
        '          </div>'+
        '        </div>'+
        '        <div class="row">'+
        '          <div class="col-md-6 mb-3">'+
        '            <label for="cc-name">Name on card</label>'+
        '            <input type="text" class="form-control" id="cc-name" placeholder="" required="">'+
        '            <small class="text-muted">Full name as displayed on card</small>'+
        '            <div class="invalid-feedback">'+
        '              Name on card is required'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-6 mb-3">'+
        '            <label for="cc-number">Credit card number</label>'+
        '            <input type="text" class="form-control" id="cc-number" placeholder="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Credit card number is required'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="row">'+
        '          <div class="col-md-3 mb-3">'+
        '            <label for="cc-expiration">Expiration</label>'+
        '            <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Expiration date required'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-3 mb-3">'+
        '            <label for="cc-cvv">CVV</label>'+
        '            <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Security code required'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <hr class="mb-4">'+
        '        <div id="btn_join"></div>'+
        '      </form>'+
        '    </div>'+
        '  </div>'+
        '  <footer class="my-5 pt-5 text-muted text-center text-small">'+
        '    <p class="mb-1">© 2017-2019 Company Name</p>'+
        '    <ul class="list-inline">'+
        '      <li class="list-inline-item"><a href="#">Privacy</a></li>'+
        '      <li class="list-inline-item"><a href="#">Terms</a></li>'+
        '      <li class="list-inline-item"><a href="#">Support</a></li>'+
        '    </ul>'+
        '  </footer>'+
        '</div>'
	},
	login_head: x=>{
		return '<head>'+
		'  <meta charset="UTF-8" />'+
		'  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'  <title>Document</title>'+
		'  '+
		'  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
		'   <meta charset="utf-8">'+
		'    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'    <meta name="description" content="">'+
		'    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
		'    <meta name="generator" content="Jekyll v3.8.5">'+
		'    <title>Signin Template · Bootstrap</title>'+
		'    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/sign-in/">'+
		'    <style>'+
		'      .bd-placeholder-img {'+
		'        font-size: 1.125rem;'+
		'        text-anchor: middle;'+
		'        -webkit-user-select: none;'+
		'        -moz-user-select: none;'+
		'        -ms-user-select: none;'+
		'        user-select: none;'+
		'      }'+
		'      @media (min-width: 768px) {'+
		'        .bd-placeholder-img-lg {'+
		'          font-size: 3.5rem;'+
		'        }'+
		'      }'+
		'    </style>'+
		'    <!-- Custom styles for this template -->'+
		'    <link href="'+x.css+'/signin.css" rel="stylesheet">'+
		'</head>'
	},
	login_body: x=>{
		return '<form id="form_join" class="form-signin">'+
		'  <img class="mb-4" src="'+x.img+'/bootstrap-solid.svg" alt="" width="72" height="72">'+
		'  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>'+
		'  <label for="inputEmail" class="sr-only">Email address</label>'+
		'  <input type="text" id="cid" class="form-control" placeholder="Email address" required="" autofocus="">'+
		'  <label for="inputPassword" class="sr-only">Password</label>'+
		'  <input type="password" id="pwd" class="form-control" placeholder="Password" required="">'+
		'  <div class="checkbox mb-3">'+
		'    <label>'+
		'      <a id="a_go_join" href="#">GO JOIN</a>'+
		'    </label>'+
		'  </div>'+
		'  <div id="btn_login"></div>'+
		'  <p class="mt-5 mb-3 text-muted">© 2017-2019</p>'+
		'</form>'+
		'</body>'
	},
	mypage_head : x=>{
		return '<head>'+
		'    <meta charset="utf-8">'+
		'    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'    <meta name="description" content="">'+
		'    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
		'    <meta name="generator" content="Jekyll v3.8.5">'+
		'    <title> Hanrabong Mypage</title>'+
		'    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/jumbotron/">'+
		'    <!-- Bootstrap core CSS -->'+
		'<link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
		'    <style>'+
		'      .bd-placeholder-img {'+
		'        font-size: 1.125rem;'+
		'        text-anchor: middle;'+
		'        -webkit-user-select: none;'+
		'        -moz-user-select: none;'+
		'        -ms-user-select: none;'+
		'        user-select: none;'+
		'      }'+
		'      @media (min-width: 768px) {'+
		'        .bd-placeholder-img-lg {'+
		'          font-size: 3.5rem;'+
		'        }'+
		'      }'+
		'    </style>'+
		'    <!-- Custom styles for this template -->'+
		'    <link href="'+x.css+'/jumbotron.css" rel="stylesheet">'+
		'  </head>'
	},
	mypage_body : x=>{
		return '<body>'+
		'    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">'+
		'  <a class="navbar-brand" href="#">Navbar</a>'+
		  '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">'+
		'    <span class="navbar-toggler-icon"></span>'+
		'  </button>'+
		'  <div class="collapse navbar-collapse" id="navbarsExampleDefault">'+
		'    <ul class="navbar-nav mr-auto">'+
		'      <li class="nav-item active">'+
		'        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>'+
		'      </li>'+
		'      <li class="nav-item">'+
		'        <a class="nav-link" href="#">Link</a>'+
		'      </li>'+
		'      <li class="nav-item">'+
		'        <a class="nav-link disabled" href="#">Disabled</a>'+
		'      </li>'+
		'      <li class="nav-item dropdown">'+
		        '<a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>'+
		'        <div class="dropdown-menu" aria-labelledby="dropdown01">'+
		'          <a class="dropdown-item" href="#">Action</a>'+
		'          <a class="dropdown-item" href="#">Another action</a>'+
		'          <a class="dropdown-item" href="#">Something else here</a>'+
		'        </div>'+
		'      </li>'+
		'    </ul>'+
		'    <form class="form-inline my-2 my-lg-0">'+
		      '<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">'+
		'      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>'+
		'    </form>'+
		'  </div>'+
		'</nav>'+
		'<main role="main">'+
		'  <!-- Main jumbotron for a primary marketing message or call to action -->'+
		'  <div class="jumbotron">'+
		'    <div class="container">'+
		'      <h1 class="display-3">Hello, '+x.resultData.cname+'!</h1>'+
		      '<p><h3>여기가  마이페이지 입니다. We are Diamonds Taking Shape</h3></p>'+
		'      <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>'+
		'    </div>'+
		'  </div>'+
		'  <div class="container">'+
		'    <!-- Example row of columns -->'+
		'    <div class="row">'+
		'      <div class="col-md-4">'+
		'        <h2>Heading</h2>'+
		        '<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>'+
		'        <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>'+
		'      </div>'+
		'      <div class="col-md-4">'+
		'        <h2>Heading</h2>'+
		        '<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>'+
		'        <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>'+
		'      </div>'+
		'      <div class="col-md-4">'+
		'        <h2>Heading</h2>'+
		        '<p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>'+
		'        <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>'+
		'      </div>'+
		'    </div>'+
		'    <hr>'+
		'  </div> <!-- /container -->'+
		'</main>'+
		'<footer class="container">'+
		'  <p>© Company 2017-2019</p>'+
		'</footer>'+
		'<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>'+
//		      '<script>window.jQuery || document.write('+'<script src="https://getbootstrap.com/docs/4.3/assets/js/vendor/jquery-slim.min.js">'+'</script>)</script>'+
		      '<script src="https://getbootstrap.com/docs/4.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>'+
		'</body>'

	},
	brd_head:x=>{
		    				return '<head>'+
		    				'    <meta charset="utf-8">'+
		    				'    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		    				'    <meta name="description" content="">'+
		    				'    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
		    				'    <meta name="generator" content="Jekyll v3.8.5">'+
		    				'    <title>Offcanvas template · Bootstrap</title>'+
		    				'    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/offcanvas/">'+
		    				'    <!-- Bootstrap core CSS -->'+
		    				'<link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
		    				'    <style>'+
		    				'      .bd-placeholder-img {'+
		    				'        font-size: 1.125rem;'+
		    				'        text-anchor: middle;'+
		    				'        -webkit-user-select: none;'+
		    				'        -moz-user-select: none;'+
		    				'        -ms-user-select: none;'+
		    				'        user-select: none;'+
		    				'      }'+
		    				'      @media (min-width: 768px) {'+
		    				'        .bd-placeholder-img-lg {'+
		    				'          font-size: 3.5rem;'+
		    				'        }'+
		    				'      }'+
		    				'    </style>'+
		    				'    <!-- Custom styles for this template -->'+
		    				'    <link href="https://getbootstrap.com/docs/4.3/examples/offcanvas/offcanvas.css" rel="stylesheet">'+
		    				'  </head>'
		    			},
		    			brd_body: x=>{
		    				return  '<body class="bg-light">'+
		    				'    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">'+
		    				'  <a class="navbar-brand mr-auto mr-lg-0" href="#">Offcanvas navbar</a>'+
		    				'  <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">'+
		    				'    <span class="navbar-toggler-icon"></span>'+
		    				'  </button>'+
		    				'  <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">'+
		    				'    <ul class="navbar-nav mr-auto">'+
		    				'      <li class="nav-item active">'+
		    				'        <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>'+
		    				'      </li>'+
		    				'      <li class="nav-item">'+
		    				'        <a class="nav-link" href="#">Notifications</a>'+
		    				'      </li>'+
		    				'      <li class="nav-item">'+
		    				'        <a class="nav-link" href="#">Profile</a>'+
		    				'      </li>'+
		    				'      <li class="nav-item">'+
		    				'        <a class="nav-link" href="#">Switch account</a>'+
		    				'      </li>'+
		    				'      <li class="nav-item dropdown">'+
		    				        '<a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>'+
		    				'        <div class="dropdown-menu" aria-labelledby="dropdown01">'+
		    				'          <a class="dropdown-item" href="#">Action</a>'+
		    				'          <a class="dropdown-item" href="#">Another action</a>'+
		    				'          <a class="dropdown-item" href="#">Something else here</a>'+
		    				'        </div>'+
		    				'      </li>'+
		    				'    </ul>'+
		    				'    <form class="form-inline my-2 my-lg-0">'+
		    				      '<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">'+
		    				'      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>'+
		    				'    </form>'+
		    				'  </div>'+
		    				'</nav>'+
		    				'<div class="nav-scroller bg-white shadow-sm">'+
		    				'  <nav class="nav nav-underline">'+
		    				'    <a class="nav-link active" href="#">Dashboard</a>'+
		    				'    <a class="nav-link" href="#">'+
		    				'      Friends'+
		    				'      <span class="badge badge-pill bg-light align-text-bottom">27</span>'+
		    				'    </a>'+
		    				'    <a class="nav-link" href="#">Explore</a>'+
		    				'    <a class="nav-link" href="#">Suggestions</a>'+
		    				'    <a class="nav-link" href="#">Link</a>'+
		    				'    <a class="nav-link" href="#">Link</a>'+
		    				'    <a class="nav-link" href="#">Link</a>'+
		    				'    <a class="nav-link" href="#">Link</a>'+
		    				'    <a class="nav-link" href="#">Link</a>'+
		    				'  </nav>'+
		    				'</div>'+
		    				'<main role="main" class="container">'+
		    				  '<div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">'+
		    				    '<img class="mr-3" src="/docs/4.3/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">'+
		    				'    <div class="lh-100">'+
		    				'      <h6 class="mb-0 text-white lh-100">Bootstrap</h6>'+
		    				'      <small>Since 2011</small>'+
		    				'    </div>'+
		    				'  </div>'+
		    				'  <div class="my-3 p-3 bg-white rounded shadow-sm">'+
		    				'    <h6 class="border-bottom border-gray pb-2 mb-0">Recent updates</h6>'+
		    				'    <div class="media text-muted pt-3">'+
		    				      '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
		    				'      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		    				'        <strong class="d-block text-gray-dark">@username</strong>'+
		    				        'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
		    				'      </p>'+
		    				'    </div>'+
		    				'    <div class="media text-muted pt-3">'+
		    				      '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>'+
		    				'      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		    				'        <strong class="d-block text-gray-dark">@username</strong>'+
		    				        'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
		    				'      </p>'+
		    				'    </div>'+
		    				'    <div class="media text-muted pt-3">'+
		    				      '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>'+
		    				'      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		    				'        <strong class="d-block text-gray-dark">@username</strong>'+
		    				        'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
		    				'      </p>'+
		    				'    </div>'+
		    				'    <small class="d-block text-right mt-3">'+
		    				'      <a href="#">All updates</a>'+
		    				'    </small>'+
		    				'  </div>'+
		    				'  <div class="my-3 p-3 bg-white rounded shadow-sm">'+
		    				'    <h6 class="border-bottom border-gray pb-2 mb-0">Suggestions</h6>'+
		    				'    <div class="media text-muted pt-3">'+
		    				      '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
		    				'      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		    				'        <div class="d-flex justify-content-between align-items-center w-100">'+
		    				'          <strong class="text-gray-dark">Full Name</strong>'+
		    				'          <a href="#">Follow</a>'+
		    				'        </div>'+
		    				'        <span class="d-block">@username</span>'+
		    				'      </div>'+
		    				'    </div>'+
		    				'    <div class="media text-muted pt-3">'+
		    				      '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
		    				'      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		    				'        <div class="d-flex justify-content-between align-items-center w-100">'+
		    				'          <strong class="text-gray-dark">Full Name</strong>'+
		    				'          <a href="#">Follow</a>'+
		    				'        </div>'+
		    				'        <span class="d-block">@username</span>'+
		    				'      </div>'+
		    				'    </div>'+
		    				'    <div class="media text-muted pt-3">'+
		    				      '<svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>'+
		    				'      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		    				'        <div class="d-flex justify-content-between align-items-center w-100">'+
		    				'          <strong class="text-gray-dark">Full Name</strong>'+
		    				'          <a href="#">Follow</a>'+
		    				'        </div>'+
		    				'        <span class="d-block">@username</span>'+
		    				'      </div>'+
		    				'    </div>'+
		    				'    <small class="d-block text-right mt-3">'+
		    				'      <a href="#">All suggestions</a>'+
		    				'    </small>'+
		    				'  </div>'+
		    				'</main>'+
		    				'<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>'+
		    				      '<script src="/docs/4.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>'+
		    				'        <script src="offcanvas.js"></script>'+
		    				'</body>'
	}	
	
};