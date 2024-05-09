// ProductModel.js
export default class ProductModel {
  constructor(productData) {
    this.bajoDemanda = productData.bajo_demanda;
    this.canon = productData.canon;
    this.categoria = productData.categoria;
    this.created_at = productData.created_at;
    this.cualidades = productData.cualidades;
    this.descripcion = productData.descripcion;
    this.ean = productData.ean;
    this.fabricante = productData.fabricante;
    this.fam0 = productData.fam0;
    this.fam1 = productData.fam1;
    this.familia = productData.familia;
    this.fecha_alta = productData.fecha_alta;
    this.fecha_limite_unidades_hasta = productData.fecha_limite_unidades_hasta;
    this.id = productData.id;
    this.id_fabricante = productData.id_fabricante;
    this.id_familia = productData.id_familia;
    this.id_subfamilia = productData.id_subfamilia;
    this.images = productData.images;
    this.liquidacion = productData.liquidacion;
    this.margen = productData.margen;
    this.margen_oferta_pvp = productData.margen_oferta_pvp;
    this.margen_pvp = productData.margen_pvp;
    this.oferta = productData.oferta;
    this.oferta_date_of = productData.oferta_date_of;
    this.oferta_date_to = productData.oferta_date_to;
    this.oferta_discount = productData.oferta_discount;
    this.oferta_pvd = productData.oferta_pvd;
    this.peso = productData.peso;
    this.pn = productData.pn;
    this.proveedor = productData.proveedor;
    this.pvd = productData.pvd;
    this.pvd_estandar = productData.pvd_estandar;
    this.pvp = productData.pvp;
    this.referencia = productData.referencia;
    this.stock = productData.stock;
    this.stock_disponible = productData.stock_disponible;
    this.stockstatus = productData.stockstatus;
    this.subfamilia = productData.subfamilia;
    this.titulo = productData.titulo;
    this.titulo_small = productData.titulo_small;
    this.type_reduction = productData.type_reduction;
    this.updated_at = productData.updated_at;
    this.url_imagen = productData.url_imagen;
    this.url_imagen_compress = productData.url_imagen_compress;
    this.url_product = productData.url_product;
    this.volumen = productData.volumen;
  }
}
