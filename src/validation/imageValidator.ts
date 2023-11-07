import { bytesToMb } from "@/lib/utils"


export const imageValidator = (name: string| undefined,size: number| undefined) => {
    let fleg: string | null = null
    if (name) {
        const getImageExt = name.split('.')
        const imgExtType: Array<string> = ['svg', 'png', 'jpg', 'jpeg', 'gif']
        if (!imgExtType.includes(getImageExt[1])) {
            fleg = 'Image must be .png .svg .jpg .jpeg .gif'
        }
        else {
            fleg = null
        }
    }
    if (size) {
        const imageToMB = bytesToMb(size)
        if (imageToMB > 2) {
            fleg = 'Image should be less than 2MB'
        }
        else {
            fleg = null
        }
    }
    return fleg
}