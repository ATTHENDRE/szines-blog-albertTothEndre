class Bejegyzes {
    title: string;
    content: string;
    color: string;

    constructor(title: string, content: string, color: string) {
        this.title = title;
        this.content = content;
        this.color = color;
    }
}

function megjelenit(bejegyzes: Bejegyzes) {
    const title = document.getElementById("title") as HTMLElement;
    const content = document.getElementById("content") as HTMLElement;
    const color = document.getElementById("color") as HTMLElement;
   

     if (title?.textContent && content?.textContent === "") {
        console.error("Hiba: A cím és a tartalom nem lehet üres.");
     }

     if(color && color.textContent && (color?.textContent === "" || color?.textContent.length > 7 || !color?.textContent.startsWith("#"))) {
        console.error("Hiba: A szín nem lehet üres vagy nem megfelelő formátumú.");
     }

     const poszt = document.getElementById("posts") as HTMLElement;
     const posztMain = document.createElement("article") as HTMLElement;
     posztMain.innerHTML = `
     <h2>${bejegyzes.title}</h2>
     <p>${bejegyzes.content}</p>
     `;
     posztMain.style.backgroundColor = bejegyzes.color;     
      
     poszt.appendChild(posztMain);


     

}

document.addEventListener("DOMContentLoaded", () => {
    const bejegyzes = new Bejegyzes("Első bejegyzés", "Ez az első bejegyzés tartalma.", "#ffcc00");
    megjelenit(bejegyzes);
});
