const $app = document.getElementById('app');
const conferences = ['Linux', 'Ruby', 'Javascript', 'Kotlin'];
const Avatar = args=>{
  const src = `http://randomuser.me/api/portraits/women/${args.id}.jpg`
  return `<picture><img src="${src}"/>
          <h2>${args.name}</h2></picture>`
}
conferences.map(conf=>addAvatar(conf));
function addAvatar(conf){
  $app.innerHTML += Avatar({
    id:Math.ceil(Math.random()*99),
    name:conf
  });
}

$app.querySelectorAll('picture').forEach(pic=>{
  pic.addEventListener('click', ()=>{
    pic.classList.toggle('disabled');
  });
});