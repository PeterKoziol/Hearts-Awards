var ericScore = 0,
   corinneScore = 0,
   cindyScore = 0,
   henryScore = 0;



var main = function() {

  function moeify() {

    if((corinneScore >= (40 + ericScore)) && (corinneScore >= (40 + cindyScore)) && (corinneScore >= (40 + henryScore))) {
      $(".corinne-img").addClass("hide");
      $(".moe-corinne").removeClass("hide");
    }
    else {
      $(".corinne-img").removeClass("hide");
      $(".moe-corinne").addClass("hide");
    };

    if((cindyScore >= (40 + ericScore)) && (cindyScore >= (40 + corinneScore)) && (cindyScore >= (40 + henryScore))) {
      $(".cindy-img").addClass("hide");
      $(".moe-cindy").removeClass("hide");
    }
    else {
      $(".cindy-img").removeClass("hide");
      $(".moe-cindy").addClass("hide");
    };

    if((ericScore >= (40 + corinneScore)) && (ericScore >= (40 + cindyScore)) && (ericScore >= (40 + henryScore))) {
      $(".eric-img").addClass("hide");
      $(".moe-eric").removeClass("hide");
    }
    else {
      $(".eric-img").removeClass("hide");
      $(".moe-eric").addClass("hide");
    };

    if((henryScore >= (40 + ericScore)) && (henryScore >= (40 + cindyScore)) && (henryScore >= (40 + corinneScore))) {
      $(".henry-img").addClass("hide");
      $(".moe-henry").removeClass("hide");
    }
    else {
      $(".henry-img").removeClass("hide");
      $(".moe-henry").addClass("hide");
    };

  };

  function endgame() {
    if((corinneScore >= 100) || (cindyScore >= 100) || (ericScore >= 100) ||(henryScore >= 100)) {
      $(".final-corinne").text(corinneScore);
      $(".final-cindy").text(cindyScore);
      $(".final-eric").text(ericScore);
      $(".final-henry").text(henryScore);

      $(".score-popout").toggleClass("hide");

      var scoreArray = [
        {name: "corinne", score: corinneScore},
        {name: "cindy", score: cindyScore},
        {name: "eric", score: ericScore},
        {name: "henry", score: henryScore}
      ];
      scoreArray.sort(function(a,b){
        return Number(b.score) - Number(a.score)});
      for (x of scoreArray) {
        $(".final-block-" + x.name).insertBefore(".final-score:first");
      }
    }
    else{};


  };

  $(".btn-master-button").click(function(){

    var scoreIncrCorinne = $(".form-control-corinne").val();
    scoreIncrCorinne = parseInt(scoreIncrCorinne);
    corinneScore += scoreIncrCorinne;
    $(".player-corinne").animate({height: (40 + (corinneScore / 2)) + '%'});
    document.getElementById("scoreCorinne").innerHTML = corinneScore;
    selectElementCorinne.options[0].selected="selected";

    var scoreIncrCindy = $(".form-control-cindy").val();
    scoreIncrCindy = parseInt(scoreIncrCindy);
    cindyScore += scoreIncrCindy;
    $(".player-cindy").animate({height: (40 + (cindyScore / 2)) + '%'});
    document.getElementById("scoreCindy").innerHTML = cindyScore;
    selectElementCindy.options[0].selected="selected";

    var scoreIncrEric = $(".form-control-eric").val();
    scoreIncrEric = parseInt(scoreIncrEric);
    ericScore += scoreIncrEric;
    $(".player-eric").animate({height: (40 + (ericScore / 2)) + '%'});
    document.getElementById("scoreEric").innerHTML = ericScore;
    selectElementEric.options[0].selected="selected";

    var scoreIncrHenry = $(".form-control-henry").val();
    scoreIncrHenry = parseInt(scoreIncrHenry);
    henryScore += scoreIncrHenry;
    $(".player-henry").animate({height: (40 + (henryScore / 2)) + '%'});
    document.getElementById("scoreHenry").innerHTML = henryScore;
    selectElementHenry.options[0].selected="selected";

    moeify();
    endgame();

  });
/*
  $(".btn-corinne").click(function(){
    var scoreIncr = $(".form-control-corinne").val();
    scoreIncr = parseInt(scoreIncr);
    corinneScore += scoreIncr;
    $(".player-corinne").animate({height: (40 + (corinneScore / 2)) + '%'});
    document.getElementById("scoreCorinne").innerHTML = corinneScore;
    selectElementCorinne.options[0].selected="selected";

    moeify();

  });

  $(".btn-cindy").click(function(){
    var scoreIncr = $(".form-control-cindy").val();
    scoreIncr = parseInt(scoreIncr);
    cindyScore += scoreIncr;
    $(".player-cindy").animate({height: (40 + (cindyScore / 2)) + '%'});
    document.getElementById("scoreCindy").innerHTML = cindyScore
    selectElementCindy.options[0].selected="selected"

    moeify();

  });

  $(".btn-eric").click(function(){
    var scoreIncr = $(".form-control-eric").val();
    scoreIncr = parseInt(scoreIncr);
    ericScore += scoreIncr;
    $(".player-eric").animate({height: (40 + (ericScore / 2)) + '%'});
    document.getElementById("scoreEric").innerHTML = ericScore
    selectElementEric.options[0].selected="selected"

    moeify();

  });

  $(".btn-henry").click(function(){
    var scoreIncr = $(".form-control-henry").val();
    scoreIncr = parseInt(scoreIncr);
    henryScore += scoreIncr;
    $(".player-henry").animate({height: (40 + (henryScore / 2)) + '%'});
    document.getElementById("scoreHenry").innerHTML = henryScore
    selectElementHenry.options[0].selected="selected"

    moeify();

  });
*/
};

$(document).ready(main);

//
