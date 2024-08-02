const stoneOne = document.querySelector('.stone1');
    const stoneTwo = document.querySelector('.stone2');
    const stoneThree = document.querySelector('.stone3');

    const a = setTimeout(()=>{
        stoneOne.classList.add('stone1-a');
        stoneTwo.classList.add('stone2-a');
        stoneThree.classList.add('stone3-a');
    }, 2400)