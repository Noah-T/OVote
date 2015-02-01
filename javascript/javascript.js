Parse.initialize("lh70BfND6DfblGhM5tmj4n1pgQvmYrz7Q1Xuh604", "cfZJ9v9yyST2T0dQgGGdOFVDethazDQTo6R3MAOP");


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
	console.log("this is being called legislator");

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
			'<div class="groupItem">' +
				'<img src="images/warren.jpg" class="groupImage">' +
				'<h5 class="groupName">Sen. Elizabeth Warren</h5>' +
				'<img class="addIcon" src="images/add-icon.png">' +
			'</div>' +
			'<div class="groupItem">' + 
				'<img src="images/markey.jpg" class="groupImage">' +
				'<h5 class="groupName">Sen. Ed Markey</h5>' +
				'<img class="addIcon" src="images/add-icon.png">' +
			'</div>' +
			'<div class="groupItem">' +
				'<img src="images/maher.jpg" class="groupImage">' +
				'<h5 class="groupName">Mayor Maher</h5>' +
				'<img class="addIcon" src="images/add-icon.png">' +
			'</div>' +
		'</div>');
		$(".addIcon").click(function(){
			$(this).replaceWith("<img src='images/checkmark.png' class='checkmarkIcon'>");
			$(".checkmarkIcon").click(function(){
				console.log("oh hey, we hear it");
				$(".mainContentWrapper").html("<img src='images/back-arrow.png' class='backArrow'>" +
					'<div class="questionWrapper">' +
			'<h1>Senator Warren wants to know: </h1>' +
			'<p>Would you rather have a bridge or an awesome new playground (that will be much more fun than a bridge)</p>' +
			'<button class="questionChoice">Vote A</button>' +
			'<button class="questionChoice">Vote B</button>' +
			'<button class="questionChoice">Vote C</button>' +
		'</div>' +
		'<div class="commentSectionWrapper">' +
			'<div class="questionComment">' +
			'<h5 class="nameOfPoster">Joe the Plumber</h5>' +
			'<p class="commentFromPoster">Plumbing is important to me Plumbing is important to me Plumbing is important to me Plumbing is important to me Plumbing is important to me Plumbing is important to me</p>' +
		'</div>' +
		'<div class="questionComment">' +
			'<h5 class="nameOfPoster">Barack Obama</h5>' +
			'<p class="commentFromPoster">I don\'t like plumbing</p>'+
		'</div>' +
		
		'<div class="socialMediaWrapper">' +
			'<img class="questionImage" src="images/fb.png">' +
			'<img class="questionImage" src="images/twitter.png">' +	
		'</div>' +
			
		"</div>");
			$(".backArrow").click(function(){
				loadGroupsView();
			});
			});
		});
	}
	loadGroupsView();
	
} 

