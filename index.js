class Ticket{
    constructor(titre, description, etat=[]){
        this.titre=titre;
        this.description=description;
        this.etat=etat;
    }


    modifierT(titre){
        this.titre=titre;
    }
    modifierD(description){
        this.description=description;
    }
    modifierE(etat){
        this.etat=etat;
    }
}
