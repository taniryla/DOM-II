const blueBus = document.querySelector('.intro h2');
blueBus.addEventListener('mouseenter', (event) => {
    setTimeout(() => {
            event.target.style.color = 'blue';
        }, 500);
})


const busFlash = document.querySelector('.intro img');
busFlash.addEventListener('scroll', (event) => {
    setInterval(() => {
    event.target.style.opacity = '0.5';
    event.target.style.transition = 'opacity 0.2s'; 
    event.target.style.backgroundColor = 'yellow';
        }, 1000);
})

const enlargeMap = document.querySelector('.img-content img');
enlargeMap.addEventListener('resize', (event) => {
    event.target.style.width = '600px';
    event.target.style.height = '450px';
});

const letsGo = document.querySelector('.text-content h2');
letsGo.addEventListener('click', (event) => {
    setTimeout(() => {
            event.target.style.color = 'red';
        }, 200);
})

const buttonBack = document.querySelectorAll('.nav-link');
buttonBack.forEach(e => {
e.addEventListener('mouseout', () => {
    e.style = 'color: black';
    e.style.backgroundColor = 'white';
    e.style.padding = '0px';
    e.style.borderRadius = '0px';
    });
}); 
    
const buttonBlink = document.querySelectorAll('.nav-link');
buttonBlink.forEach(e => {
    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = '#F5F5F5';
        e.style.padding = '15px';
        e.style.borderRadius = '10px';
        });
    }); 

    
const sunReady = document.querySelectorAll('.destination h4');
sunReady.forEach(e => {
e.addEventListener('dblclick', () => {
e.style.backgroundColor = 'yellow';
    });
}); 

const orangeBtn = document.querySelectorAll('.destination h4');
orangeBtn.forEach(e => {
    e.addEventListener('contextmenu', () => {
    e.style.backgroundColor = 'orange';
        });
    }); 

const btn1 = document.querySelectorAll('.btn');
btn1.forEach(e => {
    e.addEventListener('keydown', () => {
    e.style.color = 'red';
    });
}); 

const btn2 = document.querySelectorAll('.btn');
btn2.forEach(e => {
    e.addEventListener('keyup', () => {
    e.style.color = 'white';
    e.stopPropagation();
        });
    }); 

const btn = document.querySelectorAll('.btn');
btn.forEach(e => {
    e.addEventListener('click', function(e) {
    e.preventDefault();
    });
});
 


