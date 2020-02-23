import { EntityModel } from "../entity.model";

export class FacturaModel extends EntityModel {
    PBId: number;
    PBIdBodega: number;
    PBIdProveedor: number;
    PBCodProducto: number;
    PBSaldoAnterio: number;
    PBSaldo: number;
    PBUsuarioCrea: number;
    PBFechaCrea: Date;
    PBUsuariomMod: number;
    PBFechaMod: Date;
}
