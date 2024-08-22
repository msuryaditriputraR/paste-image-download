export default function downloadImage(
    image: Blob,
    fileName: string = "image"
): void {
    const url = URL.createObjectURL(image);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;

    link.click();
    link.remove();

    URL.revokeObjectURL(url);
}
