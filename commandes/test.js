"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "📎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello my name is  *Mr-anyway-tech* \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *Mranyway Tech*';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/001964ff948602d0c868f.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Mr-anyway-tech* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *mranyway*'
      let varmess=z+d
      var img='https://telegra.ph/file/001964ff948602d0c868f.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 