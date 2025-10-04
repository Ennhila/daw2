
let total = 0;
let pedido = 0;
let loop = true;


//permite que el cliente seleciona varios platos
while(loop){

    //mostrar el menu al cliente
    console.log(`Menu:`);
    console.log(`\t1: Pizza(10€)`);
    console.log(`\t2: Hamburguesa (8 €)`);
    console.log(`\t3: Ensalada (6 €)`);
    console.log(`\t4: Bebida (2 €)`);
    console.log(`\t5: Finalizar pedido`);

    let opc = parseInt(window.prompt("Selecciona un plato (1-5)"));

    switch(opc){
        case 1:
            total += 10;
            console.log(`Plato agregado. total hasta ahora: $${total}`);
            pedido++;
            break;
        case 2:
            total += 8;
            console.log(`Plato agregado. total hasta ahora: $${total}`);
            pedido++;
            break;
        case 3:
            total += 6;
            console.log(`Plato agregado. total hasta ahora: $${total}`);
            pedido++;
            break;
        case 4:
            total += 2;
            console.log(`Plato agregado. total hasta ahora: $${total}`);
            pedido++;
            break;
        case 5:
            console.log("Finalizando pedido...");
            //Aplicar un descuento del 10% si el cliente pide mas de 3 platos
            let descuento = 0;
            
            if(pedido > 3){
                //console.log(`Se aplica un 10% descuento`);
                descuento = total * 0.10;
                total = total - descuento;
            }

            //Muesrar el pedido
            console.log("Numero de platos: " + pedido);
            console.log("Descuento aplicado: " + descuento + " €");
            console.log("Total final a pagar: " + total + " €");

            loop = false;
            break;
        default:
            console.log(`opcion no  es valida`);
    }

}