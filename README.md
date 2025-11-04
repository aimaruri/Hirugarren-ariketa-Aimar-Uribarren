<!DOCTYPE html>
<html lang="eu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3. ariketa</title>
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
</body>
</html>
