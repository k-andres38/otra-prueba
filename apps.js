const formulario=document.querySelector('#formulario');
const dni=document.querySelector('.dni');
const nombre=document.querySelector('.nombre');
const edad=document.querySelector('.edad');
const peso=document.querySelector('.peso');
const mayor=document.querySelector('.mayor');
const sugerencia=document.querySelector('.sugerencia');

let personas=[];


class Persona {

    constructor(nombre,edad,dni,opcion,altura,peso){

        this._nombre=nombre,
        this._edad=edad,
        this.dni=dni,
        this._opcion=opcion,
        this._altura=altura,
        this._peso=peso
    }

    set Opcion(tipo){
        this._opcion=tipo
   }

   get getNombre(){return this._nombre}
   get getEdad(){return this._edad}
   get getAtura(){return this._altura}
   get getPeso(){return this._peso}
     
    get Opcion(){return this._opcion}
   

    // static pintarUI(opcion){
    //         if(opcion==='mujer'){
    //             console.log('en mujer');
    //             this.setOpcion='hombre';
    //             console.log(this.getOpcion)
              
    //         }
          
    // }


    calcularIMC(alto,pes){
        const altura=parseFloat(alto);
        const peso=parseFloat(pes);
        const calc=peso/(altura**2);
        
        if(calc<20){
        
        sugerencia.textContent='☠ Bajo de peso, cuidado con la alimentacion (-1)'
            sugerencia.className="lead text-danger fw-bolder sugerencia"
        }

        if(calc>=20 && calc<=25){ 
             sugerencia.textContent='😎 Estas Al punto, Bien (0)'
             sugerencia.className="lead text-success fw-bolder sugerencia"
            }
        if(calc>25){
            sugerencia.textContent='🤐 Creo que llego la hora de hacer dieta'
            sugerencia.className="lead text-warning fw-bolder sugerencia"
        }
           
       

    }

    esMayorDeEdad(edad){

        if(parseInt(edad)>18) return mayor.classList.remove('d-none');
        mayor.classList.add('d-none')
        
    }

    comprobarSexo(opcion){ 
        if(opcion.charAt(0)==='H' || opcion.charAt(0)==='M') return ;
    };

    toString(objeto){

        nombre.textContent=objeto.getNombre
        edad.textContent=objeto.getEdad
        peso.textContent=objeto.getPeso
       
    }

    generaDNI(){
        
         dni.value = (Math.floor((Math.random() * 123456789 )))
      
    }

}

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    document.querySelector('.cuidado').classList.add('d-none')
    const data= new FormData(formulario);
    const [nombre,edad,dni,altura,peso,opcion]=[...data.values()];
    //console.log(nombre,edad,dni,opcion);

    const persona= new Persona(nombre,edad,dni,opcion,altura,peso)
    if(!altura.trim() && !peso.trim() ) return document.querySelector('.cuidado').classList.remove('d-none')
    document.querySelector('section').classList.remove('d-none')
   
    
    // if(opcion==='mujer'){
    //     
    //     Persona.pintarUI(opcion)
        
    // }
    
   persona.calcularIMC(altura,peso)
   persona.esMayorDeEdad(edad)
   persona.comprobarSexo(opcion)
   persona.toString(persona)
   persona.generaDNI()
   persona.Opcion=opcion
  


})




