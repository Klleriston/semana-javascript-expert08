//responsavel por atualizar a tela

export default class View {
    #fileUpload = document.getElementById('fileUpload')
    #btnUploadVideo = document.getElementById('btnUploadVideos')
    #fileSize = document.getElementById('fileSize')
    #fileInfo = document.getElementById('fileInfo')
    #txtfileName = document.getElementById('fileName')
    #fileUploadWrapper = document.getElementById('fileUploadWrapper')
    #elapsed = document.getElementById('elapsed')

    #canvas = document.getElementById('preview-144p')


    onChange(fn) {
        return e => {
            const file = e.target.files[0]
            const { name, size } = file
            fn(file)
            this.#txtfileName.innerText = name
            this.#fileSize.innerText = parseBytesIntoMBAndGB(size)

            this.#fileInfo.classList.remove('hide')
            this.#fileUploadWrapper.classList.add('hide')

            
        }
    }

    updateElapsedTime(text){
        this.#elapsed.innerText = text
    }
    configureOnFileChange(fn) {
        this.#fileUpload.addEventListener('change', this.onChange(fn))
    }
}