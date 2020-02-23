import { EntityModel } from "../entity.model";

export class ClienteModel extends EntityModel {
    TRId: number;
    TRSucursal: number;
    TRTipoDoc: number;
    TRDv: number;
    TRRazonSocial: string;
    TRRazonComercial: string;
    TRPNombre: string;
    TRSNombre: string;
    TRPApellido: string;
    TRSApellido: string;
    TRCelular: string;
    TRMail: string;
    TRTipoCliente: number;
    TRUsuarioCrea: number;
    TRFechaCrea: Date;
}
