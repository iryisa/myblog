export class Post {
    categoria: string;
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: Date;


    constructor(pCategoria, pTitulo, pTexto, pAutor, pImagen, ) {
        this.categoria = pCategoria;
        this.titulo = pTitulo;
        this.texto = pTexto;
        this.autor = pAutor;
        this.imagen = pImagen;
        this.fecha = new Date();

    }
}