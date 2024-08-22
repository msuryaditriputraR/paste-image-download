var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import downloadImage from "./downloadImage.js";
export default function handlePaste() {
    return __awaiter(this, void 0, void 0, function* () {
        const clipboardItems = yield navigator.clipboard.read();
        if (!clipboardItems) {
            console.info("There is no clipboard data");
        }
        else {
            for (const clipboardItem of clipboardItems) {
                //
                for (const itemType of clipboardItem.types) {
                    //
                    const itemGenericType = itemType.split("/")[0];
                    if (itemGenericType === "image") {
                        const parsedItem = yield clipboardItem.getType(itemType);
                        downloadImage(parsedItem);
                    }
                    else {
                        console.error("your Clipboard Item is not an Image");
                    }
                }
            }
        }
    });
}
