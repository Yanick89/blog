export const imageSelected = (input: HTMLInputElement, imageUrl: string) =>{
    let imageReady = imageUrl
    const fileList: any = input.files;
    for (const file of fileList) {
        const image = URL.createObjectURL(file);
        imageReady = image
    }      
}
