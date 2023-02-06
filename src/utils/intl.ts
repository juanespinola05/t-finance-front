
const formatter = new Intl.NumberFormat('es-AR', { currency: 'ARS' })

export const formatCurrency = (number: number): string => formatter.format(number)
