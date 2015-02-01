Parse.initialize("lh70BfND6DfblGhM5tmj4n1pgQvmYrz7Q1Xuh604", "cfZJ9v9yyST2T0dQgGGdOFVDethazDQTo6R3MAOP");

//log in

$("#submitLogin").click(function(event){
	event.preventDefault();
	var username = $("#loginUsername").val();
	var password = $("#loginPassword").val();
	Parse.User.logIn(username, password, {
  success: function(user) {
    // Do stuff after successful login.
    if(!user.attributes.isALegislator){
    	loadConstituentView();
    } else {
    	loadLegislatorView();
    }
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
    debugger;
    alert(error);
  }
});
});

//show sign up

$("#signupButton").click(function(){
	console.log("hey");
	$(".mainContentWrapper").html('<h1 id="formTitle">Sign Up</h1>' +
		'<form>' +
			'<input type="text" placeholder="Name" id="nameField">' +
			'<input type="text" placeholder="Username" id="usernameField">' +
			'<input type="password" placeholder="Password" id="passwordField">' +
			'<input type="text" placeholder="Email" id="emailField">' +
			
			'<label for="age">Registration Status</label>' +
			'<select name="age" id="ageField">' +
				'<option value="under18">Under 18</option>' +
				'<option value="18-34">18-34</option>' +
				'<option value="35-55">35-55</option>' +
				'<option value="55+">35-55</option>' +
			'</select>' +

			'<input type="text" placeholder="Zipcode" id="zipcodeField">' +
			'<select>' +
				'<option value="male">Male</option>' +
				'<option value="female">Female</option>' +
				'<option value="other">Other</option>' +
			'</select>' +
			'<input type="text" placeholder="Ethnicity" id="ethnicityField">' +
			'<label for="party">Party Affiliation</label>' +
			'<select name="party" id="partyField">' +
				'<option value="democrat">Democrat</option>' +
				'<option value="republican">Republican</option>' +
				'<option value="other">Other</option>' +
			'</select>' +
			'<label for="registrationStatus">Registration Status</label>' +
			'<select name="registrationStatus" id="registrationStatusField">' +
				'<option value="registered">Registered</option>' +
				'<option value="notRegistered">Not Registered</option>' +
				'<option value="other">Other</option>' +
			'</select>' +
			'<button type="submit" id="signup">Sign Up</button>	' +
		'</form>');

	//sign up a constituent
	$("#signup").click(function(event){
		event.preventDefault();

			//user signup happens here
		var user = new Parse.User();
		user.set("nameField", $("#nameField").val());
		user.set("username", $("#usernameField").val());
		user.set("password", $("#passwordField").val());
		user.set("email", $("#emailField").val());
		user.set("age", $("#ageField").val());
		user.set("zipcode", $("#zipcodeField").val());
		user.set("ethnicity", $("#ethnicityField").val());
		user.set("party", $("#partyField").val());
		user.set("registrationStatus", $("#registrationStatus").val());
		user.set("isALegislator", false);
		user.signUp(null, {
		  success: function(user) {
		    // Hooray! Let them use the app now.
		    clearSignupScreen();
		    loadConstituentView();
		  },
		  error: function(user, error) {
		    // Show the error message somewhere and let the user try again.
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
	});


});


//sign up a legislator 
$("#legislatorSignup").click(function(event){
	event.preventDefault();

		//user signup happens here
	var user = new Parse.User();
	user.set("nameField", $("#nameField").val());
	user.set("username", $("#usernameField").val());
	user.set("password", $("#passwordField").val());
	user.set("email", $("#emailField").val());
	user.set("isALegislator", true);
	user.signUp(null, {
	  success: function(user) {
	    // Hooray! Let them use the app now.
	    clearSignupScreen();
	    loadLegislatorView();
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
});

function clearSignupScreen(){
	$("#formTitle").remove();
	$("form").remove();
}

function loadLegislatorView(){

	$(".mainContentWrapper").html('<h1 id="formTitle">Create Question</h1>' +
	'<form class="createQuestionForm">' +
		'<textarea placeholder="Type your question">' +
		'</textarea>' +
		'<button>Use Demographic Filter</button>' +
		'<button type="submit" id="askQuestion">Ask Question</button>' +	
		'<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'+
		'<h1>Display below content when "Use Demographic Filter" is clicked</h1>'+
		'<label for="age">Registration Status</label>' +
		'<select name="age">'+
			'<option value="allAges">All Ages</option>'+
			'<option value="under18">Under 18</option>'+
			'<option value="18-34">18-34</option>'+
			'<option value="35-55">35-55</option>'+
			'<option value="55+">35-55</option>' +
		'</select>'+

		'<input type="text" placeholder="Zipcode">'+
		'<select>'+
			'<option value="allGenders">All Genders</option>'+
			'<option value="male">Male</option>'+
			'<option value="female">Female</option>'+ 
			'<option value="other">Other</option>'+
		'</select>'+
		'<input type="text" placeholder="Ethnicity">'+
		'<label for="party">Party Affiliation</label>'+
		'<select name="party">'+
			'<option value="allParties">All Parties</option>'+
			'<option value="democrat">Democrat</option>'+
			'<option value="republican">Republican</option>'+
			'<option value="other">Other</option>'+
		'</select>'+
		'<label for="registrationStatus">Registration Status</label>'+
		'<select name="registrationStatus">'+
		'<option value="allRegistrationStatuses">All Registration Statuses</option>'+
			'<option value="registered">Registered</option>'+
			'<option value="notRegistered">Not Registered</option>'+
			'<option value="other">Other</option>'+
		'</select>'+
		
	"</form>");

}

function loadConstituentView(){
	function loadGroupsView(){
		$(".mainContentWrapper").html('<h1 id="groupListTitle">Find Groups</h1>' +
		'<input text="text" placeholder="Search" id="groupSearch">' +
		'<div class="groupSwitch">' +
			'<div class="groupOption groupSelected"><h4>Local</h4></div>' +
			'<div class="groupOption"><h4>Top</h4></div>' +
		'</div>' +
		'<div class="groupList">' +
			'<div class="groupItem" data-groupname="elizabeth_warren">' +
				'<img src="images/warren.jpg" class="groupImage">' +
				'<h5 class="groupName">Sen. Elizabeth Warren</h5>' +
				'<img class="addIcon" src="images/add-icon.png">' +
			'</div>' +
			'<div class="groupItem" data-groupname="edward_markey">' + 
				'<img src="images/markey.jpg" class="groupImage" >' +
				'<h5 class="groupName">Sen. Edward Markey</h5>' +
				'<img class="addIcon" src="images/add-icon.png">' +
			'</div>' +
			'<div class="groupItem" data-groupname="david_maher">' +
				'<img src="images/maher.jpg" class="groupImage" >' +
				'<h5 class="groupName">Mayor David Maher</h5>' +
				'<img class="addIcon" src="images/add-icon.png">' +
			'</div>' +
			'<div class="groupItem" data-groupname="denise_simmons">' +
				'<img src="images/simmons.jpg" class="groupImage">' +
				'<h5 class="groupName">Councilor Denise Simmons</h5>' +
				'<img class="addIcon" src="images/add-icon.png">' +
			'</div>' +

		'</div>');
		$(".addIcon").click(function(){
			var groupName = $(this).parent().data("groupname");
			var currentUser = Parse.User.current();

			console.log(groupName);
			$(this).replaceWith("<img src='images/checkmark.png' class='checkmarkIcon'>");
			$(".checkmarkIcon").click(function(){

				$(".mainContentWrapper").html("<img src='images/back-arrow.png' class='backArrow'>" +
					'<div class="questionWrapper">' +
			'<h1>Senator Warren wants to know: </h1>' +
			'<p>Should I vote to approve the construction of the Keystone XL pipeline?</p>' +
			'<button class="questionChoice">Yes</button>' +
			'<button class="questionChoice">No</button>' +	
		'</div>' +
		'<div class="commentSectionWrapper">' +
			'<div class="questionComment">' +
			'<h5 class="nameOfPoster">JamesBrill</h5>' +
			'<p class="commentFromPoster">The Keystone XL pipeline is an important source of oil for the United States. Canada produces &#34ethical oil.&#34 We don&#39t have to fight wars to get it like the oil from Iraq or Libya, and we don&#39t have to buy it from oppressive monarchical regimes like Saudi Arabia. If we want an secure, ethical, source of oil we should build the Keystone XL.</p>' +
		'</div>' +
		'<div class="questionComment">' +
			'<h5 class="nameOfPoster">Mill244</h5>' +
			'<p class="commentFromPoster">Don&#39t build it! Global warming is the problem. Building this pipeline will make the problem worse. The Keystone XL will make it easier for Americans to get cheap oil and this will encourage more people to use more gas - making the problem worse. Also, the source of the oil is the Alberta oil sands - the most unsustainable oil extraction process on earth. If you care about the environment you will vote no.</p>'+
		'</div>' +
		
		'<div class="socialMediaWrapper">' +
			'<img class="questionImage" src="images/fb.png">' +
			'<img class="questionImage" src="images/twitter.png">' +	
		'</div>' +
			
		"</div>");
			$(".backArrow").click(function(){
				loadGroupsView();
			});
			$(".questionChoice").click(function(){
				$(".questionWrapper").remove();
				$(".commentSectionWrapper").before('<h1 id="responseHeader">Voting Results</h1>' +
		'<img src="images/d3-wheel.jpg" id="responseVisualization">');
			});
			});
		});
		//add switch toggling 
	}
	loadGroupsView();	
} 



