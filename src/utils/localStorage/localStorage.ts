export const getItemFromStorage = (itemName: string) => {
    if (typeof localStorage !== "undefined"){
        const item = localStorage.getItem(itemName)
        return item ? JSON.parse(item) : null
    }
    return null
}
