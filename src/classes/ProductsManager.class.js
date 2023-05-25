import fs from "fs";
import { v4 as uuidV4 } from 'uuid'

const path = "src/classes/files/products.json"

export default class ManagerProducts {
    consultarProductos = async (limit) => {
        console.log("Producto existente", fs.existsSync(path));
        if (fs.existsSync(path)) {
            const data = await fs.promises.readFile(path, "utf-8");
            const  products = JSON.parse(data);
            if (limit) {
                return products.slice(0, limit);
            } else {
                return products;
            }
        } else {
            return [];
        }
    };

    crearProducto = async (info) => {
        const productos = await this.consultarProductos();
        info.id = uuidV4();
        productos.push(info);
        await fs.promises.writeFile(path, JSON.stringify(productos, null, "\t"));
        return info;
    };

    consultarProductoPorId = async (id) => {
        const productos = await this.consultarProductos();

        const producto = productos.find((producto) => {
            return producto.id == id;
        });

        return producto ? producto : "Id de producto no encontrado";
    };
    
    eliminarProductoPorId = async (id) => {
        const productos = await this.consultarProductos();
        const index = productos.findIndex((producto) => producto.id === id);
    
        if (index !== -1) {
            productos.splice(index, 1);
            await fs.promises.writeFile(path, JSON.stringify(productos, null, "\t"));
            return { status: "Producto eliminado correctamente" };
        } else {
            return { status: "No se encontró el producto con el ID proporcionado" };
        }
    };

    actualizarProductoPorId = async (id, updatedFields) => {
        const productos = await this.consultarProductos();
        const index = productos.findIndex((producto) => producto.id === id);
        
        if (index !== -1) {
            const producto = productos[index];
            Object.assign(producto, updatedFields);
            await fs.promises.writeFile(path, JSON.stringify(productos, null, "\t"));
            return { status: "Producto actualizado correctamente" };
        } else {
            return { status: "No se encontró el producto con el ID proporcionado" };
        }
    };

}
