//adding a modal to photos
/*const img=document.getElementById('img')
    const modal=document.getElementById('modal')
    
    if(modal.classList=='modal'){
        img.addEventListener('mouseover',()=>{
            
            
            console.log(btnM)
            console.log(modal.classList)
            modal.classList.remove('modal')
            modal.classList.add('modalVisible')
        })
        modal.addEventListener('mouseover',()=>{
            
            
            console.log(btnM)
            console.log(modal.classList)
            modal.classList.remove('modal')
            modal.classList.add('modalVisible')
        })
        
        img.addEventListener('mouseout',()=>{
            
            
            console.log(btnM)
            console.log(modal.classList)
            modal.classList.remove('modalVisible')
            modal.classList.add('modal')
        })
        modal.addEventListener('mouseout',()=>{
            
            
            console.log(btnM)
            console.log(modal.classList)
            modal.classList.remove('modalVisible')
            modal.classList.add('modal')
        })

    }
}*/



const modals=['modal1','modal2','modal3','modal4']
const imgs=['img1','img2','img3','img4']
const btnMs=['btnM1','btnM2','btnM3','btnM4']
const closeM1=['close1','close2','close3','close4']
for(i=0;i<4;i++){
    const img=document.getElementById(imgs[i])
    const modal=document.getElementById(modals[i])
    const btnM=document.getElementById(btnMs[i])
    const closeM=document.getElementById(closeM1[i])
    
    if(modal.classList=='modal'){
       
        img.addEventListener('mouseover',()=>{
            modal.classList.remove('modal')
            modal.classList.add('modalVisible')
        })
        modal.addEventListener('mouseover',()=>{
            modal.classList.remove('modal')
            modal.classList.add('modalVisible')
        })
       
        
        img.addEventListener('mouseout',()=>{
            modal.classList.remove('modalVisible')
            modal.classList.add('modal')
        })
        modal.addEventListener('mouseout',()=>{
            modal.classList.remove('modalVisible')
            modal.classList.add('modal')
        })
        closeM.addEventListener('click',()=>{
            modal.classList.remove('modalVisible')
            modal.classList.add('modal')
            console.log('closed')
        })
        btnM.addEventListener('click',()=>{
            modal.classList.remove('modal')
            modal.classList.add('modalVisible')
        })

    }

}

const burger=document.getElementById('burger')
const burgerMenu=document.getElementById('burgerMenu')
burger.addEventListener('click',()=>{
    burgerMenu.classList.add('burgerMenuVisible')
})
    
        
           
        

    

    
    

   


