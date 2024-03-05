document.querySelectorAll('li').forEach(item=>{
  item.addEventListener('dblclick', ()=>{
    item.classList.toggle('opacar');
  });
  item.addEventListener('click', ()=>{
    item.classList.toggle('tachar');
  });
});
