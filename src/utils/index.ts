export const getTotalPrice = (items: MenuFoods[]) => {
  return items.reduce((accumulator, current) => {
    return (accumulator += current.preco)
  }, 0)
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
