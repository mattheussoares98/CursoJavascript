function switchPersonalized(note) {
    switch (note) {
        case 10:
            console.log(10)
            break;
        case 9:
            console.log(9)
            break;
        case 8:
        case 7:
            console.log("Between 7 and 8")
            break;
        default:
            console.log("< 7")
    }
}

switchPersonalized(6);