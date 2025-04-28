export const postProductos = asyn (req, res) => {
    try{
        const {name, description, price_cost, price_sale, quantity, image } = req.body;

        //1. Consultamos el último ID en la base de datos
        const [result] = await pool.query("SELECT MAX(id) AS last_id FROM productos");

        //2. Obtenemos el último ID y lo incrementamos
        const lastId = result[0].last_id || 0; //Si no hay productos, el último ID será 0
        const newId = lastId +1; //Calculamos el nuevo ID

        //3. Insertamos el nuevo producto con el ID incrementado
        const [insertResut] = await pool.query(
            "INSERT INTO productos (id, nombre, descripcion, precio_costo, precio_venta, cantidad, fotografia) 
            VALUES (?, ?, ?, ?, ?, ?, ?)",
            [newId, name, description, prince_const, prince_sale, quantity, image]
        );

        //4. Verficamos si la inserción fue exitosa
        if (insertResult.affectedRows >0){
            res.json({message: "Producto Agregado", id:newId});
        }else{
            res.status(404).json({message: "No se ingresó el producto"});
        }
    }catch(error){
        console.error(error);
        return res.status(500).json({message: 'Algo salio mal'});
    }
};
  
