    $(document).foundation();
    //
    // var team = prompt("So, What's your favourite team?")
    // if (team != null) {
    //   console.log(team + " - This is a poor team")
    // }


    // EXERCISE 2

    // var hour, minute;
    // hour = 13;
    // minute = 50;
    //
    // var remHour = 24 - hour;
    // var remMinute = (60 - minute) + (remHour * 60);
    // var remSec = remMinute * 60;
    // console.log(remSec);


    // EXERCISE 3

    // var name = "Thoshh";
    // var age = 24;
    // var sex = "male";
    // var favFood = "Fruits";
    // var occupation = "student";
    // var school = "Moringa school";
    // var physicalLocation = "Galana Plaza";
    // // var bestFriend
    // // var birthday
    // // var language
    // console.log("Hi, this is " + name + ". I am a " + age + " year old " + sex +
    //   ". I am a " + occupation + " at " + school + " which is at " +
    //   physicalLocation + ". I like " + favFood + " as my favourite Food.");


    // EXERCISE 3 PROMPT
    //
    // var name = prompt("What is your name?");
    // var age = prompt("How old are you?");
    // var sex = prompt("Sex?");
    // var favFood = prompt("What is your favourite food?");
    // var occupation = prompt("What's your occupation?");
    // var school = prompt("Which school do you go to?");
    // var physicalLocation = prompt("Where is the school?");
    // // // var bestFriend
    // // // var birthday
    // // // var language
    // console.log("Hi, this is " + name + ". I am a " + age + " year old " + sex +
    //   ". I am a " + occupation + " at " + school + " which is at " +
    //   physicalLocation + ". I like " + favFood + " as my favourite Food.");



    // alert(
    //   "This site is extremely awesome and should thus be enjoyed with caution."
    // )
    // var name = prompt("What's your name?")
    // if (name != null) {
    //   document.write("welcome " + name);
    // }



    // ******************* GREETER *******************

    // var visitorName = prompt("Name Please....");
    // var welcomeMessage = ("karibu sana bwana " + visitorName);
    // document.querySelector('#greeting').textContent = welcomeMessage;


    // ******************* SHUFFLE *******************
    // var sourceText = document.querySelector('#source').textContent;
    // var destinationText = document.querySelector('#destination').textContent;
    // document.querySelector('#destination').textContent = sourceText;
    // document.querySelector('#source').textContent = destinationText;


    // ******************* MAD LIBS *******************
    var noun = prompt("What is your name");
    document.querySelector('#noun').textContent = noun;

    var adj = prompt("What do you like?");
    document.querySelector('#adj').textContent = adj;

    var verb = prompt("When they have a.....?");
    document.querySelector('#verb').textContent = verb;
