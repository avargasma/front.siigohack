import { EntityModel } from "../entity.model";

export class FacturaModel extends EntityModel {
    FCNumero: number;
    FCPrefijo: string;
    FCSucursal: number;
    FCFecha: Date;
    FCCliente:number;
    FCVendedor:number;
    FCSubTotal:number;
    FCTotalIva:number;
    FCTotalDescuento:number;
    FCTotalNeto:number;
    FCObservaciones:string;
    FCUusarioCrea:number;
    FCFechaCrea: Date;
}
