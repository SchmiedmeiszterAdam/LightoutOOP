class Lampa{
    constructor(elem,index){
        this.index = index
        this.elem = elem
        this.allapot = false;
        this.elem.on("click",()=>{
            this.atvalt()
            this.kattintasTrigger()
        })
    }
    atvalt(){
        this.allapot =!this.allapot
        this.setSzin()
      }
    setSzin() {
        if (this.allapot) {
          this.elem.css("background", "yellow");
        } else {
          this.elem.css("background", "green");
        }
      }
    kattintasTrigger(){
        //let esemeny = new Event("lampa")
        let esemeny = new CustomEvent("lampaKattintas",{detail:this})
        window.dispatchEvent(esemeny)
    }
}