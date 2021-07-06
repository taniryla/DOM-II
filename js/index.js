const blueBus = document.querySelector('.intro h2');
blueBus.addEventListener('mouseenter', (event) => {
    setTimeout(() => {
            event.target.style.color = 'blue';
        }, 500);
})


const busFlash = document.querySelector('.intro img');
busFlash.addEventListener('mouseenter', (event) => {
    setInterval(() => {
    event.target.style.opacity = '0.5';
    event.target.style.transition = 'opacity 0.2s'; 
    event.target.style.backgroundColor = 'yellow';
        }, 1000);
})

const enlargeMap = document.querySelector('.img-content img');
enlargeMap.addEventListener('mouseover', (event) => {
    event.target.style.width = '600px';
    event.target.style.height = '450px';
});

const letsGo = document.querySelector('.text-content h2');
letsGo.addEventListener('click', (event) => {
    setTimeout(() => {
            event.target.style.color = 'red';
        }, 200);
})



const buttonBlink = document.querySelectorAll('.nav-link').forEach(event => {
buttonBlink.addEventListener('mouseover', () => {
    event.target.style.color = 'red';
    event.target.style.backgroundColor = '#F5F5F5';
    event.target.style.padding = '15px';
    event.target.style.borderRadius = '10px';
});
}); 

const buttonBack = document.querySelectorAll('.nav-link').forEach(event => {
buttonBack.addEventListener('mouseout', () => {
    event.target.style.color = 'black';
    event.target.style.backgroundColor = 'white';
    event.target.style.padding = '0px';
    event.target.style.borderRadius = '0px';
});
}); 

const sunReady = document.querySelectorAll('.destination h4').forEach(event => {
    sunReady.addEventListener('dblclick', () => {
    event.target.style.backgroundColor = 'yellow';
});
}); 