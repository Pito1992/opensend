const compactFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
})

const percentFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 2,
})

function formatNumberWithFormatter(
  value: unknown,
  formatter: InstanceType<typeof Intl.NumberFormat>
) {
  if (typeof value === 'number') {
    return formatter.format(value)
  }
  return value
}

export function formatCompactNumber(value: unknown) {
  return formatNumberWithFormatter(value, compactFormatter)
}

export function formatPercent(value: unknown) {
  return formatNumberWithFormatter(value, percentFormatter)
}
