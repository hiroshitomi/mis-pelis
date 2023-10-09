export const GuardarEnStorage = (key, elemento) => {
    let elementos = JSON.parse(localStorage.getItem(key))
    
    if (Array.isArray(elementos)) {
      elementos.push(elemento)
    } 
    else {
      elementos = [elemento]
    }

    //Guardar datos en LocalStorage
    localStorage.setItem(key, JSON.stringify(elementos));

    return elemento
  };
