/*import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'bootstrap/dist/js/bootstrap.esm.js';
import 'https://unpkg.com/localbase@0.7.5/dist/localbase.dev.js?module'
import './style.css'
import { createApp, reactive } from 'https://unpkg.com/petite-vue?module'
const store = reactive({
  url: "https://script.google.com/macros/s/AKfycbzQOgdsxPa-eow4rJ0FZNWeZ4JK1Rx3YDieGcyuVtTiiX5V535Y4OakCMgU7fzW3DVkNg/exec?",
  word: "",
  list: [],
  push: function($el){
    this.word = $el.value;
    this.list = [];
    (async ()=>{
      if (this.word.length > 0){
      const param = new URLSearchParams({"type": "search", "word": this.word.trim()}).toString()
      const data = await fetch(this.url + param)
      const reData = await data.json();
      this.list = [...reData.data.filter((e, i) => i < 10).reverse()]
      }
    })()
  },
  listData: null,
  page: 1,
  lastPage: 1,
  getList: function(){
    this.listData = null;
    (async ()=>{
      if (this.word.length > 0){
      const param = new URLSearchParams({"type": "list", "tag": this.word.trim(), "page": this.page}).toString()
      const data = await fetch(this.url + param)
      const reData = await data.json();
      this.listData = [...reData.data.reverse()]
      this.lastPage = reData.last
      }
    })()
  },
  imageSelected: "",
  setImage: function(_url){
    this.imageSelected = "";
    const _ = new Image();
    if (!/.gif$/.test(_url)){
      _.src = 'https://imagex.aratech.co/?url=' + encodeURI(_url.replace(/(http|https):\/\//, ''));
    } else {
      _.src = "https://api.allorigins.win/raw?url=" + _url
    }
    _.addEventListener("error", ()=> {_.src = "https://api.allorigins.win/raw?url=" + _url})
    _.addEventListener("load", ()=> this.imageSelected = _.src)
  },
  showModal: ()=> {new Modal(document.querySelector('.modal')).show()}
})
    createApp({
      store: store
    }).mount('#app')*/
