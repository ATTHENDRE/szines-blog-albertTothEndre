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
    

     const poszt = document.getElementById("posts") as HTMLElement;
     const posztMain = document.createElement("main") as HTMLElement;
     posztMain.innerHTML = `
     <article>
     <h2>${bejegyzes.title}</h2>
     <p>${bejegyzes.content}</p>
    </article>
     `;
     posztMain.style.backgroundColor = bejegyzes.color;     
      
     poszt.appendChild(posztMain);


     

}

document.addEventListener("DOMContentLoaded", () => {

  
    const bejegyzes1 = new Bejegyzes("Első bejegyzés", "Ez az első bejegyzés tartalma.", "#ffcc00");
    megjelenit(bejegyzes1);
    const bejegyzes2 = new Bejegyzes("Második bejegyzés", "Ez a második bejegyzés tartalma.", "#00ccff");
    megjelenit(bejegyzes2);
    const gomb = document.getElementById("add") as HTMLButtonElement;
    gomb.addEventListener("click", (e) => {
        e.preventDefault();
        const titleInput = document.getElementById("title") as HTMLInputElement;
        const contentInput = document.getElementById("content") as HTMLInputElement;
        const colorInput = document.getElementById("color") as HTMLInputElement;

        const title = titleInput.value;
        const content = contentInput.value;
        const color = colorInput.value;

        if (title === "" || content === "") {
            console.error("Hiba: A cím és a tartalom nem lehet üres.");
            return;
        }

        if (color === "" || color?.length > 7 || !color?.startsWith("#")) {
            console.error("Hiba: A szín nem lehet üres vagy nem megfelelő formátumú.");
            return;
        }

        const newBejegyzes = new Bejegyzes(title, content, color);
        megjelenit(newBejegyzes);
    
    }
  )}
  );
