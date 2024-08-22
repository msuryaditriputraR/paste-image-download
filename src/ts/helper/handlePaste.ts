import downloadImage from "./downloadImage.js";

export default async function handlePaste() {
    const clipboardItems = await navigator.clipboard.read();

    if (!clipboardItems) {
        console.info("There is no clipboard data");
    } else {
        for (const clipboardItem of clipboardItems) {
            //
            for (const itemType of clipboardItem.types) {
                if (itemType.includes("image")) {
                    const parsedItem = await clipboardItem.getType(itemType);
                    downloadImage(parsedItem);
                }
            }
        }
    }
}
