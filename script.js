const buttons=document.querySelectorAll(".theme-switch button");
buttons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    const theme=btn.dataset.theme;
    document.body.className=theme;
    buttons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    localStorage.setItem("reymod-theme",theme);
  });
});
const saved=localStorage.getItem("reymod-theme")||"dark";
document.body.className=saved;
document.querySelector(`[data-theme="${saved}"]`)?.classList.add("active");

let deferredPrompt;
const installBtn=document.getElementById("installBtn");
window.addEventListener("beforeinstallprompt",e=>{
  e.preventDefault(); deferredPrompt=e;
});
installBtn.addEventListener("click",async()=>{
  if(deferredPrompt){deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null;}
  else alert("Gunakan menu browser lalu pilih 'Tambahkan ke layar utama' jika tersedia.");
});
if("serviceWorker" in navigator){navigator.serviceWorker.register("sw.js").catch(()=>{});}
