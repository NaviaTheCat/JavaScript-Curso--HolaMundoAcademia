function calcularPropina(cuenta, porcentaje) {
  // Ejemplo: cuenta = 500, porcentaje = 15
  // La propina sería 500 * 0.15 = 75
  // El total sería 500 + 75 = 575

  // TU CÓDIGO AQUÍ:
    const propina = cuenta * (porcentaje / 100)
    return cuenta + propina
}

const resultado = calcularPropina(700, 15)
console.log(resultado)