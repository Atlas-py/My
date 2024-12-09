let openpicture = false;
let active = "none"
const btns = document.getElementsByClassName("button");

for(let i = 0; i< btns.length; i++){
    btns[i].addEventListener('click', function () {
            if (openpicture && active == btns[i]){ //verifie que c'est la bonne image qui est active
                document.body.classList.remove("remove-scrolling"); 
                this.style.cursor = "zoom-out";
                this.style.transform = "translate(0%, 0%)";
                this.style.background = "none";
                this.style.padding = "5px";
                this.style.top = "0%";
                this.style.left = "0%";
                this.style.width = "20%";
                this.style.position = "relative";
                this.style.zIndex = "1";
                active = "none";
                openpicture = !openpicture;
            }else if(active == "none"){//verifie que aucune image n'est ouverte
                document.body.classList.add("remove-scrolling"); 
                this.style.cursor = "zoom-out";
                this.style.backgroundColor = "#000C";
                this.style.padding = "20%";
                this.style.width = "110%";
                this.style.position = "fixed";
                this.style.top = "50%";
                this.style.left = "50%";
                this.style.transform = "translate(-50%, -50%)";
                this.style.zIndex = "10";
                active = btns[i];
                openpicture = !openpicture;
            }
    });
}
