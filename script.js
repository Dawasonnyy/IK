   function Contact(event){
    
    const loading= document.getElementById("load")
    const success = document.getElementById("successpage")
    const xbtn= document.getElementById("xbtn")
    
 
    emailjs
         .sendForm(
            'service_tyizi1u',
            'template_2gocoin'
             ,
            event.target,
             'GNK1HyFEhEo9LCWhm'
         )
        
        .then(() => {
           
            loading.style.zIndex=(-2)
            success.style.zIndex=(20)
            xbtn.style.zIndex=(90)

        }) .catch(()=>{
            loading.style.zIndex=(-2)
            alert(
                "The Email service is temporarily unavailable. Please contact me directly on "
            )
        }
        )
 
 
        loading.style.width=("100%")
    setTimeout(() => {
        
      
      
     }, 2500);

   }

   function Pop(){
    const swipe = document.getElementById("swipe")
   
    swipe.style.width= "55%"
    swipe.style.display="block"
    
   }



   
   function ContactPop(){
    const load = document.getElementById("contact_page")
    
    load.style.width="100%" 
    
}
    function ProjectsPop(){
        const proje = document.getElementById("contact__page")

        proje.style.width="100%" 

    }

    function Pip(event){
        event.preventDefault()
        const  loading= document.getElementById("load")
        const success = document.getElementById("successpage")
        const xbtn= document.getElementById("xbtn")
        const load = document.getElementById("contact_page")

        emailjs
        .sendForm(
           'service_tyizi1u',
           'template_2gocoin'
            ,
           event.target,
            'GNK1HyFEhEo9LCWhm'
        )
        .then(() => {
           
            loading.style.width=(0)
            success.style.width=("100%")
            xbtn.style.width=("40px")

        })

        .catch(()=>{
            loading.style.width=(0)
            alert(
                "The Email service is temporarily unavailable. Please contact me directly on "
            )
        }
        )
      
       load.style.width=(0)
        loading.style.width=("100%")
        setTimeout(() => {
            

            

        
      
      
        }, 4500);
   
    }


    
    function Pip2(){
        const  loadin= document.getElementById("load")
        const succe = document.getElementById("successpage")
        const xbt= document.getElementById("xbtn")
        const loa = document.getElementsByClassName("desktop__input--field")
        
       
        loadin.style.width=("100%")
        setTimeout(() => {
            

            loadin.style.width=(0)
            succe.style.width=("100%")
            xbt.style.width=("40px")

        
      
      
        }, 4500);
   
    }



    function Remove(){
        const swipe = document.getElementById("swipe")
        const  loading= document.getElementById("load")
        const suc = document.getElementById("successpage")
        const load = document.getElementById("contact_page")
        
        
        
        swipe.style.width=(0)
        suc.style.width=(0)
        load.style.width=(0)
       
        
        
       

    }

    function Remove2(){
        const project = document.getElementById("contact__page")
        const succ = document.getElementById("successpage")
        succ.style.width=(0)
        project.style.width=(0)

    }

    function RemoveSlide(){
        const swipe = document.getElementById("swipe")
        swipe.style.width=(0)

    }

function Select(){
    const html = document.getElementById("html")
    html.style.border("yellow")
}
   
function Mobile(){
    const mobile = document.getElementById("mobile")

    if (screen > 360 ){
        mobile.style.display=("none")
        
    }
}

//   
// 
// 
