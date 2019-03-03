const imgs = [...document.querySelectorAll("#roomsGallery img")]

imgs.forEach((img)=>{
    img.addEventListener("click", (e)=>{
        const modal = document.createElement("div");
        const modalImg = e.target.cloneNode(false);
        const position = window.scrollY;
        console.log(position);
        modal.classList.add("modal-img-card");
        modal.style.top = "" + position + "px";
        modalImg.classList.add("modal-img");
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        modalImg.addEventListener("click", ()=>{
            modal.parentNode.removeChild(modal);
        })
    })
})