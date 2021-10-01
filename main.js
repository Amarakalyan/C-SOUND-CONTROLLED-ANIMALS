function startClassification()
{
    console.log("in start classification function");
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IKEZoDMx0/model.json',modelReady);

}

function modelReady()
{
    console.log("modelready");
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
   if (error){
    console.error(error);
   }else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
    
    docuent.getElementById("detected").innerHTML="Detected Dog - "+dog+", Detected Cat - "+cat+", Detected Lion - "+lion+","
    document.getElementById("detected").style.color="rbg("+random_number_r+","+random_number_g+","+random_number_b+")";
    
    document.getElementById("animal_voices").innerHTML= "Detected Voices Is Of - " + results[0].label;
    document.getElementById("animal_voices").style.color="rbg("+random_number_r+","+random_number_g+","+random_number_b+")";
    
    img = document.getElementById("animal_images");

    if(results[0].label== "Barking"){
        img.src="https://cdn.dribbble.com/users/675297/screenshots/4334597/basti.gif";
        dog = dog + 1;

    }else if(results[0].label== "Meowing"){
        img.sr="https://i.gifer.com/IFK3.gif";
        cat = cat + 1;
    }else if(results[0].label== "Roaring"){
        img.sr="https://acegif.com/wp-content/uploads/2020/07/lion-roar.gif";
        lion = lion + 1;  
    }else{
        img.src="listen.gif";
    }
   }
}