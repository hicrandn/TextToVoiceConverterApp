let speech = new SpeechSynthesisUtterance(); // It is part of the Web Speech API and is used to voice a text as speech

let voices = [];

let voiceSelecet = document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voice,i)=>(voiceSelecet.options[i]=new Option(voice.name,i)));
};
voiceSelecet.addEventListener("change", () =>{
    speech.voice = voices[voiceSelecet.value];
});

document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);

});


