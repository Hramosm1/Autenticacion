<a name="top"></a>
# Api Autenticacion v1.1.0

Aplicacion de autenticacion general utilizando usuarios de sic

# Table of contents

- [aplicaciones](#aplicaciones)
  - [Crear](#Crear)
  - [Editar](#Editar)
  - [Eliminar](#Eliminar)
  - [Una aplicacion](#Una-aplicacion)
  - [Varias aplicaciones](#Varias-aplicaciones)
- [login](#login)
  - [Validacion con usuario contraseña](#Validacion-con-usuario-contraseña)
  - [Validacion por medio de token](#Validacion-por-medio-de-token)
- [modulos](#modulos)
  - [Crear](#Crear)
  - [Editar](#Editar)
  - [Eliminar](#Eliminar)
  - [Un modulo](#Un-modulo)
  - [Varios Modulos](#Varios-Modulos)
- [permisos](#permisos)
  - [Editar](#Editar)
  - [Permisos de un modulo](#Permisos-de-un-modulo)
- [roles](#roles)
  - [Crear](#Crear)
  - [Editar](#Editar)
  - [Eliminar](#Eliminar)
  - [Un rol](#Un-rol)
  - [Varios roles](#Varios-roles)
- [usuarios](#usuarios)
  - [Un usuario](#Un-usuario)

___


# <a name='aplicaciones'></a> aplicaciones

## <a name='Crear'></a> Crear
[Back to top](#top)

```
POST /aplicaciones
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| nombre | `string` | <p>el nombre de la aplicacion</p> |
### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| body | `json` | <p>json de la aplicacion creada</p> |

## <a name='Editar'></a> Editar
[Back to top](#top)

```
PUT /aplicaciones/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `Number` | <p>id de la aplicacion a editar</p> |

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| nombre | `string` | <p>nuevo nombre de la aplicacion</p> |
### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| body | `json` | <p>json de la aplicacion editada</p> |

## <a name='Eliminar'></a> Eliminar
[Back to top](#top)

```
DELETE /aplicaciones/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `Number` | <p>id de la aplicacion a eliminar</p> |
### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| body | `json` | <p>json de la aplicacion eliminada</p> |

## <a name='Una-aplicacion'></a> Una aplicacion
[Back to top](#top)

```
GET /aplicaciones/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>id de aplicacion</p> |

## <a name='Varias-aplicaciones'></a> Varias aplicaciones
[Back to top](#top)

```
GET /aplicaciones
```

# <a name='login'></a> login

## <a name='Validacion-con-usuario-contraseña'></a> Validacion con usuario contraseña
[Back to top](#top)

```
POST login/:duracion?
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| duracion | `string` | **optional** <p>por defecto 24h parametro opcional que te permite decidir la duracion del token</p>_Default value: 24h_<br> |

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| user | `string` | <p>nombre de usuario</p> |
| password | `string` | <p>contraseña</p> |
| aplicacion | `number` | <p>id de la aplicacion</p> |

### Parameters examples

`string` - puedes enviar distintas opciones tales como 60, &#34;2 days&#34;, &#34;10h&#34;, &#34;7d&#34;

```string
puedes enviar distintas opciones tales como 60, "2 days", "10h", "7d"
```

### Success response example

#### Success response example - `Respuesta 200:`

```json
{
"accessToken": "token"
"user": {
  "id": "UUID",
  "usuario": "USER",
  "nombre": "USER NAME",
  "idPersonaUnica": "UUDI",
  "correo": "example@gmail.com",
  "permisos": [],
  "permisosEspeciales": []
 }
}
```

## <a name='Validacion-por-medio-de-token'></a> Validacion por medio de token
[Back to top](#top)

```
GET /login/verifyToken
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token | `string` | <p>para que funcione es necesario enviar un hearer Authorization que contenga tipo_token</p> |

### Header examples

Ejemplo token:

```json
{
  "Authorization": "Bearer token"
}
```

### Success response example

#### Success response example - `Respuesta 200:`

```json
{
"accessToken": "token"
"user": {
  "id": "UUID",
  "usuario": "USER",
  "nombre": "USER NAME",
  "idPersonaUnica": "UUDI",
  "correo": "example@gmail.com",
  "permisos": [],
  "permisosEspeciales": []
 }
}
```

# <a name='modulos'></a> modulos

## <a name='Crear'></a> Crear
[Back to top](#top)

```
POST /modulos
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| nombre | `string` | <p>el nombre del modulo</p> |
### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| body | `json` | <p>json del modulo creado</p> |

## <a name='Editar'></a> Editar
[Back to top](#top)

```
PUT /modulos/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `Number` | <p>id del modulo a editar</p> |

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| nombre | `string` | <p>nuevo nombre del modulo</p> |
### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| body | `json` | <p>json del modulo editado</p> |

## <a name='Eliminar'></a> Eliminar
[Back to top](#top)

```
DELETE /modulos/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `Number` | <p>id del modulo a eliminar</p> |
### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| body | `json` | <p>json del modulo eliminado</p> |

## <a name='Un-modulo'></a> Un modulo
[Back to top](#top)

```
GET /modulos/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `Number` | <p>id del modulo</p> |

## <a name='Varios-Modulos'></a> Varios Modulos
[Back to top](#top)

```
GET /modulos
```

# <a name='permisos'></a> permisos

## <a name='Editar'></a> Editar
[Back to top](#top)

<p>Recibe un listado de permisos por rol para editar</p>

```
POST /permisos
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `Number` | <p>id del permiso a editar</p> |
| ver | `Boolean` | <p>permiso para realizar dicha accion</p> |
| crear | `Boolean` | <p>permiso para realizar dicha accion</p> |
| editar | `Boolean` | <p>permiso para realizar dicha accion</p> |
| eliminar | `Boolean` | <p>permiso para realizar dicha accion</p> |
### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| body | `json` | <p>json de la aplicacion creada</p> |

## <a name='Permisos-de-un-modulo'></a> Permisos de un modulo
[Back to top](#top)

```
GET /permisos/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `Number` | <p>id de un modulo</p> |

### Success response example

#### Success response example - `json-resultado`

```json
[
   {
      "id":1,
      "ver":true,
      "crear":true,
      "editar":true,
      "eliminar":true,
      "Roles":{
         "id":1,
         "nombre":"Administrador"
      },
      "Modulos":{
         "id":1,
         "nombre":"Tickets",
         "Aplicaciones":{
            "id":1,
            "nombre":"Help Desk"
         }
      }
   },
   {
      "id":3,
      "ver":true,
      "crear":true,
      "editar":false,
      "eliminar":false,
      "Roles":{
         "id":2,
         "nombre":"Soporte"
      },
      "Modulos":{
         "id":1,
         "nombre":"Tickets",
         "Aplicaciones":{
            "id":1,
            "nombre":"Help Desk"
         }
      }
   },
   {
      "id":5,
      "ver":true,
      "crear":true,
      "editar":true,
      "eliminar":true,
      "Roles":{
         "id":3,
         "nombre":"Desarrollo"
      },
      "Modulos":{
         "id":1,
         "nombre":"Tickets",
         "Aplicaciones":{
            "id":1,
            "nombre":"Help Desk"
         }
      }
   },
   {
      "id":7,
      "ver":true,
      "crear":true,
      "editar":false,
      "eliminar":false,
      "Roles":{
         "id":4,
         "nombre":"Usuario"
      },
      "Modulos":{
         "id":1,
         "nombre":"Tickets",
         "Aplicaciones":{
            "id":1,
            "nombre":"Help Desk"
         }
      }
   }
]
```

# <a name='roles'></a> roles

## <a name='Crear'></a> Crear
[Back to top](#top)

```
POST /roles
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| nombre | `string` | <p>el nombre del rol</p> |
### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| body | `json` | <p>json del rol creado</p> |

## <a name='Editar'></a> Editar
[Back to top](#top)

```
PUT /roles/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `Number` | <p>id del rol a editar</p> |

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| nombre | `string` | <p>nuevo nombre del rol</p> |
### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| body | `json` | <p>json del rol editado</p> |

## <a name='Eliminar'></a> Eliminar
[Back to top](#top)

```
DELETE /roles/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `Number` | <p>id del rol a eliminar</p> |
### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| body | `json` | <p>json del rol eliminada</p> |

## <a name='Un-rol'></a> Un rol
[Back to top](#top)

```
GET /roles/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>id de aplicacion</p> |

## <a name='Varios-roles'></a> Varios roles
[Back to top](#top)

```
GET /roles
```

# <a name='usuarios'></a> usuarios

## <a name='Un-usuario'></a> Un usuario
[Back to top](#top)

```
GET /usuarios/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>id del usuario</p> |

