function simularPeticionAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    try {
        const datos = await simularPeticionAPI();
        console.log(datos);
    } catch (error) {
        console.error("Error:", error);
    }
}

obtenerDatos();