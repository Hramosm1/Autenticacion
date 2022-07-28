export interface RolPorUsuarioI {
  Roles: {
    Permisos: {
      id: number;
      activo: boolean | null;
      ver: boolean | null;
      crear: boolean | null;
      editar: boolean | null;
      eliminar: boolean | null;
      Modulos: {
        id: number;
        nombre: string;
      };
    }[];
    PermisosEspecialesPorRol: any[];
  };
}[]