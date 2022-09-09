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



   
  
    function ProjectsPop(){
        const load = document.getElementById("mobile__contact")

        load.style.width="100%" 

    }

    function Pip(event){
        event.preventDefault()
        const  desktoploading= document.getElementById("desktop__load")
        const desktopsuccess = document.getElementById("desktop__success")
        const desktopxbtn= document.getElementById("desktop__xbtn")
        const desktopload = document.getElementById("desktop__contact")

        emailjs
         .sendForm(
            'service_tt0i0x7',
            'template_2gocoin'
             ,
            event.target,
             'GNK1HyFEhEo9LCWhm'
         )
        .then(() => {
           
            desktoploading.style.width=(0)
            desktopsuccess.style.width=("100%")
            desktopxbtn.style.width=("40px")

        })

        .catch(()=>{
            desktopload.style.width=(0)
            alert(
                "The Email service is temporarily unavailable. Please contact me directly on dawitisraell@hotmail.com"
            )
        }
        )
      
        desktopload.style.width=(0)
        desktoploading.style.width=("100%")
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

    function Mobile(event){
        event.preventDefault()
        const  loader= document.getElementById("mobile__load")
        const success = document.getElementById("mobile__success")
        const xbtn= document.getElementById("xbtn2")
        const load = document.getElementById("mobile__contact")

        emailjs
         .sendForm(
            'service_zmc8yho',
            'template_ww4pazo'
             ,
            event.target,
             'GNK1HyFEhEo9LCWhm'
         )
       .then(() => {
          
        loader.style.width=(0)
           success.style.width=("100%")
           xbtn.style.width=("40px")

       })

       .catch(()=>{
        load.style.width=(0)
        alert(
            "The Email service is temporarily unavailable. Please contact me directly on dawitisraell@hotmail.com"
        )
    }
    )
     
       load.style.width=(0)
       loader.style.width=("100%")
       setTimeout(() => {
           

           

       
     
     
       }, 4500);
  

    }



    function Remove(){
        const swipe = document.getElementById("swipe")
        const  loading= document.getElementById("mobile__load")
        const suc = document.getElementById("mobile__success")
        const load = document.getElementById("mobile__contact")
        const  loader= document.getElementById("desktop__load")
        const success = document.getElementById("desktop__success")
        const xbtn= document.getElementById("xbtn2")
        const contact = document.getElementById("desktop__contact")
        
        
        
        swipe.style.width=(0)
        suc.style.width=(0)
        load.style.width=(0)
        success.style.width=(0)
       contact.style.width=(0)
       
        
        
       

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
   
function ContactPop(){
   
    const desktopload = document.getElementById("desktop__contact")
    const input = document.getElementById("mobile__contact")
    input.style.width="100%" 
    desktopload.style.width="100%" 
   
    
}


//   
// 
// 
