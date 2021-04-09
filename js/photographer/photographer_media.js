export class Media{
    constructor(data){
        this.media = [];
        this.lightbox =[];
        this.dropdown = document.querySelectorAll
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.video = data.video;
        this.image = data.image;
        this.alt = data.alt;
        this.tags = data.tags;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.urlID = this.getID();
        this.mediaImgVid = this.toHTMLGalleryImgVideo();
        this.gallery = this.toHTMLGallery();
       // this.clean = this.cleanGallery();
       // this.lightbox = document.querySelector('.lightbox');
       // this.openBox = this.openBox();
       
    }
    
    getID(){
        var url_string = window.location.href; 
        var url = new URL(url_string);
        return url.searchParams.get("id"); // get id from url
    }

    
 
    toHTMLGallery(){
        let articleMedia =
        `<article class="mediaItem" data-like="${this.likes}"  id="${this.id}">
           <div class="mediaVideoImg">${this.mediaImgVid}</div>
           <div class="mediaItemText">
               <div><h4 class="mediaItemTitle mediaItemText">${this.alt}</h4></div>
               <div class="mediaItemInfo">
                   <p class='mediaItemInfoPrice mediaItemText'>${this.price}€<div class="mediaItemLike mediaItemText" aria-label="aimer la vidéo">${this.likes}</div>
                   <i class="fas fa-heart mediaItemLikeHeart" id="like_icon_${this.id}"  aria-label="likes"></i>
               </div>
           </div>
       </article>`

        return articleMedia;
    }

    toHTMLGalleryImgVideo(){
        if (this.image != null){
            let articleMediaImg = `<img class="mediaItemImg"   src="../../img/${this.photographerId}/${this.image}" aria-label="${this.alt}" alt="${this.alt}" onclick="${this.openModal}">`;
            return articleMediaImg;
        }
        if (this.video != null){
            let articleVideo = `<video class="mediaItemImg"><source src="../../img/${this.photographerId}/${this.video}" aria-label="${this.alt}" type="video/mp4" alt='${this.alt}'></video>`;
            return articleVideo;
        }
        return "";
    }
    
    sortMedia(media,value) {
        this.media = media;
        this.cleanGallery();
        switch (value)
            {
                case "Popularity":
                this.media.sort((a, b) => b.likes - a.likes); // trie par like
                break
                case "Date":
                this.media.sort((a,b) =>  new Date(b.date) - new Date(a.date)); // trie selon la date 
                break
                case "Title":
                this.media.sort((a, b) => a.alt.localeCompare(b.alt, 'fr', {ignorePunctuation: true})); //trie par titre
            }
        this.updateGallery();
    }
    cleanGallery() {
        document.querySelector(".media").innerHTML=""; //section media
        document.querySelector(".lightboxContainer").innerHTML="" // lightbox
    }
    updateGallery(){
     //   listMedia.forEach(media => {mediaSection.innerHTML += media.toHTMLGallery()} );
    }

    
    footerLike(){
        
        let totalLikes = 0;
        if (this.urlID == this.photographerId ){
            const likes = this.likes;
            console.log(likes.length);
            for(var i=0;i<likes.length;i++){
                totalLikes += likes; 

            }
            console.log(totalLikes);
            return totalLikes; 

        }
    }

    
        
    
}