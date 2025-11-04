
<!DOCTYPE html>
<html lang="eu">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3.ariketa</title>
</head>
<body>

    <h1>JavaScript Funtzio ezberdinak</h1>
    
    <section>
        <h2>1. Testu-Aldatzailea</h2>
        <p id="testu_aldagarria">Hau da hasierako testua</p>
        <button onclick="aldatuTestua()">Testua aldatu</button>
    </section>

    <section>
        <h2>2. Kolore Txandakatzailea</h2>
        <p id="kolore_aldagarria">Kolorea aldatuko dut</p>
        <button onclick="aldatuKolorea()">Kolorea txandakatu</button>
    </section>

    <section>
        <h2>3. Elementuen Ezkutagailua</h2>
        <p id="ezkutatu_hau">Ezkutatu edo agertu beharreko paragrafoa</p>
        <button onclick="txandakatuEzkutatzea()">Txandakatu</button>
    </section>

    <section>
        <h2>4. Batuketa Kalkulagailua</h2>
        <input type="number" id="zenbaki1" placeholder="Zenbakia 1"> +
        <input type="number" id="zenbaki2" placeholder="Zenbakia 2">
        <button onclick="batuketaEgin()">Batu</button>
        <p>Emaitza: <span id="emaitza4"></span></p>
    </section>
    
    <section>
        <h2>5. Zerrenda Dinamikoa</h2>
        <input type="text" id="elementu_berria" placeholder="Elementu berria idatzi">
        <button onclick="gehituElementua()">Gehitu</button>
        <ul id="zerrenda_dinamikoa"></ul>
    </section>

    <section>
        <h2>6. Klik Kontagailua</h2>
        <p>Klika kopurua: <span id="kontagailu_emaitza">0</span></p>
        <button onclick="kontatuKlik()">Klikatu</button>
    </section>

    <section>
        <h2>7. Zenbaki Asmatzearen Jokoa (1-5)</h2>
        <input type="number" id="asmatutako_zenbakia" placeholder="Zure zenbakia (1-5)">
        <button onclick="konprobatuZenbakia()">Konprobatu</button>
        <p id="joko_emaitza"></p>
    </section>
    
    <section>
        <h2>8. Atzeko Planoaren Kolore-Aldatzailea</h2>
        <button onclick="aldatuAtzekoPlanoarenKolorea()">Aldatu</button>
    </section>

    <script>
        // Aldagai globalak
        let klikKopurua = 0;
        let zenbakiSekretua = Math.floor(Math.random() * 5) + 1;
        let koloreaAldatua = false;

        // 1. Testua aldatu
        function aldatuTestua() {
            document.getElementById("testu_aldagarria").textContent = "Testua ondo aldatu da!";
        }

        // 2. Kolorea aldatu
        function aldatuKolorea() {
            const p = document.getElementById("kolore_aldagarria");
            if (koloreaAldatua) {
                p.style.color = "black";
            } else {
                p.style.color = "red";
            }
            koloreaAldatua = !koloreaAldatua;
        }

        // 3. Ezkutatu edo erakutsi elementua
        function txandakatuEzkutatzea() {
            const p = document.getElementById("ezkutatu_hau");
            if (p.style.display === "none") {
                p.style.display = "block";
            } else {
                p.style.display = "none";
            }
        }

        // 4. Bi zenbaki batu
        function batuketaEgin() {
            const z1 = parseFloat(document.getElementById("zenbaki1").value);
            const z2 = parseFloat(document.getElementById("zenbaki2").value);
            const emaitza = z1 + z2;
            document.getElementById("emaitza4").textContent = emaitza;
        }

        // 5. Elementu berria gehitu zerrendara
        function gehituElementua() {
            const testua = document.getElementById("elementu_berria").value;
            if (testua.trim() === "") return;
            const li = document.createElement("li");
            li.textContent = testua;
            document.getElementById("zerrenda_dinamikoa").appendChild(li);
            document.getElementById("elementu_berria").value = "";
        }

        // 6. Klik kontatu
        function kontatuKlik() {
            klikKopurua++;
            document.getElementById("kontagailu_emaitza").textContent = klikKopurua;
        }

        // 7. Zenbaki asmatzeko jokoa
        function konprobatuZenbakia() {
            const erabiltzailea = parseInt(document.getElementById("asmatutako_zenbakia").value);
            const emaitza = document.getElementById("joko_emaitza");
            if (erabiltzailea === zenbakiSekretua) {
                emaitza.textContent = "Zorionak! Asmatu duzu!";
            } else {
                emaitza.textContent = "Ez duzu asmatu. Saiatu berriro!";
            }
        }

        // 8. Atzeko planoaren kolorea aldatu
        function aldatuAtzekoPlanoarenKolorea() {
            const koloreak = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lightgray"];
            const ausazkoa = koloreak[Math.floor(Math.random() * koloreak.length)];
            document.body.style.backgroundColor = ausazkoa;
        }
    </script>
</body>
</html>
