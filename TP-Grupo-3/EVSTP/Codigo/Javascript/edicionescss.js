function mostrar() {
    if (document.getElementById('tipo_metodopagoMP').checked) {
        document.getElementById('MercadoPago').style.display = 'block';
    } else if (!document.getElementById('tipo_metodopagoMP').checked) {
        document.getElementById('MercadoPago').style.display = 'none';
    }

    if (document.getElementById('tipo_metodopagoCB').checked) {
        document.getElementById('CuentaBancaria').style.display = 'block';
    } else if (!document.getElementById('tipo_metodopagoCB').checked) {
        document.getElementById('CuentaBancaria').style.display = 'none';
    }

    if (document.getElementById('tipo_metodopagoTdC').checked) {
        document.getElementById('TarjetadeCredito').style.display = 'block';
    } else if (!document.getElementById('tipo_metodopagoTdC').checked) {
        document.getElementById('TarjetadeCredito').style.display = 'none';
    }

    if (document.getElementById('VIP1').checked) {
        document.getElementById('texto_VIP').style.display = 'block';
    } 
    if (document.getElementById('VIP2').checked || !document.getElementById('VIP1').checked) {
        document.getElementById('texto_VIP').style.display = 'none';
    }
}