const imgs = [...document.querySelectorAll("#roomsGallery img")]

imgs.forEach((img)=>{
    img.addEventListener("click", (e)=>{
        const modal = document.createElement("div");
        const modalImg = e.target.cloneNode(false);
        modal.classList.add("modal-img-card");
        modalImg.classList.add("modal-img");
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        console.log(modal);
        modalImg.addEventListener("click", ()=>{
            modal.parentNode.removeChild(modal);
        })
    })
})