// 1. Testu-Aldatzailea
function aldatuTestua() {
    document.getElementById("testu_aldagarria").textContent = "Testua ondo aldatu da!";
}

// 2. Kolore Txandakatzailea (Estiloak JS-tik aplikatuz)
let koloreaAldatua = false;
function aldatuKolorea() {
    const p = document.getElementById("kolore_aldagarria");
    if (koloreaAldatua) {
        p.style.color = "black";
    } else {
        p.style.color = "red";
    }
    koloreaAldatua = !koloreaAldatua;
}

// 3. Elementuen Ezkutagailua (display propietatea aldatuz)
function txandakatuEzkutatzea() {
    const p = document.getElementById("ezkutatu_hau");
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}

// 4. Batuketa Kalkulagailua
function batuketaEgin() {
    const z1 = parseFloat(document.getElementById("zenbaki1").value);
    const z2 = parseFloat(document.getElementById("zenbaki2").value);
    if (isNaN(z1) || isNaN(z2)) {
        document.getElementById("emaitza4").textContent = "Sartu bi zenbaki!";
        return;
    }
    const emaitza = z1 + z2;
    document.getElementById("emaitza4").textContent = emaitza;
}

// 5. Testu-Gehitzailea (Elementu berriak sortzea)
function gehituElementua() {
    const testua = document.getElementById("elementu_berria").value.trim();
    if (testua === "") return;

    const li = document.createElement("li");
    li.textContent = testua;
    document.getElementById("zerrenda_dinamikoa").appendChild(li);

    document.getElementById("elementu_berria").value = "";
}

// 6. Kontagailua (aldagai globalak erabiliz)
// Oharra: klikKopurua HTML amaierako <script> blokean hasieratuta dago
function kontatuKlik() {
    klikKopurua++;
    document.getElementById("kontagailu_emaitza").textContent = klikKopurua;
}

// 7. Zenbaki Asmatzearen Jokoa
// Oharra: zenbakiSekretua HTML amaierako <script> blokean hasieratuta dago
function konprobatuZenbakia() {
    const erabiltzailea = parseInt(document.getElementById("asmatutako_zenbakia").value);
    const emaitza = document.getElementById("joko_emaitza");

    if (isNaN(erabiltzailea)) {
        emaitza.textContent = "Sartu zenbaki bat!";
        return;
    }

    if (erabiltzailea === zenbakiSekretua) {
        emaitza.textContent = "Zorionak! Asmatu duzu 🎉";
    } else {
        emaitza.textContent = "Ez duzu asmatu. Saiatu berriro!";
    }
}

// 8. Atzeko Planoaren Kolore-Aldatzailea (Random)
function aldatuAtzekoPlanoarenKolorea() {
    const koloreak = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lightgray"];
    const ausazkoa = koloreak[Math.floor(Math.random() * koloreak.length)];
    document.body.style.backgroundColor = ausazkoa;
}
