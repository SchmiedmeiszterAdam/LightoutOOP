$(function () {
    const szuloElem = $("article");
    const sablonElem = $(".lampa");
    const meret = 9;
    const lampaTomb = [];

    for (let i = 0; i < meret; i++) {
        const ujElem = sablonElem.clone().appendTo(szuloElem);
        const lampa = new Lampa(ujElem, i);
        lampaTomb.push(lampa);
    }
    sablonElem.remove();
    $(window).on("lampaKattintas", (event) => {
        let index = event.detail.index;
        if (index >= 3) {
            lampaTomb[index - 3].atvalt();
        }
        if (index % 3 !== 0) {
            lampaTomb[index - 1].atvalt();
        }
        if (index < 6) {
            lampaTomb[index + 3].atvalt();
        }
        if (index % 3 !== 2) {
            lampaTomb[index + 1].atvalt();
        }
        nyert();
    });
    function nyert() {
        let i = 0;
        while (i < lampaTomb.length && lampaTomb[i].allapot === false) {
            i++;
        }
        if (i === lampaTomb.length) {
            console.log("nyert");
        }
    }
});
