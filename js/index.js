
const menu = document.getElementById('menu').children;
const images = document.getElementById('images').children;

for(var i=0;i<menu.length;i++){
    menu[i].addEventListener('click',function(){
        for(var j=0;j<menu.length;j++){
            menu[j].classList.remove('active');
        }
        this.classList.add('active')

        const target = this.getAttribute('data-target');
        for(var k=0;k<images.length;k++){
            images[k].style.display ='none';
            if(target == images[k].getAttribute('data-id')){
                images[k].style.display = 'block'
            }
            if(target == 'all'){
                images[k].style.display = 'block' 
            }
        }
    })
}