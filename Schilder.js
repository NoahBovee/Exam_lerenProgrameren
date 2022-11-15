function Schilder (vNaam, aNaam, stijl, lijstSchilderijen=[]) {
    this.vNaam = vNaam
    this.aNaam = aNaam
    this.stijl = stijl
    this.lijstSchilderijen = lijstSchilderijen
}
function Schilderij (naam, canvasGrootte, prijs) {
    this.naam = naam
    this.canvasGrootte = canvasGrootte
    this.prijs = prijs
    }
    
Schilder.prototype.addPainting = function (painting) {
    this.lijstSchilderijen.push(painting)
}

export default Schilder; 