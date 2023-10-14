function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/48clkLG6s/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, results) {

}