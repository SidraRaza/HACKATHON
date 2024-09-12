const toggleButton=document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsList= document.getElementById('skills-list') as HTMLButtonElement;

toggleButton.addEventListener('click',()=>{
    if(skillsList.style.display==='none'){
        skillsList.style.display='block';
        toggleButton.textContent='hide skills';
    }else{
        skillsList.style.display='none';
        toggleButton.textContent='Show Skills';
    }
});
skillsList.style.display='none';
toggleButton.textContent='Show Skills'