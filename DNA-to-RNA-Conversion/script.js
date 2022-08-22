function DNAtoRNA(dna) {
    const splitDNA = dna.split("")

    for (let i = 0; i < splitDNA.length; i++) {
        if (splitDNA[i] === "T") {
            splitDNA[i] = "U"
        }
    }

    return splitDNA.join("")
}

console.log(DNAtoRNA("GUTC"))
