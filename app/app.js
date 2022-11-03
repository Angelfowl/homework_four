function initSubmitListeners() {
    $("#subBtn").click(function(e){
        e.preventDefault();
        let firstName = $("#fName").val();
        let lastName = $("#lName").val();
        let age = $("#age").val();
        let race = $("#race").val();
        let characterClass = $("#characterClass").val();
        let level = $("#level").val();
        let characterBackground = $("#characterBackground").val();
        let desc = $("#desc").val();
        let playerName = $("#playerName").val();
        let playerNumber = $("#playerNumber").val();
        console.log("inputs " + firstName + " " + lastName + " "
        + age + " " + race + " "
        + characterClass + " " + level + " "
        + characterBackground + " " + desc + " " + playerName + " " + playerNumber)
    });

    $("#editBtn").click(function(e){
        e.preventDefault();
        let userObj = {
            fName: "Jayne",
            lName: "Amos",
            age: "25",
            race: "half-elf",
            characterClass: "alchemist",
            level: "1",
            characterBackground: "Inventor",
            desc: "Has a mininature clockwork owl",
            playerName: "Roger Hill",
            playerNumber: "555-5555",
        };

        // console.log(userObj);

        $("#fName").val(userObj.fName);
        $("#lName").val(userObj.lName);
        $("#age").val(userObj.age);
        $("#race").val(userObj.race);
        $("#characterClass").val(userObj.characterClass);
        $("#level").val(userObj.level);
        $("#characterBackground").val(userObj.characterBackground);
        $("#desc").val(userObj.desc);
        $("#playerName").val(userObj.playerName);
        $("#playerNumber").val(userObj.playerNumber);
    });
}





function changeRoute() {
        let hashTag = window.location.hash;
        let pageID = hashTag.replace("#", "");
        console.log(hashTag + " " + pageID);
    
        if (pageID != ""){
        $.get(`pages/${pageID}/${pageID}.html`, function(data){
            // console.log("data " + data);
            $("#app").html(data);
            initSubmitListeners();
        });

    
    }else {
        $.get(`pages/home/home.html`, function(data){
            // console.log("data " + data);
            $("#app").html(data);
            initSubmitListeners();
        });


    }
    };



function initListeners() {

    $(window).on("hashchange", changeRoute);
    changeRoute();

    $(".bars").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });


}





$(document).ready(function(){
    initListeners();
    initSubmitListeners();
})