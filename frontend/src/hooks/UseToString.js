export const toJavaDateString = (date) => date?.toISOString().slice(0, 10);

export const toUserReadableDateString = (dateString) => dateString?.toLocaleDateString('es-US')
