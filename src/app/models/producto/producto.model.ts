import { EntityModel } from "../entity.model";

export class ProductoModel extends EntityModel {
    PRId: number;
    PRNombre:string;
    PRDescripcion:string;
    PRUsuarioCreo: number;
    PRFechaCrea:Date;
    PRUsuarioMod: number;
    PRFechaMod:Date;
    PRActivo: Boolean;
    PRCodigoBarras:string;
    PRImpuesto: number;
    PRPrecio: number = 0;
}

export class ProductoModelFactura extends ProductoModel {
    PorcentajeIva:number;
    SaldoSucursal:number = 0;
    SaldoGeneral:number = 0;
}