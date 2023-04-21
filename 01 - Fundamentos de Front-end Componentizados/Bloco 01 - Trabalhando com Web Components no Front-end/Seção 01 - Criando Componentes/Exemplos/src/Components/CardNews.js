class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const author = document.createElement("span");
    author.textContent = "By " + (this.getAttribute("author") || "anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("news");

    cardLeft.appendChild(author);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const image = document.createElement("img");
    image.src = this.getAttribute("image") || "./assets/default.jpg";
    image.alt = this.getAttribute("image-alt") || "Image describing that no image was used";

    cardRight.appendChild(image);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    * {
    box-sizing: border-box;
    font-family:'Segoe UI', sans-serif;
    margin: 0;
    padding: 0;
    }

    .card {
      -webkit-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: row;
      margin-bottom: 3px;
      width: 800px;
    }
    
    .card__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    
    .card__left > span {
      font-weight: 600;
    }
    
    .card__left > a {
      color: black;
      font-size: 25px;
      font-weight: bold;
      margin-top: 15px;
      text-decoration: none;
    }
    
    .card__left > p {
      color: rgb(75, 75, 75);
    }
    
    .card__right > img {
      display: flex;
      height: 169px;
      justify-content: center;
      width: 300px;
    }
    `

    return style;
  }
}

customElements.define("card-news", CardNews);