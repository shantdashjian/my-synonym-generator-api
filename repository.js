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
    if (synonyms.has(text)) {
        return synonyms.get(text)
    } else {
        throw new Error('NOT FOUND')
    }
}

export function create(synonym) {
    const text = synonym.text
    if (!synonyms.has(text)) {
        synonyms.set(text, synonym)
        return synonym
    } else {
        throw new Error('ALREADY EXISTS')
    }
}

export function update(text, synonym) {
    synonyms.set(text, synonym)
    return synonym
}

export function remove(text) {
    synonyms.delete(text)
}


