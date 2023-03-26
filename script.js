const kits = ["crash", "kick", "snare", "tom"];
const containerElement = document.querySelector(".container");

kits.forEach((kit) => {
    const btnElements = document.createElement("button");
    btnElements.classList.add("btn")
    btnElements.innerText = kit
    btnElements.style.backgroundImage = "url(images/" + kit + ".png)"
    containerElement.appendChild(btnElements);

    const audioEl = document.createElement("audio");
    audioEl.src = "sounds/" + kit + ".mp3"
    containerElement.appendChild(audioEl)

    btnElements.addEventListener("click", ()=> {
        audioEl.play();
    });
    window.addEventListener("keydown", (event)=>{
        if(event.key === kit.slice(0,1)){
            audioEl.play()
            btnElements.style.transform = "scale(.9)";
            setTimeout(()=>{
                btnElements.style.transform = "scale(1)"
            }, 100)
        }
    })
})