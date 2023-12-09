let rockimg = document.getElementById("rockimg");
let paperimg = document.getElementById("paperimg");
let scissorsimg = document.getElementById("scissorsimg");

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

rock.addEventListener('click', () => {
    ShoWImage(rockimg);
});

paper.addEventListener('click', () => {
    ShoWImage(paperimg);
});

scissors.addEventListener('click', () => {
    ShoWImage(scissorsimg);
});

function ShoWImage(image) {
    hidingImages();

    // to show the clicked image
    image.style.display = 'block';
}

function hidingImages() {
    const allImages = document.querySelectorAll('.game-image');
    allImages.forEach(image => {
        image.style.display = 'none';
    });
}


let logo = document.querySelectorAll(".logo");
let MyScore=0;
let ComputerScore=0;
let UserScore = document.getElementById("userScore");
let CompScore = document.getElementById("compScore");


logo.forEach(element => {
    element.addEventListener("click", function (event) {
        let clickedId = event.target.id;
        let compiler = document.getElementById("compiler");
        let random = Math.floor(Math.random() * 3);
        let img = document.createElement("img");

        if (random === 0) {
            img.src = "./assets/rock-hand.png";
            img.style.height="250px"
        } else if (random === 1) {
            img.src = "./assets/paper-hand.png";
            img.style.height="250px"
        } else {
            img.src = "./assets/scissors-hand.png";
            img.style.height="250px"
        }

        let list = ["rock","paper","scissors"]

        let UserChoice= clickedId;
        let CompChoice = random;
        console.log(UserChoice)
        console.log(random)

        function determine_winner(UserChoice,CompChoice){
           if (UserChoice === list[CompChoice]){
            return "Tie Match"
           }
           else if (
            (UserChoice==="rock" && list[CompChoice]==="scissors")||
            (UserChoice==="paper" && list[CompChoice]==="rock") ||
            (UserChoice==="scissors" && list[CompChoice]==="paper")
           ){
           MyScore+=1;
           UserScore.innerText=MyScore;
           if(MyScore===5){
            let paraTag = document.createElement("p")
            paraTag.innerText="You Won the Game";
            paraTag.style.color= "white";
            paraTag.style.textAlign="center"
            document.body.appendChild(paraTag);

            // to make the images invisible
            let idOfLogo = document.getElementById("idOfLogo");
            idOfLogo.style.visibility="hidden";

            let PlayAgainBtn = document.createElement("button");
            PlayAgainBtn.innerText="Play Again";

            PlayAgainBtn.style.color="white";
            PlayAgainBtn.style.backgroundColor="#f7bb3d";
            PlayAgainBtn.style.marginLeft="600px"
            PlayAgainBtn.style.marginTop="-950px";
            PlayAgainBtn.style.borderRadius="5px";
            PlayAgainBtn.style.padding="10px";
            PlayAgainBtn.style.fontSize="20px";

            PlayAgainBtn.addEventListener("click",function(){
                window.location.href="./game.html"
            })
            document.body.appendChild(PlayAgainBtn);
        }
           return "You won!"
           }
           else{
            ComputerScore+=1;
            CompScore.innerText=ComputerScore;
            if(ComputerScore===5){
                let paraTag = document.createElement("p")
                paraTag.innerText="You Lost the Game";
                paraTag.style.textAlign="center"
                paraTag.style.color= "white";
                document.body.appendChild(paraTag);

                // to make images invisible
                let idOfLogo = document.getElementById("idOfLogo");
                idOfLogo.style.visibility="hidden";

                let PlayAgainBtn = document.createElement("button");
                PlayAgainBtn.innerText="Play Again";

                PlayAgainBtn.style.color="white";
                PlayAgainBtn.style.backgroundColor="#f7bb3d";
                PlayAgainBtn.style.marginLeft="600px"
                PlayAgainBtn.style.marginTop="-950px";
                PlayAgainBtn.style.borderRadius="5px";
                PlayAgainBtn.style.padding="10px";
                PlayAgainBtn.style.fontSize="20px";

                PlayAgainBtn.addEventListener("click",function(){
                    window.location.href="./game.html"
                })
                document.body.appendChild(PlayAgainBtn)
            }
            return "You lose!"
           }

        }


        let output=determine_winner(UserChoice,CompChoice)
        console.log(output);
        console.log("myscore",MyScore);
        console.log("compsocre",ComputerScore);

        compiler.innerHTML = "";
        compiler.appendChild(img);

        console.log("ID",clickedId)
    });
});

