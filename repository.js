const synonyms = new Map()

synonyms.set('smart', {
    text: 'smart',
    synonym: 'brilliant'
})

synonyms.set('long', {
    text: 'long',
    synonym: 'tall'
})

export function readAll() {
    return Array.from(synonyms.values())
}

export function read(text) {
    return synonyms.get(text)
}

export function create(text, synonym) {
    if (!synonyms.has(text)) {
        return synonyms.set(text, synonym)
    } else {
        throw new Error('ALREADY EXISTS')
    }
}

export function update(text, synonym) {
    return synonyms.set(text, synonym)
}

export function remove(text) {
    synonyms.remove(text)
}


