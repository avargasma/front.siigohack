import { EntityModel } from "./entity.model";

export class UserModel extends EntityModel {
    CLApellidos: string;
    CLCantClicsCompra: number;
    CLCantClicsSeleccionoAdmin: number;
    CLCantClicsSeleccionoAdminVenta: number;
    CLCantClicsVenta:number;
    CLCiudad: string;
    CLContrasena: string;
    CLCorreo: string;
    CLCreated: Date;
    CLDireccion: string;
    CLEnableClicCompra: boolean;
    CLEnableCliclVenta: boolean;
    CLIdClient: number;
    CLIsAdmon: boolean;
    CLModified: Date;
    CLNombres: string;
    CLPositionItemCompra: number;
    CLPositionItemVenta: number;
    CLTelefono: string;
    CLUsuario: string;
    CLUsuCreated: number;
    CLUsuMod: number;
    CLVigente: boolean;
}

export class UserModelLogin extends UserModel {
    token:string;
}


export class UserModelSuscripcion extends UserModel {
    CSId: number;
    SCId: number;
    SCNombre: string;
    SCCantCoordenadas: number;
    CSFechaFin: Date;
}