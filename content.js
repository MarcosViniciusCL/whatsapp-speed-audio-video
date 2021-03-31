var is_2x = false;
var chat_imagem = "imagem";

const looking_audios = () => {
    audios = document.querySelectorAll("audio");
    audios.forEach(audio => {
        if(audio.playbackRate == 1){
            audio.playbackRate = 2;
        }
    });

    videos = document.querySelectorAll("video");
    videos.forEach(video => {
        if(video.playbackRate == 1){
            video.playbackRate = 2;
        }
    });
}

function getImageChat() {
    try{
        return document.querySelector("._1-qgF")
            .querySelector(".fBf_N")
            .querySelector(".-y4n1")
            .querySelector("._18-9u._1bvi5._3-8er")
            .src;  
    } catch(e) {
        return "";
    }
     
}

const main_loop = (button) => {
    header = document.querySelector("._1-qgF");


    if(header) {
        button.innerHTML = "2x";
        button.classList.add("button2x");
        if(is_2x) {
            button.classList.add("pressed");
        }

        button.addEventListener("click", () => {
            audios = document.querySelectorAll("audio");
            audios.forEach(audio => {
                audio.playbackRate = is_2x ? 1 : 2;
            })
            is_2x = !is_2x;
            if(is_2x){
               button.classList.add("pressed");
               interval_looking = setInterval(looking_audios, 1000);
            } else {
                button.classList.remove("pressed");
                clearInterval(interval_looking);
            }
        });

        header.appendChild(button);
    }
}


setInterval(() => {
    if(chat_imagem !== getImageChat()) {
        chat_imagem = getImageChat();
        main_loop(document.createElement("button"))
    }
},500);