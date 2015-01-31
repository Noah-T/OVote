Parse.initialize("lh70BfND6DfblGhM5tmj4n1pgQvmYrz7Q1Xuh604", "cfZJ9v9yyST2T0dQgGGdOFVDethazDQTo6R3MAOP");

var TestObject = Parse.Object.extend("MyTestObject");
var testObject = new TestObject();
testObject.set("mykey", "somecoolvalue" );
testObject.save(null, 
	{success: function(){
		alert("It worked!");
	},
	error:function(){
		console.log("oops...");
	}
});
