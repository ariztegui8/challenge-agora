export const changeEditDescription = (text, maxText) => {
    if (text.length > maxText) {
        return text.substring(0, maxText) + "...";
    }
    return text;
}