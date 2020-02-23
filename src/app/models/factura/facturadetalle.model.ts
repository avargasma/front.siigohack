import { EntityModel } from "../entity.model";

export class FacturaDetalleModel extends EntityModel {
    FDNumFactura:number;
    FDPrefijo:string;
    FDItem: number;
    FDCodProducto: number;
    FDDescription: string;
    FDCantidad: number;
    FDPrecioUnitario: number;
    FDSubtotal: number;
    FDIva: number;
    FDCodiIva: number;
    FDNetoItem: number;
    FDUusarioCrea: number;
    FDFechaCrea: Date;
}

export class FacturaDetalleModelFactuacion extends FacturaDetalleModel {
    TotalIva: number;
}
