export const loadImportMap = async (urlOrContent, type = "systemjs-importmap") => {
    console.log('Loading import map', urlOrContent)
    const element = document.createElement("script");

    if (typeof urlOrContent === 'string') {
        element.src = urlOrContent;
    } else {
        element.innerText = JSON.stringify(urlOrContent)
    }
    element.type = type

    const cleanup = () => {
        console.log(`Import Map removed: ${urlOrContent}`);
        document.head.removeChild(element);
    }

    document.head.appendChild(element);

    if (type === 'systemjs-importmap') {
        try {
            await System.prepareImport(true)
        } catch (e) {
            console.error('Import map failed to load:', e)
            cleanup()
            throw new Error(`Failed to load import map ${urlOrContent}`)
        }
    }

    console.log('Import map successfully loaded!')
}
