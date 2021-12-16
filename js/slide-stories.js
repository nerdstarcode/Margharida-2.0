
class SlideStories{
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0;
        this.init()
    }
    //responsável pela manutenção do slide ativo, retira o atual atualizando para o novo
    activeSlide(index) {
        this.active = index;
        this.items.forEach(item => item.classList.remove('active'));
        this.items[index].classList.add('active');
        this.thumbItems.forEach(item => item.classList.remove('active'));
        this.thumbItems[index].classList.add('active');
        this.autoSlide();
    }
    //a parte responsável pela função do botão da imagem anterior
    prev() {
        if(this.active > 0){    
            this.activeSlide(this.active - 1);
        } else {
            this.activeSlide(this.items.length - 1);
        }
    }
    //imagem posterior
    next() {

        if(this.active < this.items.length - 1){
            this.activeSlide(this.active + 1);
        } else{
            this.activeSlide(0);
        }
    }
    //galeria de sucos
    sucos() {
        this.activeSlide(0);
        this.items.forEach(() => (this.thumb.innerHTML -= `<span></span>`));
        this.items = this.slide.querySelectorAll('.sucos > *');
        this.thumb = this.slide.querySelector('.slide-thumb');
        this.addThumbItems();
    }
    //galeria de cafes
    cafes() {
        this.activeSlide(0);
        this.items.forEach(() => (this.thumb.innerHTML -= `<span></span>`));
        this.items = this.slide.querySelectorAll('.cafes > *');
        this.thumb = this.slide.querySelector('.slide-thumb');
        this.addThumbItems();
    }
    //galeria de caldos
    caldos() {
        this.activeSlide(0);
        this.items.forEach(() => (this.thumb.innerHTML -= `<span></span>`));
        this.items = this.slide.querySelectorAll('.caldos > *');
        this.thumb = this.slide.querySelector('.slide-thumb');
        this.addThumbItems();
    }
    //galeria de tapiocas
    tapiocas() {
        this.activeSlide(0);
        this.items.forEach(() => (this.thumb.innerHTML -= `<span></span>`));
        this.items = this.slide.querySelectorAll('.tapiocas > *');
        this.thumb = this.slide.querySelector('.slide-thumb');
        this.addThumbItems();
    }
    //galeria de crepiocas
    crepiocas() {
        this.activeSlide(0);
        this.items.forEach(() => (this.thumb.innerHTML -= `<span></span>`));
        this.items = this.slide.querySelectorAll('.crepiocas > *');
        this.thumb = this.slide.querySelector('.slide-thumb');
        this.addThumbItems();
    }
        
    //aqui fica a parte responsável por chamar a função do botão posterior e anterior ao clicar e das mudanças dos slides de cada item
    addNavigation() {
        const nextBtn = this.slide.querySelector('.slide-next');
        const prevBtn = this.slide.querySelector('.slide-prev');
        const sucoBtn = this.slide.querySelector('.slide-sucos')
        const cafeBtn = this.slide.querySelector('.slide-cafes');
        const caldoBtn = this.slide.querySelector('.slide-caldos');
        const tapiocaBtn = this.slide.querySelector('.slide-tapiocas');
        const crepiocaBtn = this.slide.querySelector('.slide-crepiocas');
        nextBtn.addEventListener('click', this.next);
        prevBtn.addEventListener('click', this.prev);
        sucoBtn.addEventListener('click', this.sucos);
        cafeBtn.addEventListener('click', this.cafes);        
        caldoBtn.addEventListener('click', this.caldos);
        tapiocaBtn.addEventListener('click', this.tapiocas);
        crepiocaBtn.addEventListener('click', this.crepiocas);
    }
    
    //aqui é responsável pela adição automática de quantas barrinhas terão de acordo com a quantidade de imagens adicionadas no html
    addThumbItems(){
        this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
        this.thumbItems = Array.from(this.thumb.children);
    }
    //a parte da função do auto slide
    autoSlide() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.next, 5000);
    }
    
    //chama as funções necessárias no carregamento inicial da página.
    init(){
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.sucos = this.sucos.bind(this);
        this.cafes = this.cafes.bind(this);
        this.caldos = this.caldos.bind(this);
        this.tapiocas = this.tapiocas.bind(this);
        this.crepiocas = this.crepiocas.bind(this);
        this.items = this.slide.querySelectorAll('.sucos > *');
        this.thumb = this.slide.querySelector('.slide-thumb');
        this.addThumbItems();
        this.activeSlide(0);
        this.addNavigation();
    }
}
new SlideStories('cardapio');
