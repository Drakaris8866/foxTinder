export const getStringWithoutHTTP = (string: string) => {
     return string.split("/").pop() as string
}
